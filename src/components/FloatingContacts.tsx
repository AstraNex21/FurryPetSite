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
    </>
  );