import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Designs', href: '#designs' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = ['home', 'about', 'designs', 'experience', 'contact'];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#07060b]/80 backdrop-blur-xl border-b border-[#1e1b2e]/50 shadow-lg shadow-purple-900/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="relative group hoverable">
          <span className="text-2xl font-bold font-[Space_Grotesk]">
            <span className="gradient-text">UW</span>
            <span className="text-[#9996a8] text-lg ml-1 font-light">.design</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link text-sm font-medium transition-colors duration-300 hoverable ${
                activeSection === link.href.slice(1)
                  ? 'text-[#a855f7]'
                  : 'text-[#9996a8] hover:text-[#f1f0f5]'
              }`}
            >
              {link.label}
            </a>
          ))}
          {/* TODO: Update contact section or link if needed */}
          <a
            href="#contact"
            className="glow-btn px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] text-white hoverable"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#f1f0f5] hoverable"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 space-y-4 bg-[#07060b]/95 backdrop-blur-xl border-t border-[#1e1b2e]/50">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block text-sm font-medium py-2 transition-colors duration-300 hoverable ${
                activeSection === link.href.slice(1)
                  ? 'text-[#a855f7]'
                  : 'text-[#9996a8] hover:text-[#f1f0f5]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
