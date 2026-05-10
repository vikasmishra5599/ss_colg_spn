import { galleryImages } from '../data/siteData';
import SectionHeader from './SectionHeader';
import './GallerySection.css';

export default function GallerySection() {
  return (
    <section className="section" id="gallery">
      <div className="section-inner">
        <SectionHeader
          tag="Campus Life"
          title="Photo"
          titleHighlight="Gallery"
          desc="A glimpse into the vibrant life at Swami Shukdevanand University."
        />
        <div className="gallery-grid">
          {galleryImages.map((img, i) => (
            <div key={i} className={`gallery-item ${img.className}`}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
