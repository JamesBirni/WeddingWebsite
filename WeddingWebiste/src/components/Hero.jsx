import React from 'react';
import { Compass, Sparkles, Heart } from 'lucide-react';
import coupleImg from '../assets/couple.jpg';
import './Hero.css';

export default function Hero() {
  return (
    <header id="home" className="hero-section">
      <div className="hero-grid-container">
        
        {/* Left Column: Elegant content */}
        <div className="hero-content fade-in-up">
          <div className="hero-badge">
            <Compass className="badge-icon" size={14} />
            <span>Adventuring Together in Grace</span>
          </div>
          
          <h1 className="hero-title">
            James <span className="serif-and">&amp;</span> Kasia
          </h1>
          
          <p className="hero-date">August 1, 2026 • Kelowna, BC</p>

          <div className="scripture-card">
            <div className="cross-divider">✝</div>
            <blockquote className="scripture-quote">
              "So they are no longer two, but one flesh. Therefore what God has joined together, let no one separate."
            </blockquote>
            <cite className="scripture-cite">— Matthew 19:6</cite>
          </div>

          <p className="hero-intro-text">
            Welcome to our wedding celebration! We share a deep love for God's beautiful creation. 
            Whether pitching our tent under the stars, hosting board games nights with friends, or 
            casually playing sports together, our greatest adventure has been discovering our shared Catholic faith. 
            We are overjoyed to invite you to stand beside us on our special day.
          </p>

          <div className="hero-actions">
            <a href="#story" className="btn-primary">
              Our Journey <Heart size={16} fill="currentColor" />
            </a>
            <a href="#faq" className="btn-secondary">
              Guest Details
            </a>
          </div>
        </div>

        {/* Right Column: Premium framed couple photo */}
        <div className="hero-image-wrapper">
          <div className="hero-image-frame-bg"></div>
          <div className="hero-image-frame-accent"></div>
          <div className="hero-image-container">
            <img 
              src={coupleImg} 
              alt="James and Kasia in the mountains" 
              className="hero-image"
            />
            <div className="hero-image-overlay">
              <span className="overlay-text">
                <Sparkles size={16} className="overlay-icon" /> 
                Our Journey Begins
              </span>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
