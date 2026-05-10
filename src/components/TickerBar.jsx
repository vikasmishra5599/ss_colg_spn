import { useEffect, useRef } from 'react';
import { tickerItems } from '../data/siteData';
import './TickerBar.css';

export default function TickerBar() {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.innerHTML += scrollRef.current.innerHTML;
    }
  }, []);

  return (
    <div className="ticker-bar" id="tickerBar">
      <div className="ticker-label">Latest @SSU</div>
      <div className="ticker-content">
        <div className="ticker-scroll" ref={scrollRef}>
          {tickerItems.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
