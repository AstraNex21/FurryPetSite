import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GrowthStage {
  stage: string;
  image: string;
  age: string;
  description: string;
}

interface GrowthVisualizationProps {
  breedName: string;
  stages: GrowthStage[];
}

export const GrowthVisualization: React.FC<GrowthVisualizationProps> = ({ breedName, stages }) => {
  const [currentStage, setCurrentStage] = useState(0);

  const nextStage = () => {
    setCurrentStage((prev) => (prev + 1) % stages.length);
  };

  const prevStage = () => {
    setCurrentStage((prev) => (prev - 1 + stages.length) % stages.length);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 overflow-hidden">
      <div className="text-center mb-8">
        <h3 className="font-display text-3xl font-bold bg-gradient-to-r from-soft-brown via-warm-peach to-soft-brown bg-clip-text text-transparent mb-4 tracking-wide">
          Growth Journey
        </h3>
        <p className="text-gray-600 text-lg">
          Watch how your {breedName} grows from a tiny puppy to a magnificent adult
        </p>
      </div>

      {/* Main Image Display */}
      <div className="relative mb-8">
        <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-cream to-warm-peach/10 relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentStage}
              src={stages[currentStage].image}
              alt={`${breedName} at ${stages[currentStage].stage} stage - ${stages[currentStage].age}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </AnimatePresence>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevStage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-soft-brown p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </button>
          
          <button
            onClick={nextStage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-soft-brown p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* Stage Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
            <div className="text-center">
              <div className="font-bold text-soft-brown text-lg">{stages[currentStage].stage}</div>
              <div className="text-warm-peach text-sm font-medium">{stages[currentStage].age}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stage Description */}
      <motion.div
        key={currentStage}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="text-center mb-8"
      >
        <p className="text-gray-600 text-lg leading-relaxed">
          {stages[currentStage].description}
        </p>
      </motion.div>

      {/* Stage Thumbnails */}
      <div className="grid grid-cols-3 gap-4">
        {stages.map((stage, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentStage(index)}
            className={`relative aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
              currentStage === index 
                ? 'ring-4 ring-warm-peach shadow-lg scale-105' 
                : 'ring-2 ring-gray-200 hover:ring-warm-peach/50 hover:scale-102'
            }`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src={stage.image}
              alt={`${breedName} ${stage.stage} thumbnail`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-medium opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div>{stage.stage}</div>
              <div className="text-xs opacity-80">{stage.age}</div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center space-x-2 mt-6">
        {stages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentStage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentStage 
                ? 'bg-warm-peach scale-125' 
                : 'bg-gray-300 hover:bg-warm-peach/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};