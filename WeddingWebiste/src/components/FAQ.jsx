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
      answer: "Our indoor reception with an outdoor patio will be held at the beautiful Sunset Ranch Golf & Country Club (5101 Upper Booth Rd S). Celebrations begin at 5:30 PM with cocktails, dinner, and dancing to follow! The venue is fully accessible and indoors, so feel free to wear your favorite heels or dress shoes.",
      links:[]
    },

    {
      id: 4,
      question: "Where is the registry located?",
      answer: "The registry can be found at the link below. We also will be accepting cash gifts, Purchased gifts can either be brought to the reception (there will be a designated table) or sent to the following address: 4805 Canyon Ridge Crescent). Cash gifts will also be accepted and can be either sent via e-transfer to kas.cut@outlook.com or placed in the cards box at the reception (will be on the gifts table).", 
      links: [{name: "Registry Link", url: "https://www.myregistry.com/wedding-registry/kasia-cutforth-and-james-birnie-kelowna-bc/5364682"}]
    },
    {
      id: 5,
      question: "What does the bar situation look like?",
      answer: "Each adult guest (19+)  will get 2 drink tickets, afterwards guests will have to pay for additional drinks (payment details here). There will be unlimited non-alcoholic drinks.",
      links: []
    },
    {
      id: 6,
      question: "Where can I park for the ceremony and reception?",
      answer: "Free parking is available at both the ceremony and reception locations. Please do NOT drink and drive, if needed you can leave your vehicle in the reception parking lot overnight.",
      links: []
    },
    {
      id: 7,
      question: "When does the partying end?",
      answer: "The festivities will end @12:00am. ",
      links: []
    },
    {
      id: 8,
      question: "Can phones be used to take pictures during the ceremony and reception?",
      answer: "We ask that all phones be put away and on silent for the duration of the ceremony. We would like everyone to be in the moment and present with us for the beautiful events taking place. Phones/photo taking are welcome at the reception. We will have a QR code where you can upload your photos from the night and see/download photos from others. We think this is a fun way to see the night from different perspectives.",
      links: []
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
