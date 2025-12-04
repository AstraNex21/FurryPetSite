import React, { useState, useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Clock, Send, ChevronDown, X } from "lucide-react";
import { motion } from "framer-motion";

// Import Playpen Sans font
import './PlaypenSans.css';

const breeds = [
  { value: "french-mastiff", label: "French Mastiff" },
  { value: "maltese", label: "Maltese" },
  { value: "toy-poodle", label: "Toy Poodle" },
  { value: "yorkshire-terrier", label: "Yorkshire Terrier" },
  { value: "other", label: "Other" },
];

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    breed: "",
    message: "",
  });
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBreedSelect = (breedValue: string) => {
    setFormData({ ...formData, breed: breedValue });
    setIsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getSelectedBreedLabel = () => {
    return breeds.find(b => b.value === formData.breed)?.label || "Select a breed";
  };

  return (
    <main className="relative overflow-hidden bg-white min-h-screen" style={{ fontFamily: 'Playpen Sans, cursive' }}>
      <div className="relative pt-8 sm:pt-16 pb-4 sm:pb-12 px-4 max-w-7xl mx-auto">
        {/* Contact Form Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-center"
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
                <label className="text-sm font-medium text-gray-700 mb-1 sm:mb-2" style={{ fontFamily: 'Playpen Sans, cursive' }}>Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="
                    w-full px-4 py-3 sm:py-4 rounded-xl bg-white
                    border border-gray-300 focus:ring-2 focus:ring-orange-400
                    outline-none transition-all text-base sm:text-lg
                  "
                  placeholder="Your Full Name"
                  style={{ fontFamily: 'Playpen Sans, cursive' }}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1 sm:mb-2" style={{ fontFamily: 'Playpen Sans, cursive' }}>Email</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="
                    w-full px-4 py-3 sm:py-4 rounded-xl bg-white
                    border border-gray-300 focus:ring-2 focus:ring-orange-400
                    outline-none transition-all text-base sm:text-lg
                  "
                  placeholder="example@gmail.com"
                  style={{ fontFamily: 'Playpen Sans, cursive' }}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1 sm:mb-2" style={{ fontFamily: 'Playpen Sans, cursive' }}>Phone</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="
                    w-full px-4 py-3 sm:py-4 rounded-xl bg-white
                    border border-gray-300 focus:ring-2 focus:ring-orange-400
                    outline-none transition-all text-base sm:text-lg
                  "
                  placeholder="+91 XXXXX XXXXX"
                  style={{ fontFamily: 'Playpen Sans, cursive' }}
                />
              </div>

              {/* Custom Dropdown */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1 sm:mb-2" style={{ fontFamily: 'Playpen Sans, cursive' }}>Breed *</label>
                <div ref={dropdownRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="
                      w-full px-4 py-3 sm:py-4 rounded-xl bg-white
                      border border-gray-300 focus:ring-2 focus:ring-orange-400
                      outline-none transition-all text-base sm:text-lg flex items-center justify-between
                    "
                    style={{ fontFamily: 'Playpen Sans, cursive' }}
                  >
                    <span className={`${!formData.breed ? 'text-gray-400' : 'text-gray-800'}`}>
                      {getSelectedBreedLabel()}
                    </span>
                    <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-xl shadow-lg max-h-60 overflow-auto">
                      {breeds.map((breed) => (
                        <div
                          key={breed.value}
                          onClick={() => handleBreedSelect(breed.value)}
                          className="px-4 py-3 sm:py-4 cursor-pointer hover:bg-orange-100 transition-colors text-base sm:text-lg"
                          style={{ fontFamily: 'Playpen Sans, cursive' }}
                        >
                          {breed.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1 sm:mb-2" style={{ fontFamily: 'Playpen Sans, cursive' }}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="
                    w-full px-4 py-3 sm:py-4 min-h-[130px] rounded-xl bg-white
                    border border-gray-300 focus:ring-2 focus:ring-orange-400 
                    outline-none transition-all resize-none text-base sm:text-lg
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
                  bg-orange-500 text-white text-lg sm:text-xl tracking-wide
                  py-3 sm:py-4 rounded-xl transition-all duration-200
                "
                style={{ fontFamily: 'Playpen Sans, cursive' }}
              >
                <Send className="w-5 h-5 sm:w-6 sm:h-6" />
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.section>
      </div>
    </main>
  );
};