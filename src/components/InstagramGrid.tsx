import React from 'react';

const InstagramGrid = () => {
  // Load Instagram's official Billabong font
  React.useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.cdnfonts.com/css/billabong';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const images = [
    {
      src: "/INSTA/6.png",
      link: "https://www.instagram.com/p/CaU3VtUhkac"
    },
    {
      src: "/INSTA/7.png",
      link: "https://www.instagram.com/p/CZW4B-qlpc9"
    },
    {
      src: "/INSTA/8.png",
      link: "https://www.instagram.com/p/CZW4B-qlpc9"
    },
    {
      src: "/INSTA/9.png",
      link: "https://www.instagram.com/p/CVc203vBHlh"
    },
    {
      src: "/INSTA/1.webp",
      link: "https://www.instagram.com/p/CdIM0ISFv_B/"
    },
    {
      src: "/INSTA/2.png",
      link: "https://www.instagram.com/p/CnvyjW_Ls34/"
    },
    {
      src: "/INSTA/3.png",
      link: "https://www.instagram.com/p/CidKKMaBDcz"
    },
    {
      src: "/INSTA/4.png",
      link: "https://www.instagram.com/p/CgivCcnlq4A/"
    },
    {
      src: "/INSTA/5.png",
      link: "https://www.instagram.com/p/CcZvS48FLWr/"
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
        {/* Instagram Header */}
        <div className="flex items-center justify-center gap-3 mb-6 pb-6 border-b border-gray-200">
          <svg
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2"
              y="2"
              width="20"
              height="20"
              rx="5"
              stroke="url(#instagram-gradient)"
              strokeWidth="2"
            />
            <circle
              cx="12"
              cy="12"
              r="4"
              stroke="url(#instagram-gradient)"
              strokeWidth="2"
            />
            <circle cx="18" cy="6" r="1.5" fill="url(#instagram-gradient)" />
            <defs>
              <linearGradient
                id="instagram-gradient"
                x1="2"
                y1="22"
                x2="22"
                y2="2"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FD5949" />
                <stop offset="0.5" stopColor="#D6249F" />
                <stop offset="1" stopColor="#285AEB" />
              </linearGradient>
            </defs>
          </svg>
          <h2 className="text-3xl tracking-tight font-light text-gray-800">Instagram</h2>
        </div>

        {/* Profile Section */}
        <div className="flex items-start gap-8 mb-8 pb-6 border-b border-gray-200">
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-0.5">
              <div className="w-full h-full bg-white rounded-full p-1">
                <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                  <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-xl font-light">furryfriend.in</h3>
              <a
                href="https://www.instagram.com/furryfriend.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-1.5 rounded-lg font-semibold text-sm transition-colors"
              >
                Follow
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mb-4">
              <div className="text-center">
                <span className="font-semibold">64</span>
                <span className="text-gray-600 ml-1">posts</span>
              </div>
              <div className="text-center">
                <span className="font-semibold">287</span>
                <span className="text-gray-600 ml-1">followers</span>
              </div>
              <div className="text-center">
                <span className="font-semibold">40</span>
                <span className="text-gray-600 ml-1">following</span>
              </div>
            </div>

            {/* Bio */}
            <div className="text-sm">
              <p className="font-semibold mb-1">Furryfriend.in</p>
              <p className="text-gray-700">Get your best friend. Ethically bred puppies sent all across 🇮🇳</p>
            </div>
          </div>
        </div>

        {/* Posts Header */}
        <div className="flex items-center justify-center gap-1 mb-4 pb-2 border-b border-gray-300">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
          </svg>
          <span className="text-xs font-semibold tracking-widest text-gray-700 uppercase">Posts</span>
        </div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-3 gap-1 mb-6">
          {images.map((image, index) => (
            <a
              key={index}
              href={image.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden bg-gray-100 group"
            >
              <img
                src={image.src}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* View Profile Link */}
        <div className="text-center pt-4 border-t border-gray-200">
          <a
            href="https://www.instagram.com/furryfriend.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm"
          >
            View Full Profile on Instagram
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstagramGrid;