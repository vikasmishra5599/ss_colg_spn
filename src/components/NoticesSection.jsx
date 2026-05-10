import { notices } from '../data/siteData';
import SectionHeader from './SectionHeader';
import './NoticesSection.css';

export default function NoticesSection() {
  return (
    <section className="section" id="notices">
      <div className="section-inner">
        <SectionHeader tag="Updates" title="Latest" titleHighlight="Notices" />
        <div className="notices-grid">
          {notices.map((n, i) => (
            <div className="notice-card" key={i}>
              <div className="notice-date"><i className="far fa-calendar"></i> {n.date}</div>
              {n.isNew && <span className="notice-new">NEW</span>}
              <h4>{n.title}</h4>
              <p>{n.desc}</p>
              <a href="#" className="notice-link">Read More <i className="fas fa-arrow-right"></i></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
