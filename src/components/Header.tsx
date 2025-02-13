import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg':'bg-transparent'
      }`
    }
    >
      <div id=" " className="container mx-auto px-1 space-x-8 py-2">
        <div className="flex items-center justify-between h-35">
          <div className="flex items-center">
          
            <a href="" className="items-center space-x-8 hidden md:flex transition-colors" > 
            <img src="src/Images/Digital Pro.png" className='w-45 h-20'/>
            </a>
            
            
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-300 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Services</a>
            <a href="#about" className="text-gray-300 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</a>
            <a href="#client-success-stories" className="text-gray-300 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Client Success Stories</a>
            <a href="#contact" className="text-gray-300 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
            <ThemeToggle />
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Get In Touch
            </a>
          </nav>

          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-2 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a
              href="#services"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Services
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              About
            </a>
            <a
              href="#client-success-stories"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
             Client Success Stories
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Contact
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 bg-blue-600 text-white text-center rounded-full hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
