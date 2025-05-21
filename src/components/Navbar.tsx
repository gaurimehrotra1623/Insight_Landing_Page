import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-violet-600">Insight</span>
          </div>


          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-violet-600 font-medium transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-violet-600 font-medium transition-colors">
              Testimonials
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-violet-600 font-medium transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-gray-600 hover:text-violet-600 font-medium transition-colors">
              FAQ
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-violet-600 font-medium transition-colors">
              Sign in
            </a>
            <a
              href="#"
              className="bg-violet-600 hover:bg-violet-700 text-white px-5 py-2 rounded-lg font-medium transition-colors duration-300"
            >
              Get started
            </a>
          </div>


          <button
            type="button"
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>


      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <a
              href="#features"
              className="block py-3 px-4 text-gray-600 hover:bg-violet-50 hover:text-violet-600 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="block py-3 px-4 text-gray-600 hover:bg-violet-50 hover:text-violet-600 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="block py-3 px-4 text-gray-600 hover:bg-violet-50 hover:text-violet-600 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="block py-3 px-4 text-gray-600 hover:bg-violet-50 hover:text-violet-600 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <div className="pt-2 space-y-3">
              <a
                href="#"
                className="block text-center py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign in
              </a>
              <a
                href="#"
                className="block text-center py-3 px-4 bg-violet-600 text-white rounded-lg hover:bg-violet-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
