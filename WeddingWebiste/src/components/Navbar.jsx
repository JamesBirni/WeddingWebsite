import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#story' },
    { name: 'FAQs', href: '#faq' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          J <Heart className="logo-icon" size={16} fill="currentColor" /> K
        </a>

        {/* Desktop Menu */}
        <div className="navbar-links-desktop">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="navbar-mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`navbar-links-mobile ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="nav-link-mobile"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
