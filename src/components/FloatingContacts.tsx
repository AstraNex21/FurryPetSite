import React, { useState } from 'react';
import { Phone, MessageCircle, Mail } from 'lucide-react';

export const FloatingContacts: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleWhatsApp = () => {
    window.open('https://wa.me/1234567890?text=Hi! I\'m interested in learning more about your adorable dogs!', '_blank');
  };

  const handleCall = () => {
    window.open('tel:+1234567890', '_self');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you! We\'ll get back to you soon with information about our adorable friends!');
    setFormData({ name: '', phone: '', message: '' });
    setShowForm(false);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
        <button
          onClick={handleWhatsApp}
          className="group bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Chat Now
          </span>
        </button>

        <button
          onClick={handleCall}
          className="group bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          title="Call Now"
        >
          <Phone className="h-6 w-6" />
          <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Call FurryFriend
          </span>
        </button>

        <button
          onClick={() => setShowForm(true)}
          className="group bg-sky-blue hover:bg-blue-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          title="Get in Touch"
        >
          <Mail className="h-6 w-6" />
          <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Get in Touch
          </span>
        </button>
      </div>

      {/* Quick Enquiry Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <h3 className="text-2xl font-bold text-soft-brown mb-4">Let's Find Your Perfect Friend!</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 border border-warm-peach/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-warm-peach"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-3 border border-warm-peach/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-warm-peach"
                required
              />
              <textarea
                placeholder="Tell us about your ideal furry friend..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3 border border-warm-peach/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-warm-peach h-24 resize-none"
                required
              />
              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="flex-1 bg-warm-peach hover:bg-warm-peach/90 text-white py-3 rounded-xl font-medium transition-colors"
                >
                  Send Message
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};