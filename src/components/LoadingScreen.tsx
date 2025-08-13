import React from 'react';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-cream flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="flex space-x-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-6 h-6 bg-warm-peach rounded-full animate-bounce"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1.5s'
                }}
              />
            ))}
          </div>
          <div className="absolute -top-2 left-0 right-0 flex justify-center space-x-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={`paw-${i}`}
                className="w-3 h-3 bg-soft-brown rounded-full opacity-30 animate-ping"
                style={{
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: '2s'
                }}
              />
            ))}
          </div>
        </div>
        <h2 className="text-2xl font-bold text-soft-brown mb-2">Finding Your Perfect Friend...</h2>
        <div className="flex items-center justify-center text-warm-peach">
          <span className="animate-pulse">🐾</span>
          <span className="mx-2 text-soft-brown">FurryFriend</span>
          <span className="animate-pulse">🐾</span>
        </div>
      </div>
    </div>
  );
};