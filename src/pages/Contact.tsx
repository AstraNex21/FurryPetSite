import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interestedBreed: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      interestedBreed: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-warm-peach to-warm-peach/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in <span className="text-cream">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Ready to welcome a new furry friend? We're here to help you find your perfect match!
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-soft-brown via-warm-peach to-soft-brown bg-clip-text text-transparent mb-6">
              Let's Find Your Perfect Friend
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we'll help match you with the perfect companion based on your lifestyle and preferences.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-warm-peach transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-warm-peach transition-all"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-warm-peach transition-all"
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Interested Breed
                  </label>
                  <select
                    value={formData.interestedBreed}
                    onChange={(e) => setFormData({ ...formData, interestedBreed: e.target.value })}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-warm-peach transition-all"
                  >
                    <option value="">Select a breed</option>
                    <option value="french-mastiff">French Mastiff</option>
                    <option value="maltese">Maltese</option>
                    <option value="toy-poodle">Toy Poodle</option>
                    <option value="yorkshire-terrier">Yorkshire Terrier</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-warm-peach transition-all resize-none"
                  placeholder="Tell us about your family, living situation, and what you're looking for in a furry friend..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-warm-peach hover:bg-warm-peach/90 text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 transform hover:scale-105 transition-all duration-300"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-soft-brown mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-warm-peach/20 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-warm-peach" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-soft-brown">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Available 9 AM - 7 PM daily</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-warm-peach/20 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-warm-peach" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-soft-brown">Email</h4>
                    <p className="text-gray-600">hello@furryfriend.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-warm-peach/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-warm-peach" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-soft-brown">Location</h4>
                    <p className="text-gray-600">123 Pet Paradise Lane<br />Friendlyville, FL 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-warm-peach/20 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-warm-peach" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-soft-brown">Business Hours</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 9:00 AM - 6:00 PM</p>
                      <p>Sunday: 11:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-soft-brown mb-6">Visit Our Location</h3>
              <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Interactive Map Coming Soon</p>
                  <p className="text-sm">123 Pet Paradise Lane, Friendlyville, FL</p>
                </div>
              </div>
            </div>
            
            {/* Quick Contact Options */}
            <div className="bg-gradient-to-r from-warm-peach to-warm-peach/80 text-white rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
              <p className="mb-6 opacity-90">
                For urgent inquiries or to schedule a same-day visit, reach out to us directly!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => window.open('tel:+1555123456', '_self')}
                  className="flex-1 bg-white text-warm-peach py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Call Now
                </button>
                <button 
                  onClick={() => window.open('https://wa.me/1555123456', '_blank')}
                  className="flex-1 border-2 border-white text-white hover:bg-white hover:text-warm-peach py-3 rounded-full font-semibold transition-colors"
                >
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};