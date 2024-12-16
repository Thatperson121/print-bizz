import React from 'react';
import { Gamepad2, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative gaming-gradient min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover opacity-30"
        >
          <source src="https://cdn.pixabay.com/vimeo/328428416/binary-14594.mp4?width=1280&hash=f4988f27f1c6fc527c3c8ce0f4c869c0c2f07c2c" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-game-dark/80 to-game-dark" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Level Up Your
            <span className="text-game-green neon-glow block">3D Game</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Epic 3D prints for gamers, collectors, and creative minds! 🎮✨
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/catalog"
              className="inline-flex items-center justify-center px-6 py-3 bg-game-green text-game-dark font-bold rounded-md hover:bg-game-green/90 button-glow"
            >
              Browse Collection
              <Gamepad2 className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-game-green text-game-green font-bold rounded-md hover:bg-game-green/10 transition-colors duration-200"
            >
              Custom Order
              <Rocket className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;