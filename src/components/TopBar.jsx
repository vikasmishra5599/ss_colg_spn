import { useEffect, useRef } from 'react';
import { marqueeItems } from '../data/siteData';
import './TopBar.css';

export default function TopBar() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    if (marqueeRef.current) {
      marqueeRef.current.innerHTML += marqueeRef.current.innerHTML;
    }
  }, []);

  return (
    <div className="top-bar" id="topBar">
      <div className="top-bar-inner">
        <div className="top-bar-left">
          <a href="#" className="top-link"><i className="fas fa-download"></i> Download Prospectus</a>
          <span className="top-divider"></span>
          <a href="#" className="top-link"><i className="fas fa-phone"></i> Helpline: 1800-XXX-XXXX</a>
        </div>
        <div className="marquee-wrapper">
          <div className="marquee-content" ref={marqueeRef}>
            {marqueeItems.map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        </div>
        <div className="top-bar-right">
          <span>Connect:</span>
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-x-twitter"></i></a>
        </div>
      </div>
    </div>
  );
}
