import './Header.css';

export default function Header() {
  return (
    <header className="header" id="header">
      <div className="header-inner">
        <div className="brand">
          <img src="/images/logo.png" alt="Swami Shukdevanand University Logo" className="brand-logo" />
          <div className="brand-text">
            <h2 className="brand-name">स्वामी शुकदेवानंद विश्वविद्यालय,शाहजहाँपुर</h2>
            <p className="brand-accreditation">
              <i className="fas fa-award"></i>Swami Shukdevanand University,Mumukshu Ashram Shahjahanpur
            </p>
            <p className="brand-tagline">सर्व भूत हिते रताः</p>
            <p className="university-note">(Formerly, Swami Shukdevanand College)</p>
          </div>
        </div>
        <div className="header-actions">
          <div className="quick-links">
            <a href="#" className="quick-link"><i className="fas fa-graduation-cap"></i> Scholarship Link</a>
            <a href="#" className="quick-link"><i className="fas fa-credit-card"></i> Fee Payment</a>
            <a href="#" className="quick-link"><i className="fas fa-id-card"></i> ABC ID Registration</a>
          </div>
          <div className="cta-buttons">
            <a href="#" className="cta-primary">
              <span className="cta-pulse"></span>
              <i className="fas fa-file-alt"></i> Admission Form 2026-27
            </a>
            <a href="#" className="cta-secondary">
              <i className="fas fa-play-circle"></i> Campus Vibes 🎓✨
            </a>
          </div>
          <div className="brand">
            <img src="/images/logo2.jpeg" alt="Swami Shukdevanand University Logo" className="brand-logo" />
          </div>
        </div>
      </div>
    </header>
  );
}
