import React, { useState } from 'react';

const InstagramProfile = () => {
  const [activeTab, setActiveTab] = useState('posts');
  
  const images = [
    {
      src: "/INSTA/6.png",
      link: "https://www.instagram.com/p/CaU3VtUhkac",
      type: "post"
    },
    {
      src: "/INSTA/7.png",
      link: "https://www.instagram.com/p/CZW4B-qlpc9",
      type: "post"
    },
    {
      src: "/INSTA/8.png",
      link: "https://www.instagram.com/p/CZW4B-qlpc9",
      type: "post"
    },
    {
      src: "/INSTA/9.png",
      link: "https://www.instagram.com/p/CVc203vBHlh",
      type: "post"
    },
    {
      src: "/INSTA/1.webp",
      link: "https://www.instagram.com/p/CdIM0ISFv_B/",
      type: "post"
    },
    {
      src: "/INSTA/2.png",
      link: "https://www.instagram.com/p/CnvyjW_Ls34/",
      type: "post"
    },
    {
      src: "/INSTA/3.png",
      link: "https://www.instagram.com/p/CidKKMaBDcz",
      type: "post"
    },
    {
      src: "/INSTA/4.png",
      link: "https://www.instagram.com/p/CgivCcnlq4A/",
      type: "post"
    },
    {
      src: "/INSTA/5.png",
      link: "https://www.instagram.com/p/CcZvS48FLWr/",
      type: "post"
    }
  ];

  const filteredImages = images.filter(image => {
    if (activeTab === 'posts') return image.type === 'post';
    if (activeTab === 'reels') return image.type === 'reel';
    if (activeTab === 'tagged') return image.type === 'tagged';
    return true;
  });

  const instagramProfileUrl = "https://www.instagram.com/furryfriend.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

  return (
    <div className="w-full max-w-5xl mx-auto bg-white border border-gray-200 md:border-none md:shadow-sm">
      {/* Profile Header */}
      <div className="p-2 md:p-4 md:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-start gap-4 md:gap-8">
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-0.5">
              <div className="w-full h-full bg-white rounded-full p-0.5 md:p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src="/INSTA/PP.png" 
                    alt="Furryfriend.in profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Profile Info - Mobile */}
          <div className="flex-1 w-full md:hidden">
            {/* Username and buttons - Mobile */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-light">furryfriend.in</h2>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 p-1.5 rounded transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>

            {/* Stats - Mobile */}
            <div className="flex gap-8 mb-4">
              <div>
                <span className="font-semibold">64</span>
                <span className="text-gray-500 ml-1">posts</span>
              </div>
              <div>
                <span className="font-semibold">287</span>
                <span className="text-gray-500 ml-1">followers</span>
              </div>
              <div>
                <span className="font-semibold">40</span>
                <span className="text-gray-500 ml-1">following</span>
              </div>
            </div>

            {/* Buttons - Mobile */}
            <div className="flex gap-2 mb-4">
              <a
                href={instagramProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded text-sm font-medium transition-colors text-center"
              >
                Follow
              </a>
              <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-1.5 rounded text-sm font-medium transition-colors">
                Message
              </button>
            </div>
          </div>

          {/* Profile Info - Desktop */}
          <div className="hidden md:flex-1 md:block md:w-auto">
            {/* Username and buttons - Desktop */}
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-2xl font-light">furryfriend.in</h2>
              <a
                href={instagramProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-1.5 rounded text-sm font-medium transition-colors"
              >
                Follow
              </a>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-1.5 rounded text-sm font-medium transition-colors">
                Message
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 p-1.5 rounded transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>

            {/* Stats - Desktop */}
            <div className="flex gap-10 mb-4 text-base">
              <div>
                <span className="font-semibold">64</span>
                <span className="text-gray-500 ml-1">posts</span>
              </div>
              <div>
                <span className="font-semibold">287</span>
                <span className="text-gray-500 ml-1">followers</span>
              </div>
              <div>
                <span className="font-semibold">40</span>
                <span className="text-gray-500 ml-1">following</span>
              </div>
            </div>

            {/* Bio - Desktop */}
            <div>
              <p className="font-semibold text-gray-900 mb-1">Furryfriend.in</p>
              <p className="text-gray-700">Get your best friend. Ethically bred puppies sent all across 🇮🇳</p>
              <a href="https://furryfriend.in" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm">
                furryfriend.in
              </a>
            </div>
          </div>
        </div>

        {/* Bio - Mobile */}
        <div className="md:hidden mt-4">
          <p className="font-semibold text-gray-900 mb-1">Furryfriend.in</p>
          <p className="text-gray-700 text-sm mb-2">Get your best friend. Ethically bred puppies sent all across 🇮🇳</p>
          <a href="https://furryfriend.in" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm">
            furryfriend.in
          </a>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-t border-gray-200">
        <div className="flex justify-around md:justify-center md:gap-16">
          <button
            onClick={() => setActiveTab('posts')}
            className={`flex items-center justify-center py-3 px-4 md:py-4 transition-colors ${
              activeTab === 'posts' ? 'border-t-2 border-black' : 'border-t-2 border-transparent'
            }`}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 1v10h10V5H5z" />
            </svg>
            <span className="hidden md:block ml-2 text-xs font-medium uppercase tracking-wider">Posts</span>
          </button>
          <button
            onClick={() => setActiveTab('reels')}
            className={`flex items-center justify-center py-3 px-4 md:py-4 transition-colors ${
              activeTab === 'reels' ? 'border-t-2 border-black' : 'border-t-2 border-transparent'
            }`}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <span className="hidden md:block ml-2 text-xs font-medium uppercase tracking-wider">Reels</span>
          </button>
          <button
            onClick={() => setActiveTab('tagged')}
            className={`flex items-center justify-center py-3 px-4 md:py-4 transition-colors ${
              activeTab === 'tagged' ? 'border-t-2 border-black' : 'border-t-2 border-transparent'
            }`}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            <span className="hidden md:block ml-2 text-xs font-medium uppercase tracking-wider">Tagged</span>
          </button>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-3 gap-0.5 md:gap-1 border-t border-gray-200">
        {filteredImages.length > 0 ? (
          filteredImages.map((image, index) => (
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
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </a>
          ))
        ) : (
          <div className="col-span-3 py-12 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 rounded-full p-4 mb-4">
                {activeTab === 'posts' && (
                  <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 1v10h10V5H5z" />
                  </svg>
                )}
                {activeTab === 'reels' && (
                  <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                )}
                {activeTab === 'tagged' && (
                  <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <p className="text-gray-500 font-medium">No {activeTab} yet</p>
            </div>
          </div>
        )}
      </div>

      {/* View on Instagram Button */}
      <div className="p-4 border-t border-gray-200">
        <a
          href={instagramProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2.5 rounded-lg transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
          </svg>
          View on Instagram
        </a>
      </div>
    </div>
  );
};

export default InstagramProfile;