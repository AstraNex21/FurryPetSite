import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-amber-800 via-orange-900 to-amber-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-8 left-12 text-4xl">🐕</div>
        <div className="absolute top-16 right-20 text-3xl">🐾</div>
        <div className="absolute bottom-12 left-1/4 text-5xl">🐶</div>
        <div className="absolute bottom-8 right-16 text-4xl">❤️</div>
        <div className="absolute top-1/2 left-1/2 text-3xl">🏠</div>
        <div className="absolute bottom-20 right-1/3 text-3xl">🦴</div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
              <div className="bg-warm-peach p-2 rounded-full">
                <Heart className="h-5 w-5 text-white fill-current" />
              </div>
              <span className="text-xl font-bold">FurryFriend</span>
            </div>
            <p className="text-white/80 text-sm">Find Your Furry Forever Friend</p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-white/80 hover:text-warm-peach transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-white/80 hover:text-warm-peach transition-colors">
                About Us
              </Link>
              <Link to="/adoption-process" className="block text-white/80 hover:text-warm-peach transition-colors">
                Adoption Process
              </Link>
              <Link to="/contact" className="block text-white/80 hover:text-warm-peach transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="#"
                className="bg-white/20 p-3 rounded-full hover:bg-warm-peach transition-colors"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/20 p-3 rounded-full hover:bg-warm-peach transition-colors"
                title="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-white/80 text-sm">
            Because every friend deserves a forever home ❤️
          </p>
          <p className="text-white/60 text-xs mt-2">
            © 2024 FurryFriend. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};