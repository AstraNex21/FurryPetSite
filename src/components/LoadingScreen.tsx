import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const LoadingScreen: React.FC = () => {
  // State to track if the background image has loaded
  const [bgImageLoaded, setBgImageLoaded] = useState(false);

  useEffect(() => {
    // Create a new Image object to preload the background
    const img = new Image();
    img.src = '/BG.webp'; // The path to your image
    
    // When the image is successfully loaded, update the state
    img.onload = () => {
      setBgImageLoaded(true);
    };
    
    // Optional: handle error if the image fails to load
    img.onerror = () => {
      console.error("Failed to load background image.");
    };

  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
          bgImageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ 
          // --- FIX IS HERE ---
          backgroundImage: 'url(/BG.webp)', 
          filter: 'brightness(0.7)'
        }}
      />
      
      {/* Placeholder Background - visible until the main image loads */}
      <div 
        className={`absolute inset-0 bg-slate-900 transition-opacity duration-500 ${
          bgImageLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Gradient Overlay - always visible */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-peach/30 via-transparent to-sky-blue/30" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-warm-peach/40 text-4xl"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 100,
              rotate: 0 
            }}
            animate={{ 
              y: -100,
              rotate: 360,
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear"
            }}
          >
            🐾
          </motion.div>
        ))}
        
        {/* ... other animated elements ... */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`heart-${i}`}
            className="absolute text-pink-300/40 text-3xl"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 50,
              scale: 0.5
            }}
            animate={{ 
              y: -50,
              scale: 1.2,
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          >
            💕
          </motion.div>
        ))}
      </div>

      {/* Main Loading Content */}
      <div className="text-center relative z-10 bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/20">
        {/* ... rest of your content ... */}
        <motion.div 
          className="mb-8 relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="text-8xl mb-4 drop-shadow-lg"
            animate={{ 
              rotate: [0, -10, 10, -5, 5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🐕
          </motion.div>
          
          <div className="flex justify-center space-x-2 mb-6">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-4 h-4 bg-warm-peach rounded-full shadow-lg"
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2 className="font-display text-3xl font-bold text-white drop-shadow-lg mb-4 tracking-wide">
            Finding Your Perfect Friend...
          </h2>
          
          <motion.div 
            className="flex items-center justify-center text-white text-lg"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.span 
              className="mr-3"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              🐾
            </motion.span>
            <span className="font-medium drop-shadow">FurryFriend</span>
            <motion.span 
              className="ml-3"
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              🐾
            </motion.span>
          </motion.div>
          
          <motion.p 
            className="text-white/90 mt-4 font-medium drop-shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Preparing your journey to unconditional love...
          </motion.p>
        </motion.div>

        <motion.div 
          className="w-64 h-2 bg-white/30 rounded-full mx-auto mt-8 overflow-hidden backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-warm-peach to-sky-blue rounded-full shadow-lg"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};