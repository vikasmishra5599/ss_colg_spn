import './SocialMediaSection.css';

export default function SocialMediaSection() {
  return (
    <section className="social-section" id="socialMedia">
      <div className="social-inner">
        <h2 className="social-heading">
          <span className="social-heading-accent"></span>
          Follow Us On Social Media
        </h2>
        <div className="social-grid">
          {/* Facebook Card */}
          <div className="social-card social-card-fb">
            <div className="social-card-header">
              <img src="/images/logo.png" alt="SSU Logo" className="social-avatar" />
              <div className="social-card-info">
                <h4>Swami Shukdevanand University</h4>
                <p>Official Facebook Page</p>
              </div>
              <i className="fab fa-facebook social-brand-icon social-icon-fb"></i>
            </div>
            <div className="social-card-body">
              <div className="social-post">
                <p className="social-post-text">The University organized a &quot;Bapu Bazaar&quot; event to celebrate cultural heritage. Check out the highlights! 🎉</p>
                <img src="/images/social-fb-post.png" alt="Bapu Bazaar Event" className="social-post-img" />
                <div className="social-post-stats">
                  <span><i className="fas fa-thumbs-up"></i> 342 Likes</span>
                  <span><i className="fas fa-comment"></i> 56 Comments</span>
                </div>
              </div>
              <a href="#" className="social-follow-btn social-btn-fb">
                <i className="fab fa-facebook-f"></i> Follow Page
              </a>
            </div>
          </div>

          {/* Instagram Card */}
          <div className="social-card social-card-ig">
            <div className="social-card-header">
              <img src="/images/logo.png" alt="SSU Logo" className="social-avatar" />
              <div className="social-card-info">
                <h4>Swami Shukdevanand University</h4>
                <p>@ssu_official</p>
              </div>
              <i className="fab fa-instagram social-brand-icon social-icon-ig"></i>
            </div>
            <div className="social-card-body">
              <div className="social-post">
                <div className="ig-grid">
                  <img src="/images/social-ig-post.png" alt="Campus Golden Hour" className="ig-thumb" />
                  <img src="/images/campus-hero.png" alt="Campus View" className="ig-thumb" />
                  <img src="/images/graduation.png" alt="Graduation" className="ig-thumb" />
                  <img src="/images/library.png" alt="Library" className="ig-thumb" />
                </div>
                <div className="social-post-stats">
                  <span><i className="fas fa-heart"></i> 1.2K Followers</span>
                  <span><i className="fas fa-images"></i> 89 Posts</span>
                </div>
              </div>
              <a href="#" className="social-follow-btn social-btn-ig">
                <i className="fab fa-instagram"></i> Follow on Instagram
              </a>
            </div>
          </div>

          {/* YouTube Card */}
          <div className="social-card social-card-yt">
            <div className="social-card-header">
              <img src="/images/logo.png" alt="SSU Logo" className="social-avatar" />
              <div className="social-card-info">
                <h4>Swami Shukdevanand University</h4>
                <p>Official YouTube Channel</p>
              </div>
              <i className="fab fa-youtube social-brand-icon social-icon-yt"></i>
            </div>
            <div className="social-card-body">
              <div className="social-post">
                <div className="yt-thumb-wrap">
                  <img src="/images/social-yt-thumb.png" alt="Campus Tour Video" className="social-post-img" />
                  <div className="yt-play-btn"><i className="fas fa-play"></i></div>
                  <span className="yt-duration">12:34</span>
                </div>
                <p className="yt-video-title">Campus Tour 2026 — Swami Shukdevanand University</p>
                <div className="social-post-stats">
                  <span><i className="fas fa-eye"></i> 15K Views</span>
                  <span><i className="fas fa-clock"></i> 2 days ago</span>
                </div>
              </div>
              <a href="#" className="social-follow-btn social-btn-yt">
                <i className="fab fa-youtube"></i> Subscribe
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
