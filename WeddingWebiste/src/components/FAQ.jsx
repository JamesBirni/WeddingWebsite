import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
import './FAQ.css';

export default function FAQ() {
  // =========================================================================
  // CUSTOMIZABLE QUESTIONS AND ANSWERS (JSON ARRAY)
  // Feel free to modify, add, or delete any of the questions and answers below!
  // =========================================================================
  const faqData = [
    {
      id: 1,
      question: "What time is the ceremony, and is it a full Mass?",
      answer: "Yes, our wedding ceremony will be celebrated with a Catholic Nuptial Mass. All of our family and friends, regardless of background or beliefs, are deeply welcome to join us in this special celebration! The ceremony will begin promptly at 1:00 PM at St. Charles Garnier (3645 Benvoulin Rd). We kindly ask guests to arrive at least 15-20 minutes early to find seating. If you want a quick 5 minute overview of what to expect at a Catholic wedding Mass, check out the video linked below! There is also a longer walkthrough video for those who want a more in-depth explanation of the cathloic mass.",
      links: [{name: "5 Minute Overview Video", url: "https://www.youtube.com/watch?v=4w_SSRtCdUw"}, {name: "In-Depth Walkthrough Video", url: "https://www.youtube.com/watch?v=HiWonBGkmwY"  }]
    },
    {
      id: 2,
      question: "What is the dress code for the ceremony and reception?",
      answer: "We recommend Semi-Formal Attire. Since our ceremony is inside a church, we kindly ask that attire be respectful. Our reception is indoors at the golf course clubhouse, so you will be fully comfortable inside",
      links:[]
    },
    {
      id: 3,
      question: "What are the details for the reception, and when does it start?",
      answer: "Our indoor reception will be held at the beautiful Sunset Ranch Golf & Country Club (5101 Upper Booth Rd S). Celebrations begin at 5:30 PM with cocktails, dinner, and dancing to follow! The venue is fully accessible and indoors, so feel free to wear your favorite heels or dress shoes.",
      links:[]
    },

    {
      id: 4,
      question: "Where is the registry located?",
      answer: "The registry can be found at the link below. We also will be accepting cash gifts, which will go towards our honeymoon and future adventures together! We are so grateful for your generosity and support as we start this new chapter of our lives.",
      links: [{name: "Registry Link", url: "https://www.myregistry.com/wedding-registry/kasia-cutforth-and-james-birnie-kelowna-bc/5364682"}]
    }
  ];
  // =========================================================================
  // END OF CUSTOMIZABLE SECTION
  // =========================================================================

  // State to track which accordion item is currently open. 
  // Set to null if all items are closed.
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    // If the clicked item is already open, close it (set to null).
    // Otherwise, open it and automatically close the others.
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="section-container">
        
        <div className="section-title fade-in-up">
          <span className="section-subtitle">Got Questions?</span>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-intro">
          <p>
            We want your trip to Kelowna to be as smooth and joyful as possible! Here are the answers 
            to some common questions regarding travel, Catholic liturgy, dress code, and wedding logistics.
          </p>
        </div>

        <div className="faq-accordion-list">
          {faqData.map((item) => (
            <AccordionItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              links={item.links}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
