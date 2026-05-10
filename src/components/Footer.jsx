import { footerQuickLinks, footerResources, footerImportant } from '../data/siteData';
import './Footer.css';

function FooterLinkColumn({ title, links }) {
  return (
    <div className="footer-links">
      <h4>{title}</h4>
      {links.map((link, i) => (
        <a href="#" key={i}>{link}</a>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/images/logo.png" alt="Logo" className="footer-logo" />
          <h3>Swami Shukdevanand University</h3>
          <p>Shahjahanpur, Uttar Pradesh | NAAC B++</p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <FooterLinkColumn title="Quick Links" links={footerQuickLinks} />
        <FooterLinkColumn title="Resources" links={footerResources} />
        <FooterLinkColumn title="Important" links={footerImportant} />
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Swami Shukdevanand University. All Rights Reserved.</p>
        <p>Designed with ❤️ for Academic Excellence</p>
      </div>
    </footer>
  );
}
