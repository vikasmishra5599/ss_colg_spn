import useSlider from '../hooks/useSlider';
import { eventSlides, leaders } from '../data/siteData';
import './EventsLeadership.css';

function LeaderCard({ leader }) {
  const posClass = leader.position === 'first' ? 'leader-card-first' :
                   leader.position === 'last' ? 'leader-card-last' : '';
  return (
    <div className={`leader-card ${posClass}`}>
      <div className="leader-img-wrap">
        <img src={leader.image} alt={leader.alt} className="leader-img" />
      </div>
      <h3 className="leader-name">{leader.name}</h3>
      <p className="leader-role">{leader.role}</p>
      {leader.links.length > 1 ? (
        <div className="leader-links-row">
          {leader.links.map((link, i) => (
            <a key={i} href={link.href} className="leader-link">{link.label}</a>
          ))}
        </div>
      ) : (
        <a href={leader.links[0].href} className="leader-link">{leader.links[0].label}</a>
      )}
    </div>
  );
}

export default function EventsLeadership() {
  const { current, handleNext, handlePrev, handleGoTo } = useSlider(eventSlides.length, 4500);

  return (
    <section className="events-leadership" id="eventsLeadership">
      <div className="el-inner">
        <div className="el-layout">
          <div className="el-slider-wrap">
            <div className="el-slider">
              {eventSlides.map((slide, i) => (
                <div key={i} className={`el-slide ${i === current ? 'active' : ''}`}>
                  <img src={slide.image} alt={slide.alt} />
                  <div className="el-slide-overlay">
                    <h2 className="el-slide-title">{slide.title}</h2>
                  </div>
                </div>
              ))}
            </div>
            <button className="el-arrow el-prev" onClick={handlePrev} aria-label="Previous event">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="el-arrow el-next" onClick={handleNext} aria-label="Next event">
              <i className="fas fa-chevron-right"></i>
            </button>
            <div className="el-dots">
              {eventSlides.map((_, i) => (
                <button
                  key={i}
                  className={`el-dot ${i === current ? 'active' : ''}`}
                  onClick={() => handleGoTo(i)}
                  aria-label={`Go to event ${i + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="el-leaders">
            {leaders.map((leader, i) => (
              <LeaderCard key={i} leader={leader} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
