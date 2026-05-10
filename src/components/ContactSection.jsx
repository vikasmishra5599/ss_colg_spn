import { useState } from 'react';
import { contactInfo } from '../data/siteData';
import SectionHeader from './SectionHeader';
import './ContactSection.css';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      e.target.reset();
    }, 2500);
  };

  return (
    <section className="section section-dark" id="contact">
      <div className="section-inner">
        <SectionHeader tag="Reach Us" tagLight title="Get In" titleHighlight="Touch" dark />
        <div className="contact-grid">
          <div className="contact-info">
            {contactInfo.map((c, i) => (
              <div className="contact-item" key={i}>
                <div className="ci-icon"><i className={c.icon}></i></div>
                <div>
                  <strong>{c.label}</strong>
                  <p>{c.value}</p>
                </div>
              </div>
            ))}
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button
              type="submit"
              className="form-submit"
              style={submitted ? { background: 'linear-gradient(135deg, #27ae60, #2ecc71)' } : {}}
            >
              {submitted ? (
                <><i className="fas fa-check"></i> Sent Successfully!</>
              ) : (
                <><i className="fas fa-paper-plane"></i> Send Message</>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
