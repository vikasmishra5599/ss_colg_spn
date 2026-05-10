import useSlider from '../hooks/useSlider';
import { heroSlides, stats } from '../data/siteData';
import StatCounter from './StatCounter';
import './HeroSlider.css';

export default function HeroSlider() {
  const { current, handleNext, handlePrev, handleGoTo } = useSlider(heroSlides.length, 5000);

  return (
    <section className="hero" id="home">
      <div className="hero-slider">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`hero-slide ${i === current ? 'active' : ''}`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <div className="hero-badge animate-in">{slide.badge}</div>
              <h2 className="hero-title animate-in">
                {slide.title[0]} <br /><span>{slide.title[1]}</span>
              </h2>
              <p className="hero-desc animate-in">{slide.desc}</p>
              <div className="hero-btns animate-in">
                {slide.buttons.map((btn, j) =>
                  btn.primary ? (
                    <a key={j} href={btn.href} className="hero-btn-primary">
                      {btn.label} {btn.icon && <i className={btn.icon}></i>}
                    </a>
                  ) : (
                    <a key={j} href={btn.href} className="hero-btn-outline">{btn.label}</a>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="hero-controls">
        <button className="hero-arrow hero-prev" onClick={handlePrev} aria-label="Previous slide">
          <i className="fas fa-chevron-left"></i>
        </button>
        <div className="hero-dots">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              className={`hero-dot ${i === current ? 'active' : ''}`}
              onClick={() => handleGoTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button className="hero-arrow hero-next" onClick={handleNext} aria-label="Next slide">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      <div className="stats-bar">
        {stats.map((stat, i) => (
          <StatCounter key={i} target={stat.target} suffix={stat.suffix} label={stat.label} />
        ))}
      </div>
    </section>
  );
}
