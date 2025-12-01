import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBreedsDropdownOpen, setIsBreedsDropdownOpen] = useState(false);

  // Define gradient text style
  const gradientTextStyle = {
    background: 'linear-gradient(to right, #E97451, #FF6B9D)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  // List of breeds for dropdown
  const breeds = [
    { name: 'French Mastiff', slug: 'french-mastiff' },
    { name: 'Maltese', slug: 'maltese' },
    { name: 'Toy Poodle', slug: 'toy-poodle' },
    { name: 'Yorkshire Terrier', slug: 'yorkshire-terrier' },
  ];

  return (
    <motion.header className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-[#E97451] to-[#FF6B9D] p-2 rounded-full">
              <Heart className="h-6 w-6 text-white fill-current" />
            </div>
            <span className="text-2xl font-bold" style={gradientTextStyle}>FurryFriend</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="hover:opacity-80 transition-opacity duration-300 font-medium" style={gradientTextStyle}>
              Home
            </Link>
            <Link to="/about" className="hover:opacity-80 transition-opacity duration-300 font-medium" style={gradientTextStyle}>
              About Us
            </Link>
            
            {/* Breeds Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsBreedsDropdownOpen(true)}
              onMouseLeave={() => setIsBreedsDropdownOpen(false)}
            >
              <button 
                className="hover:opacity-80 transition-opacity duration-300 font-medium flex items-center gap-1"
                style={gradientTextStyle}
              >
                Our Breeds
                <ChevronDown className={`h-4 w-4 transition-transform ${isBreedsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isBreedsDropdownOpen && (
                  <motion.div 
                    className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl py-2 min-w-[200px] z-50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    style={{ zIndex: 1000 }}
                  >
                    {breeds.map((breed) => (
                      <Link
                        key={breed.slug}
                        to={`/breed/${breed.slug}`}
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors text-gray-800 hover:text-gray-900"
                        style={{ ...gradientTextStyle, WebkitTextFillColor: 'inherit' }}
                      >
                        {breed.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link to="/adoption-process" className="hover:opacity-80 transition-opacity duration-300 font-medium" style={gradientTextStyle}>
              Adoption Process
            </Link>
            <Link to="/contact" className="hover:opacity-80 transition-opacity duration-300 font-medium" style={gradientTextStyle}>
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" style={gradientTextStyle} />
            ) : (
              <Menu className="h-6 w-6" style={gradientTextStyle} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden py-4 border-t border-gray-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className="hover:opacity-80 transition-opacity duration-300 font-medium"
                  style={gradientTextStyle}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className="hover:opacity-80 transition-opacity duration-300 font-medium"
                  style={gradientTextStyle}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                
                {/* Mobile Breeds Dropdown */}
                <div>
                  <button 
                    className="hover:opacity-80 transition-opacity duration-300 font-medium flex items-center justify-between w-full"
                    style={gradientTextStyle}
                    onClick={() => setIsBreedsDropdownOpen(!isBreedsDropdownOpen)}
                  >
                    Our Breeds
                    <ChevronDown className={`h-4 w-4 transition-transform ${isBreedsDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isBreedsDropdownOpen && (
                      <motion.div 
                        className="pl-4 py-2 bg-gray-50 rounded-lg mt-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {breeds.map((breed) => (
                          <Link
                            key={breed.slug}
                            to={`/breed/${breed.slug}`}
                            className="block py-2 hover:opacity-70 transition-opacity text-gray-800"
                            style={{ ...gradientTextStyle, WebkitTextFillColor: 'inherit' }}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsBreedsDropdownOpen(false);
                            }}
                          >
                            {breed.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <Link 
                  to="/adoption-process" 
                  className="hover:opacity-80 transition-opacity duration-300 font-medium"
                  style={gradientTextStyle}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Adoption Process
                </Link>
                <Link 
                  to="/contact" 
                  className="hover:opacity-80 transition-opacity duration-300 font-medium"
                  style={gradientTextStyle}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};