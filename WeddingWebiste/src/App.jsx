import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OurStory />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
