import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="relative overflow-hidden">

      <div
        className="
          absolute inset-0 bg-cover bg-center 
          blur-md scale-110
        "
        style={{ backgroundImage: "url('/Hero.png')" }}
      ></div>

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative pt-28 pb-12 px-4 max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-4 mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white">
            Let’s Connect
          </h1>
          <p className="text-gray-200 text-lg max-w-xl leading-relaxed">
            Reach out to us for adoption support, inquiries, or collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <motion.section
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-start gap-4">
              <MapPin className="w-7 h-7 text-orange-400" />
              <p className="text-gray-100 text-lg leading-relaxed">
                221B, Baker Street, New Delhi
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-7 h-7 text-orange-400" />
              <p className="text-gray-100 text-lg">+91 98765 43210</p>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-7 h-7 text-orange-400" />
              <p className="text-gray-100 text-lg">support@furrypets.com</p>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-7 h-7 text-orange-400" />
              <p className="text-gray-100 text-lg">Mon – Sat : 9 AM – 7 PM</p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="
              bg-white/20 backdrop-blur-2xl rounded-3xl shadow-2xl
              border border-white/30 p-8 md:p-10
            "
          >
            <form className="flex flex-col gap-6">

              <div className="flex flex-col">
                <label className="text-sm font-medium text-white">Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="
                    w-full px-4 py-3 rounded-xl bg-white/70
                    border border-gray-300 focus:ring-2 focus:ring-orange-400
                    outline-none transition-all
                  "
                  placeholder="Your Full Name"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-white">Email</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="
                    w-full px-4 py-3 rounded-xl bg-white/70
                    border border-gray-300 focus:ring-2 focus:ring-orange-400
                    outline-none transition-all
                  "
                  placeholder="example@gmail.com"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-white">Phone</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="
                    w-full px-4 py-3 rounded-xl bg-white/70
                    border border-gray-300 focus:ring-2 focus:ring-orange-400
                    outline-none transition-all
                  "
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-white">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="
                    w-full px-4 py-3 min-h-[130px] rounded-xl bg-white/70
                    border border-gray-300 focus:ring-2 focus:ring-orange-400 
                    outline-none transition-all resize-none
                  "
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="
                  mt-2 w-full flex items-center justify-center gap-2 
                  bg-black/80 text-white text-lg tracking-wide
                  py-3 rounded-xl transition-all duration-200
                "
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.section>

        </div>
      </div>
    </main>
  );
};
