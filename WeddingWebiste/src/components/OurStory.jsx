import React from 'react';
import { Tent, Snowflake, Dices } from 'lucide-react';
import './OurStory.css';

export default function OurStory() {
  const adventures = [
    {
      id: 'camping',
      title: 'Under the Stars',
      subtitle: 'Camping & Exploration',
      icon: <Tent size={28} />,
      desc: 'We find immense joy in the simplicity of camping and exploring the great outdoors. Pitching a tent, gathering around a crackling campfire under clear starry nights, and sharing stories in the quiet woods has taught us to appreciate God\'s simple gifts.',
      accent: 'var(--primary-sage)',
    },
    {
      id: 'winter',
      title: 'Cozy Winter Days',
      subtitle: 'Woodland Walks & Hot Cocoa',
      icon: <Snowflake size={28} />,
      desc: 'When winter blankets the hills, we love the quiet charm of the season. Whether taking a crisp afternoon walk through snowy pine trees, enjoying scenic winter views, or warming up with mugs of hot cocoa by the fireplace at home, we cherish cozy times together.',
      accent: 'var(--accent-terracotta)',
    },
    {
      id: 'games',
      title: 'Playful Connections',
      subtitle: 'Games Nights & Casual Sports',
      icon: <Dices size={28} />,
      desc: 'We believe that a joyful life is filled with laughter and play. Whether we are hosting lively board games nights with our close friends, playing friendly matches of pickleball together, or staying active, we love having fun in good company.',
      accent: 'var(--primary-forest)',
    },
    {
      id: 'faith',
      title: 'Built on Faith',
      subtitle: 'Our Catholic Foundation',
      icon: <span className="custom-cross-icon">✝</span>,
      desc: 'Above all, our lives are anchored in our Catholic faith. From praying together in quiet chapels to recognizing God’s hand in the majesty of the outdoors, our love is built on the sacraments, deep prayer, and a desire to help each other reach Heaven.',
      accent: 'var(--accent-terracotta)',
    },
  ];

  return (
    <section id="story" className="story-section">
      <div className="section-container">
        
        <div className="section-title fade-in-up">
          <span className="section-subtitle">Our Journey</span>
          <h2>A Life of Shared Adventures</h2>
        </div>

        <div className="story-intro-desc">
          <p>
            We believe that love is a beautiful, active journey. Over the past few years, we have built our 
            relationship on quiet campsites, beautiful woodland trails, lively games nights with friends, laughter, 
            and a shared Catholic faith that binds us closer every single day. Here is a glimpse into the lifestyle we cherish.
          </p>
        </div>

        <div className="story-grid">
          {adventures.map((adv) => (
            <div 
              key={adv.id} 
              className={`story-card card-${adv.id}`}
              style={{ '--card-accent': adv.accent }}
            >
              <div className="story-card-icon-wrapper">
                {adv.icon}
              </div>
              <span className="story-card-subtitle">{adv.subtitle}</span>
              <h3 className="story-card-title">{adv.title}</h3>
              <p className="story-card-desc">{adv.desc}</p>
              
              <div className="story-card-hover-border"></div>
            </div>
          ))}
        </div>

        <div className="story-cta-box fade-in-up">
          <h3>"The world offers you comfort. But you were not made for comfort. You were made for greatness."</h3>
          <p>— Pope Benedict XVI</p>
        </div>

      </div>
    </section>
  );
}
