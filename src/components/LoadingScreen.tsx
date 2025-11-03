import React from 'react';
import { motion } from 'framer-motion';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-warm-peach/20 via-cream to-sky-blue/20 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Paw Prints */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-warm-peach/20 text-4xl"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: window.innerHeight + 100,
              rotate: 0 
            }}
            animate={{ 
              y: -100,
              rotate: 360,
              x: Math.random() * window.innerWidth
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "linear"
            }}
          >
            🐾
          </motion.div>
        ))}
        
        {/* Floating Hearts */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`heart-${i}`}
            className="absolute text-pink-300/30 text-3xl"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: window.innerHeight + 50,
              scale: 0.5
            }}
            animate={{ 
              y: -50,
              scale: 1.2,
              x: Math.random() * window.innerWidth
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeInOut"
            }}
          >
            💕
          </motion.div>
        ))}
      </div>

      {/* Main Loading Content */}
      <div className="text-center relative z-10">
        {/* Animated Dog Icon */}
        <motion.div 
          className="mb-8 relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="text-8xl mb-4"
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
          
          {/* Bouncing Dots */}
          <div className="flex justify-center space-x-2 mb-6">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-4 h-4 bg-warm-peach rounded-full"
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

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2 className="font-display text-3xl font-bold bg-gradient-to-r from-soft-brown via-warm-peach to-soft-brown bg-clip-text text-transparent mb-4 tracking-wide">
            Finding Your Perfect Friend...
          </h2>
          
          <motion.div 
            className="flex items-center justify-center text-warm-peach text-lg"
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
            <span className="font-medium text-soft-brown">FurryFriend</span>
            <motion.span 
              className="ml-3"
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              🐾
            </motion.span>
          </motion.div>
          
          <motion.p 
            className="text-gray-600 mt-4 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Preparing your journey to unconditional love...
          </motion.p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div 
          className="w-64 h-2 bg-gray-200 rounded-full mx-auto mt-8 overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-warm-peach to-sky-blue rounded-full"
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