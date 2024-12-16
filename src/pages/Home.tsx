import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedPrints from '../components/home/FeaturedPrints';
import AboutSection from '../components/home/AboutSection';

const Home = () => {
  return (
    <div className="pt-16">
      <Hero />
      <FeaturedPrints />
      <AboutSection />
    </div>
  );
};

export default Home;