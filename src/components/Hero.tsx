import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("src/Images/digital marketing 1.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Empowering Your Digital Presence – From Strategy to Execution!
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Transform your business with our comprehensive digital solutions. We combine creativity,
            technology, and strategy to deliver exceptional results.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="bg-blue-600 text-white px-8 py-3 rounded-full flex items-center hover:bg-blue-700 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              Book a Free Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}