import React from "react";
import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";

export const AdoptionProcess: React.FC = () => {
  const steps = [
    {
      title: "Step 1: Initial Consultation",
      text: "We understand your lifestyle, family setup, and preferences to suggest the right breed.",
    },
    {
      title: "Step 2: Puppy Selection",
      text: "We show you available puppies with complete health and temperament details.",
    },
    {
      title: "Step 3: Health Guarantee & Documentation",
      text: "Every puppy comes with vaccination records, vet certificates, and health guarantees.",
    },
    {
      title: "Step 4: Delivery or Pickup",
      text: "Choose home delivery or visit us for a smooth handover.",
    },
    {
      title: "Step 5: Lifetime Support",
      text: "We help with training, tips, and long-term guidance.",
    },
  ];

  return (
    <main className="pt-10 pb-20 px-4 max-w-6xl mx-auto relative overflow-hidden">

      {/* Soft Ambient Glows */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-orange-300/40 to-pink-300/40 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-pink-300/40 to-orange-300/40 blur-3xl rounded-full -z-10"></div>

      {/* Floating Paw Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.25, y: -20 }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute text-orange-300/50"
          style={{
            top: `${12 + i * 12}%`,
            left: `${10 + i * 15}%`,
          }}
        >
          <PawPrint size={28} />
        </motion.div>
      ))}

      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Adoption Process
        </h1>

        <p className="text-gray-600 text-lg max-w-xl mx-auto mt-2 leading-relaxed">
          At FurryFriend, we ensure that every adoption is smooth, transparent, and responsible.
        </p>
      </motion.div>

      {/* Steps Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative p-6 rounded-3xl backdrop-blur-lg shadow-xl 
                       border border-white/30 bg-white/50 
                       hover:scale-[1.02] hover:shadow-2xl 
                       transition-all duration-300 group"
          >
            {/* Step Number */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full 
                            bg-gradient-to-tr from-orange-400 to-pink-500 text-white flex 
                            items-center justify-center shadow-lg text-lg font-bold">
              {index + 1}
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-4 mt-4">
              <PawPrint className="text-orange-500 opacity-70" size={30} />
            </div>

            <h2 className="text-lg font-semibold text-gray-800 text-center mb-2">
              {step.title}
            </h2>

            <p className="text-gray-600 text-sm text-center leading-relaxed">
              {step.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-2">You're Never Alone</h3>
        <p className="text-gray-600 max-w-md mx-auto leading-relaxed text-sm">
          We stay connected with you even after the adoption to ensure your puppy grows in a loving,
          healthy environment.
        </p>
      </motion.div>
    </main>
  );
};
