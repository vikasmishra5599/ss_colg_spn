# Swami Shukdevanand University - Official Website

Official website for **Swami Shukdevanand University, Shahjahanpur, Uttar Pradesh** — built as a modular React single-page application.

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Frontend** | React | 19.x |
| **Build Tool** | Vite | 8.x |
| **Styling** | CSS (component-scoped) | — |
| **Icons** | Font Awesome | 6.5 |
| **Fonts** | Google Fonts (Inter, Playfair Display) | — |
| **Container** | Docker / Podman | — |
| **Web Server** | Nginx (Alpine) | 1.27 |
| **Runtime** | Node.js (build only) | 22 |

No external UI libraries. No CSS frameworks. Pure React + CSS.

---

## Project Structure

```
.
├── public/
│   └── images/                  # All static images
├── src/
│   ├── components/              # 16 UI components (each with .jsx + .css)
│   │   ├── TopBar               # Top bar with marquee & social links
│   │   ├── Header               # University branding, CTAs, logos
│   │   ├── Navbar               # Sticky nav with dropdowns & mobile menu
│   │   ├── HeroSlider           # Auto-advancing hero image slider
│   │   ├── TickerBar            # Scrolling news ticker
│   │   ├── QuickLinks           # 24-item quick access grid
│   │   ├── EventsLeadership     # Event slider + leader profile cards
│   │   ├── SectionHeader        # Reusable section heading component
│   │   ├── StatCounter          # Reusable animated number counter
│   │   ├── AboutSection         # About features grid
│   │   ├── CoursesSection       # Filterable course catalog
│   │   ├── GallerySection       # Photo gallery grid
│   │   ├── PlacementSection     # Placement statistics
│   │   ├── NoticesSection       # Latest notice cards
│   │   ├── ContactSection       # Contact info + form
│   │   ├── SocialMediaSection   # Facebook, Instagram, YouTube cards
│   │   ├── Footer               # Footer with link columns
│   │   └── BackToTop            # Scroll-to-top button
│   ├── hooks/                   # Custom React hooks
│   │   ├── useSlider.js         # Slider logic (hero + events)
│   │   ├── useCounterAnimation.js # Scroll-triggered counter animation
│   │   └── useScrollReveal.js   # IntersectionObserver reveal effect
│   ├── data/
│   │   └── siteData.js          # All site content in one place
│   ├── styles/
│   │   └── global.css           # CSS variables, reset, shared styles
│   ├── App.jsx                  # Root component
│   └── main.jsx                 # Entry point
├── Dockerfile                   # Multi-stage production build
├── docker-compose.yml           # One-command container deployment
├── nginx.conf                   # Production nginx configuration
├── .dockerignore
├── vite.config.js
└── package.json
```

---

## Prerequisites

- **Node.js** >= 18 (22 recommended)
- **npm** >= 9
- **Podman** or **Docker** (for containerised deployment)

---

## Run Locally (Development)

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

The app will be available at **http://localhost:5173** with hot module replacement.

### Other Commands

```bash
# Production build (outputs to dist/)
npm run build

# Preview production build locally
npm run preview
```

---

## Run with Podman / Docker

### Using Podman (recommended for rootless)

```bash
# Build the image
podman build -t ssu-university .

# Run the container
podman run -d --name ssu-university -p 3000:8080 ssu-university

# Verify
curl http://localhost:3000          # App
curl http://localhost:3000/health   # Health check

# Stop & remove
podman stop ssu-university && podman rm ssu-university
```

### Using Docker

```bash
docker build -t ssu-university .
docker run -d --name ssu-university -p 3000:8080 ssu-university
```

### Using Docker Compose / Podman Compose

```bash
# Start
docker compose up -d       # or: podman compose up -d

# Stop
docker compose down        # or: podman compose down
```

The app will be available at **http://localhost:3000**.

---

## Host on the Internet

### Option 1: GCP Cloud Run (Recommended)

Cloud Run is serverless — no VMs to manage, scales to zero, free tier covers low-traffic sites.

**Prerequisites:**
- [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) installed
- A GCP project with billing enabled
- Authenticated: `gcloud auth login`

**Quick deploy (one command):**

```bash
./deploy.sh                        # uses current gcloud project, us-central1
./deploy.sh my-project us-east1    # custom project & region
```

**Manual step-by-step:**

```bash
# Set variables
export PROJECT_ID=my-gcp-project
export REGION=us-central1

# Enable APIs
gcloud services enable run.googleapis.com artifactregistry.googleapis.com

# Create Artifact Registry repo
gcloud artifacts repositories create cloud-run \
  --repository-format=docker --location=$REGION

# Build & push
gcloud auth configure-docker ${REGION}-docker.pkg.dev --quiet
docker build -t ${REGION}-docker.pkg.dev/${PROJECT_ID}/cloud-run/ssu-university:latest .
docker push ${REGION}-docker.pkg.dev/${PROJECT_ID}/cloud-run/ssu-university:latest

# Deploy
gcloud run deploy ssu-university \
  --image=${REGION}-docker.pkg.dev/${PROJECT_ID}/cloud-run/ssu-university:latest \
  --region=$REGION --platform=managed --port=8080 \
  --allow-unauthenticated --memory=256Mi
```

**CI/CD with Cloud Build:**

1. Push this repo to GitHub or Cloud Source Repositories.
2. In GCP Console > Cloud Build > Triggers, create a trigger on push to `main`.
3. Point it to the included `cloudbuild.yaml`.
4. Every push auto-builds and deploys to Cloud Run.

**Custom domain:**

```bash
gcloud run domain-mappings create \
  --service=ssu-university --domain=yourdomain.ac.in --region=$REGION
```

Then add the CNAME/A records shown in the output to your DNS.

---

## Environment Details

| Item | Detail |
|------|--------|
| Internal port | `8080` (nginx inside container) |
| Exposed port | `3000` (mapped in docker-compose) |
| Health check | `GET /health` returns `200 OK` |
| Image size | ~100 MB |
| Non-root | Runs as `nginx` user inside container |
| Gzip | Enabled for CSS, JS, SVG, fonts |
| Caching | Hashed assets: 1 year, images: 30 days |
| Security headers | X-Frame-Options, X-Content-Type-Options, XSS-Protection |

---

## License

All rights reserved. Swami Shukdevanand University, Shahjahanpur, Uttar Pradesh.
