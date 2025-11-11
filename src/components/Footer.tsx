import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-[#F8F6F3] via-[#FAF8F5] to-[#F6F3F0] text-gray-900 relative overflow-hidden">
      <style>{`
        @keyframes footer-wave {
          0% { background-position: 0% 0%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 50% 100%; }
          75% { background-position: 0% 50%; }
          100% { background-position: 0% 0%; }
        }
        @keyframes float-blob-footer {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          25% { transform: translate(40px, -40px) scale(1.15) rotate(90deg); }
          50% { transform: translate(-30px, 30px) scale(0.85) rotate(180deg); }
          75% { transform: translate(30px, 40px) scale(1.1) rotate(270deg); }
        }
        .animate-footer-wave {
          background-size: 400% 400%;
          animation: footer-wave 16s ease infinite;
        }
        .animate-float-blob-footer {
          animation: float-blob-footer 25s ease-in-out infinite;
        }
      `}</style>
      
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8F6F3] via-[#FAF8F5] to-[#F6F3F0] animate-footer-wave"></div>
      
      {/* Floating Blob Animations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#F5E6E0] rounded-full filter blur-3xl animate-float-blob-footer"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#F0DACD] rounded-full filter blur-3xl animate-float-blob-footer" style={{ animationDelay: '8s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-[#EBD0C0] rounded-full filter blur-3xl animate-float-blob-footer" style={{ animationDelay: '16s' }}></div>
      </div>
      
      {/* Decorative Emojis */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-8 left-12 text-4xl animate-bounce" style={{ animationDuration: '3s', animationDelay: '0s' }}>🐕</div>
        <div className="absolute top-16 right-20 text-3xl animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>🐾</div>
        <div className="absolute bottom-12 left-1/4 text-5xl animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>🐶</div>
        <div className="absolute bottom-8 right-16 text-4xl animate-pulse" style={{ animationDuration: '2s' }}>❤️</div>
        <div className="absolute top-1/2 left-1/2 text-3xl animate-bounce" style={{ animationDuration: '3.2s', animationDelay: '0.8s' }}>🏠</div>
        <div className="absolute bottom-20 right-1/3 text-3xl animate-bounce" style={{ animationDuration: '2.8s', animationDelay: '1.2s' }}>🦴</div>
        <div className="absolute top-20 right-1/4 text-4xl animate-bounce" style={{ animationDuration: '3.3s', animationDelay: '0.3s' }}>🐕‍🦺</div>
        <div className="absolute bottom-32 left-16 text-3xl animate-bounce" style={{ animationDuration: '2.7s', animationDelay: '1.5s' }}>✨</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-3">
              <div className="bg-gray-900/50 backdrop-blur-sm p-2 rounded-full shadow-lg">
                <Heart className="h-5 w-5 text-pink-500 fill-current" />
              </div>
              <span className="text-2xl font-bold text-gray-900 drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]">FurryFriend</span>
            </div>
            <p className="text-gray-800 font-medium text-sm drop-shadow-[0_1px_4px_rgba(255,255,255,0.3)]">Find Your Furry Forever Friend</p>
            <p className="text-gray-700 text-xs mt-2 drop-shadow-[0_1px_4px_rgba(255,255,255,0.2)]">
              Connecting loving families with adorable companions since 2024
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-bold text-lg mb-3 text-gray-900 drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]">Quick Links</h4>
            <div className="grid grid-cols-2 gap-3 justify-items-center">
              <Link 
                to="/" 
                className="text-gray-800 font-medium text-sm hover:text-pink-600 hover:scale-105 transition-all duration-300 drop-shadow-[0_1px_4px_rgba(255,255,255,0.3)]"
              >
                🏠 Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-800 font-medium text-sm hover:text-pink-600 hover:scale-105 transition-all duration-300 drop-shadow-[0_1px_4px_rgba(255,255,255,0.3)]"
              >
                ℹ️ About
              </Link>
              <Link 
                to="/adoption-process" 
                className="text-gray-800 font-medium text-sm hover:text-pink-600 hover:scale-105 transition-all duration-300 drop-shadow-[0_1px_4px_rgba(255,255,255,0.3)]"
              >
                📋 Adoption
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-800 font-medium text-sm hover:text-pink-600 hover:scale-105 transition-all duration-300 drop-shadow-[0_1px_4px_rgba(255,255,255,0.3)]"
              >
                📞 Contact
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h4 className="font-bold text-xl mb-4 text-gray-900 drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]">Follow Us</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://www.instagram.com/furryfriend.in?igsh=MTM5YjYxbzJlZzQ3bA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/50 backdrop-blur-sm p-3 rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-xl group"
                title="Follow us on Instagram"
              >
                <svg 
                  className="h-6 w-6 text-pink-500 group-hover:text-pink-700 transition-colors" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  aria-label="Instagram"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#"
                className="bg-gray-300/60 backdrop-blur-sm p-3 rounded-full hover:bg-gray-300 hover:scale-110 transition-all duration-300 shadow-xl group"
                title="Follow us on Facebook"
              >
                <Facebook className="h-6 w-6 text-pink-500 group-hover:text-blue-600 transition-colors" />
              </a>
            </div>
            <p className="text-gray-800 font-semibold text-sm mt-4 drop-shadow-[0_1px_4px_rgba(255,255,255,0.3)]">
              Join our community!
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-400/40 mt-8 pt-4">
          <div className="text-center">
            <p className="text-gray-900 font-bold text-sm drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]">
              Because every furry friend deserves a forever home 🐾❤️
            </p>
            <p className="text-gray-800 font-medium text-xs mt-2 drop-shadow-[0_1px_4px_rgba(255,255,255,0.3)]">
              © 2024 FurryFriend. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};