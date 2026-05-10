import { aboutFeatures } from '../data/siteData';
import SectionHeader from './SectionHeader';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="section-inner">
        <SectionHeader
          tag="About Us"
          title="Why Choose"
          titleHighlight="Our University?"
          desc="Swami Shukdevanand University is committed to providing an enriching academic experience with modern facilities, experienced faculty, and a vibrant campus life."
        />
        <div className="about-grid">
          {aboutFeatures.map((f, i) => (
            <div className="about-card" key={i}>
              <div className="about-icon"><i className={f.icon}></i></div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
