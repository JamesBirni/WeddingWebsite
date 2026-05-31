import React from 'react';
import { Heart, Compass, MessageSquare } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-decor">
          <div className="decor-line"></div>
          <Heart size={20} className="decor-heart" fill="currentColor" />
          <div className="decor-line"></div>
        </div>

        <h2 className="footer-signature">James &amp; Kasia</h2>
        
        <p className="footer-scripture">
          "Therefore what God has joined together, let no one separate."
        </p>

        <div className="footer-nav">
          <a href="#home" className="footer-link">Home</a>
          <a href="#faq" className="footer-link">FAQs</a>
        </div>

        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} James &amp; Kasia. Built in love &amp; faith. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
