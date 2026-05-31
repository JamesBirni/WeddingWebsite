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
      answer: "Yes, our wedding ceremony will be celebrated with a traditional Catholic Nuptial Mass. All of our family and friends, regardless of background or beliefs, are deeply welcome to join us in this special celebration! The ceremony will begin promptly at 1:00 PM at St. Charles Garnier (3645 Benvoulin Rd). We kindly ask guests to arrive 15-20 minutes early to find seating."
    },
    {
      id: 2,
      question: "What is the dress code for the ceremony and reception?",
      answer: "We recommend Semi-Formal Attire. Since our ceremony is inside a church, we kindly ask that attire be respectful. Our reception is indoors at the golf course clubhouse, so you will be fully comfortable inside, but a light jacket or wrap is still recommended for Kelowna's beautiful summer evenings."
    },
    {
      id: 3,
      question: "What are the details for the reception, and when does it start?",
      answer: "Our indoor reception will be held at the beautiful Sunset Ranch Golf & Country Club (5101 Upper Booth Rd S). Celebrations begin at 5:30 PM with cocktails, dinner, and dancing to follow! The venue is fully accessible and indoors, so feel free to wear your favorite heels or dress shoes."
    },

    {
      id: 5,
      question: "Are children welcome to attend?",
      answer: "Yes, we would love to celebrate with your entire family! Children are welcome at both the Mass and the reception. We will have kid-friendly meals and spacious areas at the venue for them to be comfortable."
    },
    {
      id: 6,
      question: "Where are you registered?",
      answer: "Your presence, prayers, and support are the greatest gifts we could ask for! For those who wish to contribute, we have set up a registry focusing on our home foundation and funding our upcoming wilderness adventures (including a dream hiking honeymoon!). You can find the links on our online registry registry page."
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
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
