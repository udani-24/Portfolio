import { useEffect } from 'react';
import CursorGlow from './components/CursorGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import DesignShowcase from './components/DesignShowcase';
import Volunteering from './components/Volunteering';
import WebExperience from './components/WebExperience';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Smooth scroll polyfill behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#07060b] text-[#f1f0f5]">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Volunteering />
        <WebExperience />
        <DesignShowcase />
      </main>
      <Footer />
    </div>
  );
}
