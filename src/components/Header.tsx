import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-warm-peach p-2 rounded-full">
              <Heart className="h-6 w-6 text-white fill-current" />
            </div>
            <span className="text-2xl font-bold text-soft-brown">FurryFriend</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-soft-brown hover:text-warm-peach transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link to="/about" className="text-soft-brown hover:text-warm-peach transition-colors duration-300 font-medium">
              About Us
            </Link>
            <Link to="/adoption-process" className="text-soft-brown hover:text-warm-peach transition-colors duration-300 font-medium">
              Adoption Process
            </Link>
            <Link to="/contact" className="text-soft-brown hover:text-warm-peach transition-colors duration-300 font-medium">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-soft-brown" />
            ) : (
              <Menu className="h-6 w-6 text-soft-brown" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-warm-peach/20">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-soft-brown hover:text-warm-peach transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-soft-brown hover:text-warm-peach transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/adoption-process" 
                className="text-soft-brown hover:text-warm-peach transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Adoption Process
              </Link>
              <Link 
                to="/contact" 
                className="text-soft-brown hover:text-warm-peach transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};