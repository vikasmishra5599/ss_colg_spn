import { placementStats } from '../data/siteData';
import SectionHeader from './SectionHeader';
import StatCounter from './StatCounter';
import './PlacementSection.css';

export default function PlacementSection() {
  return (
    <section className="section section-dark" id="placement">
      <div className="section-inner">
        <SectionHeader
          tag="Career"
          tagLight
          title="Placement"
          titleHighlight="Highlights"
          desc="Our students are placed in top companies across the nation."
          dark
        />
        <div className="placement-stats">
          {placementStats.map((s, i) => (
            <StatCounter key={i} target={s.target} suffix={s.suffix} label={s.label} className="pl" />
          ))}
        </div>
      </div>
    </section>
  );
}
