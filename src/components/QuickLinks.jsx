import { quickLinksRow1, quickLinksRow2 } from '../data/siteData';
import './QuickLinks.css';

function QLinkCard({ item }) {
  return (
    <a href="#" className="qlink-card">
      <div className={`qlink-icon ${item.text ? 'qlink-icon-text' : ''}`}>
        {item.icon ? <i className={item.icon}></i> : item.text}
      </div>
      <span className="qlink-label">{item.label}</span>
    </a>
  );
}

export default function QuickLinks() {
  return (
    <section className="quick-grid-section" id="quickLinks">
      <div className="quick-grid-inner">
        <div className="quick-grid quick-grid-mb">
          {quickLinksRow1.map((item, i) => <QLinkCard key={i} item={item} />)}
        </div>
        <div className="quick-grid">
          {quickLinksRow2.map((item, i) => <QLinkCard key={i} item={item} />)}
        </div>
      </div>
    </section>
  );
}
