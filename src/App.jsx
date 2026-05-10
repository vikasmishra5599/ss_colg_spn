import './styles/global.css';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import TickerBar from './components/TickerBar';
import QuickLinks from './components/QuickLinks';
import EventsLeadership from './components/EventsLeadership';
import AboutSection from './components/AboutSection';
import CoursesSection from './components/CoursesSection';
import GallerySection from './components/GallerySection';
import PlacementSection from './components/PlacementSection';
import NoticesSection from './components/NoticesSection';
import ContactSection from './components/ContactSection';
import SocialMediaSection from './components/SocialMediaSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <HeroSlider />
      <TickerBar />
      <QuickLinks />
      <EventsLeadership />
      <AboutSection />
      <CoursesSection />
      <GallerySection />
      <PlacementSection />
      <NoticesSection />
      <ContactSection />
      <SocialMediaSection />
      <Footer />
      <BackToTop />
    </>
  );
}
