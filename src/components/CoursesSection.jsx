import { useState } from 'react';
import { courses } from '../data/siteData';
import SectionHeader from './SectionHeader';
import './CoursesSection.css';

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Undergraduate', value: 'ug' },
  { label: 'Postgraduate', value: 'pg' },
  { label: 'Research', value: 'phd' },
];

export default function CoursesSection() {
  const [active, setActive] = useState('all');

  return (
    <section className="section section-dark" id="courses">
      <div className="section-inner">
        <SectionHeader
          tag="Academics"
          tagLight
          title="Our"
          titleHighlight="Programs"
          desc="Explore a wide range of undergraduate, postgraduate, and research programs."
          dark
        />
        <div className="course-filters">
          {filters.map((f) => (
            <button
              key={f.value}
              className={`filter-btn ${active === f.value ? 'active' : ''}`}
              onClick={() => setActive(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="courses-grid">
          {courses.map((c, i) => (
            <div
              key={i}
              className={`course-card ${active !== 'all' && c.category !== active ? 'hidden' : ''}`}
              style={active === 'all' || c.category === active ? { animation: 'fadeIn .4s ease forwards' } : {}}
            >
              <div className={`course-badge ${c.badgeClass || ''}`}>{c.badge}</div>
              <h3>{c.name}</h3>
              <p>{c.full}</p>
              <span className="course-dur"><i className="far fa-clock"></i> {c.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
