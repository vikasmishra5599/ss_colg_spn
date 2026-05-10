#!/usr/bin/env bash
# ============================================
# Deploy to GCP Cloud Run (manual)
# ============================================
# Prerequisites:
#   - gcloud CLI installed and authenticated
#   - A GCP project with billing enabled
#
# Usage:
#   ./deploy.sh                           # defaults
#   ./deploy.sh my-project us-east1       # custom project & region
# ============================================

set -euo pipefail

PROJECT_ID="${1:-$(gcloud config get-value project 2>/dev/null)}"
REGION="${2:-us-central1}"
SERVICE_NAME="ssu-university"
REPO_NAME="cloud-run"
IMAGE="${REGION}-docker.pkg.dev/${PROJECT_ID}/${REPO_NAME}/${SERVICE_NAME}:latest"

if [ -z "$PROJECT_ID" ]; then
  echo "Error: No GCP project set. Pass as argument or run: gcloud config set project <PROJECT_ID>"
  exit 1
fi

echo "==> Project:  $PROJECT_ID"
echo "==> Region:   $REGION"
echo "==> Service:  $SERVICE_NAME"
echo "==> Image:    $IMAGE"
echo ""

# 1. Enable required APIs
echo "==> Enabling APIs..."
gcloud services enable \
  run.googleapis.com \
  cloudbuild.googleapis.com \
  artifactregistry.googleapis.com \
  --project="$PROJECT_ID" --quiet

# 2. Create Artifact Registry repo (if not exists)
echo "==> Creating Artifact Registry repository..."
gcloud artifacts repositories describe "$REPO_NAME" \
  --location="$REGION" --project="$PROJECT_ID" 2>/dev/null \
|| gcloud artifacts repositories create "$REPO_NAME" \
  --repository-format=docker \
  --location="$REGION" \
  --project="$PROJECT_ID" \
  --quiet

# 3. Configure Docker auth for Artifact Registry
echo "==> Configuring Docker auth..."
gcloud auth configure-docker "${REGION}-docker.pkg.dev" --quiet

# 4. Build & push
echo "==> Building image..."
docker build -t "$IMAGE" .

echo "==> Pushing image..."
docker push "$IMAGE"

# 5. Deploy to Cloud Run
echo "==> Deploying to Cloud Run..."
gcloud run deploy "$SERVICE_NAME" \
  --image="$IMAGE" \
  --region="$REGION" \
  --platform=managed \
  --port=8080 \
  --allow-unauthenticated \
  --cpu=1 \
  --memory=256Mi \
  --min-instances=0 \
  --max-instances=3 \
  --project="$PROJECT_ID" \
  --quiet

# 6. Print URL
URL=$(gcloud run services describe "$SERVICE_NAME" \
  --region="$REGION" \
  --project="$PROJECT_ID" \
  --format='value(status.url)')

echo ""
echo "==> Deployed successfully!"
echo "==> URL: $URL"
