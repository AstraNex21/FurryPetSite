import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";
import InstagramGrid from "../components/InstagramGrid";

// Import Playpen Sans font
import './PlaypenSans.css';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    breed: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="relative overflow-hidden bg-white min-h-screen" style={{ fontFamily: 'Playpen Sans, cursive' }}>
      <div className="relative pt-8 sm:pt-16 pb-6 sm:pb-12 px-4 max-w-7xl mx-auto">
        {/* Contact Form Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-center mb-6 sm:mb-12"
        >
          <div
            className="
              bg-white/20 backdrop-blur-2xl rounded-3xl shadow-2xl
              border border-gray-200 p-4 sm:p-8 md:p-10 w-full max-w-2xl
            "
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4 sm:mb-8" style={{ fontFamily: 'Playpen Sans, cursive' }}>
              Get in Touch
            </h2>
            <form className="flex flex-col gap-4 sm:gap-6">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700" style={{ fontFamily: 'Playpen Sans, cursive' }}>Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="
                    w-full px-4 py-3 rounded-xl bg-white
                    border border-gray-300 focus:ring-2 focus:ring-orange-400
                    outline-none transition-all
                  "
                  placeholder="Your Full Name"
                  style={{ fontFamily: 'Playpen Sans, cursive' }}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700" style={{ fontFamily: 'Playpen Sans, cursive' }}>Email</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="
                    w-full px-4 py-3 rounded-xl bg-white
                    border border-gray-300 focus:ring-2 focus:ring-orange-400
                    outline-none transition-all
                  "
                  placeholder="example@gmail.com"
                  style={{ fontFamily: 'Playpen Sans, cursive' }}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700" style={{ fontFamily: 'Playpen Sans, cursive' }}>Phone</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="
                    w-full px-4 py-3 rounded-xl bg-white
                    border border-gray-300 focus:ring-2 focus:ring-orange-400
                    outline-none transition-all
                  "
                  placeholder="+91 XXXXX XXXXX"
                  style={{ fontFamily: 'Playpen Sans, cursive' }}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700" style={{ fontFamily: 'Playpen Sans, cursive' }}>Breed *</label>
                <select
                  name="breed"
                  value={formData.breed}
                  onChange={handleChange}
                  required
                  className="
                    w-full px-4 py-3 rounded-xl bg-white
                    border border-gray-300 focus:ring-2 focus:ring-orange-400
                    outline-none transition-all
                  "
                  style={{ fontFamily: 'Playpen Sans, cursive' }}
                >
                  <option value="" disabled>Select a breed</option>
                  <option value="french-mastiff">French Mastiff</option>
                  <option value="maltese">Maltese</option>
                  <option value="toy-poodle">Toy Poodle</option>
                  <option value="yorkshire-terrier">Yorkshire Terrier</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700" style={{ fontFamily: 'Playpen Sans, cursive' }}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="
                    w-full px-4 py-3 min-h-[130px] rounded-xl bg-white
                    border border-gray-300 focus:ring-2 focus:ring-orange-400 
                    outline-none transition-all resize-none
                  "
                  placeholder="Your message..."
                  style={{ fontFamily: 'Playpen Sans, cursive' }}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="
                  mt-2 w-full flex items-center justify-center gap-2 
                  bg-orange-500 text-white text-lg tracking-wide
                  py-3 rounded-xl transition-all duration-200
                "
                style={{ fontFamily: 'Playpen Sans, cursive' }}
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.section>

        {/* Why Choose FurryFriend Section */}
        <section className="py-4 sm:py-8 md:py-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-gray-800 mb-4 sm:mb-6 md:mb-10" style={{ fontFamily: 'Playpen Sans, cursive' }}>
            Why Choose <span className="text-orange-600">FurryFriend</span>?
          </h2>
          <div className="flex justify-center">
            <img src="/afe.png" alt="Why Choose FurryFriend" className="max-w-full h-auto rounded-lg shadow-lg" />
          </div>
        </section>

        {/* Instagram Grid Section */}
        <section className="py-4 sm:py-8 md:py-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-gray-800 mb-4 sm:mb-6 md:mb-10" style={{ fontFamily: 'Playpen Sans, cursive' }}>
            Follow Our <span className="text-orange-600">Journey</span>
          </h2>
          <InstagramGrid />
        </section>
      </div>
    </main>
  );
};