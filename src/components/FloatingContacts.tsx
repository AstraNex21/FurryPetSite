import React, { useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const FloatingContacts = () => {
  const [showForm, setShowForm] = useState(false);

  const handleWhatsApp = () => {
    // Replace with your WhatsApp number
    const phoneNumber = '1234567890';
    const message = 'Hello! I would like to inquire about your pets.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCall = () => {
    // Replace with your phone number
    window.open('tel:1234567890');
  };

  return (
    <>
      {/* WhatsApp Button - Bottom Left */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 left-6 group bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat Now
        </span>
      </button>

      {/* Call Button - Bottom Right */}
      <button
        onClick={handleCall}
        className="fixed bottom-6 right-6 group bg-yellow-500 hover:bg-yellow-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50"
        title="Call Now"
      >
        <Phone className="h-7 w-7" />
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Call Now
        </span>
      </button>

      {/* Get in Touch - Vertical Right Side */}
      <button
        onClick={() => setShowForm(true)}
        className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-b from-yellow-400 via-pink-400 to-white text-gray-800 py-6 px-3 shadow-lg hover:shadow-xl transition-all duration-300 z-50 writing-mode-vertical"
        title="Get in Touch"
        style={{ writingMode: 'vertical-rl' }}
      >
        <span className="font-medium tracking-wider text-sm">GET IN TOUCH</span>
      </button>

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingContacts;