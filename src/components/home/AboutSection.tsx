import React from 'react';
import { Printer, Award, Clock, Sparkles } from 'lucide-react';
import { FEATURES } from '../../constants/features';

const AboutSection = () => {
  return (
    <section className="py-16 gaming-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 neon-glow">About Print Lab</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're gamers crafting epic loot for your collection. Using cutting-edge tech to bring
            your favorite game items into reality! 🎮✨
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800/50 rounded-lg border border-game-green/20 hover:border-game-green/40 transition-all duration-200"
            >
              <div className="mb-4 text-game-green">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;