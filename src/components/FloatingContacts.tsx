import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';

const breeds = [
  'French Mastiff',
  'Maltese',
  'Toy Poodle',
  'Yorkshire Terrier'
];

const FloatingContacts = () => {
  const [showForm, setShowForm] = useState(false);
  const [showGetInTouchButton, setShowGetInTouchButton] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    breed: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      // Hero section height is approximately 85vh on mobile, 100vh on desktop
      const heroHeight = window.innerHeight * 0.85;
      setShowGetInTouchButton(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const phoneNumber = '1234567890';
    const message = 'Hello! I would like to inquire about your pets.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:1234567890');
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.breed) {
      alert('Please select a breed');
      return;
    }

    // Handle form submission
    console.log('Form submitted:', formData);
    setShowForm(false);
    setFormData({ name: '', email: '', phone: '', breed: '', message: '' });
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

      {/* Get in Touch - Vertical Button (appears after hero section) */}
      {showGetInTouchButton && (
        <button
          onClick={() => setShowForm(true)}
          className="fixed right-0 top-1/3 transform -translate-y-1/2 z-50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
          title="Get in Touch"
          style={{
            backgroundColor: '#FFB6D9',
            border: '2px solid white',
            padding: '16px 8px',
            borderRadius: '12px 0 0 12px',
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            color: 'white',
            fontWeight: '600',
            fontSize: '12px',
            letterSpacing: '1px',
            cursor: 'pointer',
            minHeight: '120px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textTransform: 'uppercase'
          }}
        >
          Get in Touch
        </button>
      )}

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Get in Touch</h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  placeholder="Your Phone"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Breed <span className="text-red-500">*</span></label>
                <select
                  name="breed"
                  value={formData.breed}
                  onChange={handleFormChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Select a Breed</option>
                  {breeds.map(breed => (
                    <option key={breed} value={breed}>{breed}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Your Message"
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
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