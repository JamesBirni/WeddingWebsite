import React from 'react';
import { ChevronDown } from 'lucide-react';
import './AccordionItem.css';

export default function AccordionItem({ question, answer, links, isOpen, onToggle }) {
  return (
    <div className={`accordion-item ${isOpen ? 'active' : ''}`}>
      <button 
        className="accordion-trigger" 
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="accordion-question">{question}</span>
        <div className="accordion-icon-wrapper">
          <ChevronDown size={20} className="accordion-chevron" />
        </div>
      </button>

      {/* Modern CSS Grid height transition wrapper */}
      <div className="accordion-content-wrapper">
        <div className="accordion-content-inner">
          <p className="accordion-answer">{answer}</p>
          {links.length > 0 && (
            <div className="accordion-links">
              {links.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="accordion-link"
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
