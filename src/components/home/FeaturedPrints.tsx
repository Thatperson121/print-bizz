import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FEATURED_PRINTS } from '../../constants/prints';

const FeaturedPrints = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === FEATURED_PRINTS.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? FEATURED_PRINTS.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 gaming-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-2 mb-12">
          <Sparkles className="h-6 w-6 text-game-green" />
          <h2 className="text-3xl font-bold text-white neon-glow">Featured Loot</h2>
          <Sparkles className="h-6 w-6 text-game-green" />
        </div>
        
        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {FEATURED_PRINTS.map((print) => (
                <div
                  key={print.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gray-800 rounded-lg overflow-hidden card-hover border border-game-green/20">
                    <img
                      src={print.image}
                      alt={print.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {print.title}
                      </h3>
                      <p className="text-gray-400 mb-4">{print.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-game-green">
                          {print.price}
                        </span>
                        <Link
                          to={`/product/${print.id}`}
                          className="px-4 py-2 bg-game-green text-game-dark font-bold rounded-md hover:bg-game-green/90 button-glow"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-game-dark/80 p-2 rounded-full hover:bg-game-dark button-glow"
          >
            <ChevronLeft className="h-6 w-6 text-game-green" />
          </button>
          
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-game-dark/80 p-2 rounded-full hover:bg-game-dark button-glow"
          >
            <ChevronRight className="h-6 w-6 text-game-green" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrints;