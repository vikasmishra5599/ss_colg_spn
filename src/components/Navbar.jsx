import { useState, useCallback } from 'react';
import { navItems } from '../data/siteData';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = useCallback((e, href) => {
    setMenuOpen(false);
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navH = document.getElementById('navbar')?.offsetHeight || 0;
      window.scrollTo({ top: target.offsetTop - navH, behavior: 'smooth' });
    }
  }, []);

  return (
    <nav className="navbar" id="navbar">
      <div className="nav-inner">
        <button
          className={`mobile-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span></span><span></span><span></span>
        </button>
        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item, i) => (
            <li key={i} className={item.dropdown ? 'has-dropdown' : ''}>
              <a
                href={item.href}
                className={`nav-link ${i === 0 ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, item.href)}
              >
                {item.label}
                {item.dropdown && <i className="fas fa-chevron-down"></i>}
              </a>
              {item.dropdown && (
                <div className="dropdown">
                  {item.dropdown.map((sub, j) => (
                    <a href="#" key={j}>{sub}</a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
