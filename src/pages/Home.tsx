import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Heart, Award, Users, ArrowDown, Menu, X, ChevronDown } from 'lucide-react';
import InstagramGrid from '../components/InstagramGrid';

// ==================== TYPE DEFINITIONS ====================
interface Breed {
  name: string;
  slug: string;
  image: string;
  image2?: string;
  temperament: string[];
  traits: string[];
}

// ==================== CONSTANTS ====================

const breeds: Breed[] = [
  {
    name: 'French Mastiff',
    slug: 'french-mastiff',
    image: '/FM/BreedCardFM.png',
    temperament: ['Loyal', 'Gentle', 'Protective'],
    traits: ['family-friendly', 'protective', 'calm']
  },
  {
    name: 'Maltese',
    slug: 'maltese',
    image: '/Malt/BreedCardMalt.png',
    temperament: ['Playful', 'Gentle', 'Affectionate'],
    traits: ['hypoallergenic', 'small', 'playful']
  },
  {
    name: 'Toy Poodle',
    slug: 'toy-poodle',
    image: '/TP/BreedCardTP.png',
    temperament: ['Intelligent', 'Active', 'Trainable'],
    traits: ['hypoallergenic', 'smart', 'active']
  },
  {
    name: 'Yorkshire Terrier',
    slug: 'yorkshire-terrier',
    image: '/YT/BreedCardYT.png',
    temperament: ['Bold', 'Confident', 'Courageous'],
    traits: ['small', 'brave', 'energetic']
  }
];

const marqueeImages = [
  "/marquee/4907.JPEG",
  "/marquee/7703.JPEG",
  "/marquee/25748.JPEG",
  "/marquee/26525.JPEG",
  "/marquee/32460.JPEG",
  "/marquee/79128.JPEG",
  "/marquee/FMtall.JPEG",
  "/marquee/Frenchmastfamily1.JPEG",
  "/marquee/GSDdad.JPEG",
  "/marquee/maltaesthetic.jpg",
  "/marquee/maltdress1.jpg",
  "/marquee/maltdress2.jpg",
  "/marquee/maltfam.JPEG",
  "/marquee/maltmom.JPEG",
  "/marquee/maltmom2.JPEG",
  "/marquee/maltmom3.JPEG",
  "/marquee/maltmom4.JPEG",
  "/marquee/maltmom5.JPEG",
  "/marquee/maltmom6.JPEG",
  "/marquee/maltmom7.JPEG",
  "/marquee/maltstory.jpg",
  "/marquee/maltytmom.JPEG",
  "/marquee/Petfam.JPEG",
  "/marquee/TPmom.JPEG",
  "/marquee/TPmom2.JPEG",
  "/marquee/YTCar.JPEG",
  "/marquee/YTMom.JPEG",
  "/marquee/YTmom2.JPEG"
];

// Navigation Bar Component
const NavigationBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBreedsDropdownOpen, setIsBreedsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleBreedsDropdown = (): void => {
    setIsBreedsDropdownOpen(!isBreedsDropdownOpen);
  };

  const handleBreedClick = (slug: string): void => {
    navigate(`/breed/${slug}`);
    setIsBreedsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#E97451]/70 via-[#FFB5A7]/70 to-[#E6B8D4]/70 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl md:text-2xl font-display">
              FurryFriend
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link to="/" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-base font-bold transition-colors text-shadow">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-base font-bold transition-colors text-shadow">
                About Us
              </Link>
              
              {/* Breeds Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleBreedsDropdown}
                  className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-base font-bold transition-colors flex items-center text-shadow"
                >
                  Our Breeds
                  <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${isBreedsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isBreedsDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white/95 backdrop-blur-sm ring-1 ring-black ring-opacity-20">
                    <div className="py-1">
                      {breeds.map((breed) => (
                        <button
                          key={breed.slug}
                          onClick={() => handleBreedClick(breed.slug)}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                          {breed.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <Link to="/contact" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-base font-bold transition-colors text-shadow">
                Contact
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-gray-200 p-2 rounded-md"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
              About Us
            </Link>
            
            {/* Mobile Breeds Dropdown */}
            <div>
              <button
                onClick={toggleBreedsDropdown}
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between"
              >
                Our Breeds
                <ChevronDown className={`h-4 w-4 transform transition-transform ${isBreedsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isBreedsDropdownOpen && (
                <div className="pl-6 pr-3 py-2 space-y-1">
                  {breeds.map((breed) => (
                    <button
                      key={breed.slug}
                      onClick={() => handleBreedClick(breed.slug)}
                      className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-gray-900"
                    >
                      {breed.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

// ==================== REUSABLE COMPONENTS ====================

interface MarqueeImageProps {
  src: string;
  alt: string;
  index: number;
}

const MarqueeImage: React.FC<MarqueeImageProps> = ({ src, alt }) => (
  <div className="inline-block mx-3 relative group">
    <div className="relative overflow-hidden rounded-lg h-32 w-24 md:h-40 md:w-28 shadow-lg transform transition-all duration-300 group-hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-pink-400/10 to-purple-400/10 z-10"></div>
      <div className="absolute inset-0 border-2 border-gradient-to-r from-orange-300/30 to-pink-300/30 rounded-lg z-20 pointer-events-none"></div>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-orange-300/20 to-pink-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
    </div>
  </div>
);

// Image Marquee Component with Mobile Speed Adjustment
interface ImageMarqueeProps {
  images: string[];
}

const ImageMarquee: React.FC<ImageMarqueeProps> = ({ images }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = (): void => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    if (!marqueeElement) return;

    const handleMouseEnter = (): void => setIsPaused(true);
    const handleMouseLeave = (): void => setIsPaused(false);

    marqueeElement.addEventListener('mouseenter', handleMouseEnter);
    marqueeElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      marqueeElement.removeEventListener('mouseenter', handleMouseEnter);
      marqueeElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative overflow-hidden h-32 md:h-40">
      <div 
        ref={marqueeRef}
        className={`flex ${isPaused ? '' : isMobile ? 'animate-marquee-mobile' : 'animate-marquee'} whitespace-nowrap`}
      >
        {/* First set */}
        {images.map((img, index) => (
          <MarqueeImage
            key={`first-${index}`}
            src={img}
            alt={`Pet portrait ${index + 1}`}
            index={index}
          />
        ))}
        
        {/* Second set for seamless loop */}
        {images.map((img, index) => (
          <MarqueeImage
            key={`second-${index}`}
            src={img}
            alt={`Pet portrait ${index + 1}`}
            index={index}
          />
        ))}
      </div>
      
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#FFB5A7]/40 to-transparent z-30"></div>
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#E6B8D4]/40 to-transparent z-30"></div>
    </div>
  );
};

// Cloud wrapper: sizes SVG cloud to match heading width so text sits inside the cloud.
const CloudWrap: React.FC<{ children: React.ReactNode; padX?: number; padY?: number }> = ({ children, padX = 28, padY = 12 }) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState<number | null>(null);

  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    // initial measurement
    setWidth(el.offsetWidth);

    // update on resize using ResizeObserver so SVG always matches heading width
    const ro = new (window as any).ResizeObserver(() => {
      if (el) setWidth(el.offsetWidth);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const svgStyle: React.CSSProperties = width
    ? { width: `${width + padX * 2}px`, height: 'auto' }
    : { width: 'min(90%,720px)', height: 'auto' };

  return (
    <div className="relative w-full flex justify-center">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" style={svgStyle}>
        <svg viewBox="0 0 220 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto opacity-95 filter drop-shadow-lg">
          <g fill="#ffffff">
            <ellipse cx="36" cy="42" rx="36" ry="18" />
            <ellipse cx="110" cy="30" rx="70" ry="28" />
            <ellipse cx="184" cy="42" rx="36" ry="18" />
          </g>
        </svg>
      </div>
      <div ref={contentRef} className="relative z-10 inline-block" style={{ padding: `${padY}px ${padX}px` }}>
        {children}
      </div>
    </div>
  );
};

export const Home: React.FC = () => {
  const [showHeading, setShowHeading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !showHeading) {
        setShowHeading(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { once: false });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showHeading]);

  

  return (
    <div className="min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&family=Pacifico&display=swap');
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-mobile {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-mobile {
          animation: marquee-mobile 15s linear infinite;
        }
        .fade-in-scale {
          animation: fadeInScale 0.8s ease-out forwards;
        }
        .text-hero {
          text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8), 0px 2px 4px rgba(0, 0, 0, 0.6);
        }
        .text-section {
          text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
        }
        .text-shadow {
          text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
        }
        .card-overlay {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .font-display {
          font-family: 'Quicksand', sans-serif;
        }
        .font-brand {
          font-family: 'Pacifico', cursive;
        }
        .hero-overlay {
          transition: all 0.8s ease-out;
        }
        .hero-overlay.active {
          background-color: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(4px);
        }
      `}</style>

      {/* Navigation Bar */}
      <NavigationBar />

      {/* Hero Section - Modified height and content */}
      <section className="relative h-[85vh] md:h-screen overflow-hidden bg-white">
        <div className="absolute inset-0">
          <img
            src="/HeroMob.png"
            alt="FurryFriend - Find your perfect companion"
            className="md:hidden w-full h-full object-cover object-center brightness-110"
          />
          <img
            src="/Hero.png"
            alt="FurryFriend - Find your perfect companion"
            className="hidden md:block w-full h-full object-cover object-center brightness-110"
          />
          <div className={`absolute inset-0 hero-overlay ${showHeading ? 'active' : ''}`}></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-between text-center text-white max-w-4xl mx-auto px-4 pb-8">
          <div className="flex-1 flex flex-col items-center justify-center">
            {showHeading && (
              <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-wide fade-in-scale text-center" style={{
                color: 'white',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
              }}>
                Find your
                <span style={{ color: 'white', display: 'block' }}>
                  Forever Furry Friend
                </span>
              </h1>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <button 
              onClick={() => document.getElementById('breeds')?.scrollIntoView({ behavior: 'smooth' })}
              className="hidden sm:block bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-12 py-4 rounded-full text-lg font-bold transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-3xl backdrop-blur-sm border border-white/20"
            >
              Meet Our Friends
            </button>
            <button 
              onClick={() => document.getElementById('breeds')?.scrollIntoView({ behavior: 'smooth' })}
              className="sm:hidden bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl backdrop-blur-sm"
            >
              Meet Our Friends
            </button>
            <Link
              to="/contact"
              className="hidden sm:block px-12 py-4 rounded-full text-lg font-bold transform hover:scale-110 transition-all duration-300 border-2 shadow-2xl hover:shadow-3xl backdrop-blur-md"
              style={{
                backgroundColor: 'rgba(255, 182, 217, 0.7)',
                color: '#1F2937',
                borderColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)'
              }}
            >
              Get in Touch
            </Link>
            <Link
              to="/contact"
              className="sm:hidden px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 border-2 shadow-xl"
              style={{
                backgroundColor: 'rgba(255, 182, 217, 0.7)',
                color: '#1F2937',
                borderColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 160, 204, 0.8)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 182, 217, 0.7)'}
            >
              Get in Touch
            </Link>
          </div>
          
          <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button 
              onClick={() => document.getElementById('marquee-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white/80 hover:text-white transition-colors"
            >
              <ArrowDown className="h-6 w-6 animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section id="marquee-section" className="py-8 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-6xl animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>🐕</div>
          <div className="absolute top-40 right-20 text-4xl animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}>🐾</div>
          <div className="absolute bottom-20 left-1/3 text-5xl animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '2.8s' }}>🐶</div>
          <div className="absolute bottom-40 right-10 text-3xl animate-pulse" style={{ animationDuration: '2s' }}>❤️</div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6">
            <CloudWrap>
              <h2 className="font-display text-3xl font-bold text-gray-900 text-section drop-shadow-lg">
                Meet Our Adorable Friends
              </h2>
            </CloudWrap>
          </div>
          <ImageMarquee images={marqueeImages} />
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-8 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-6xl animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>🐕</div>
          <div className="absolute top-40 right-20 text-4xl animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}>🐾</div>
          <div className="absolute top-60 left-1/4 text-3xl animate-bounce" style={{ animationDelay: '1s', animationDuration: '3.5s' }}>🦴</div>
          <div className="absolute bottom-20 left-1/3 text-5xl animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '2.8s' }}>🐶</div>
          <div className="absolute bottom-40 right-10 text-3xl animate-pulse" style={{ animationDuration: '2s' }}>❤️</div>
          <div className="absolute top-1/3 right-1/3 text-4xl animate-bounce" style={{ animationDelay: '0.8s', animationDuration: '3.2s' }}>🏠</div>
          <div className="absolute bottom-60 right-1/4 text-3xl animate-bounce" style={{ animationDelay: '1.2s', animationDuration: '2.7s' }}>🎾</div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <CloudWrap>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-gray-900 text-section mb-16 tracking-wide drop-shadow-lg">
              Why Choose <span className="text-orange-600">FurryFriend</span>?
            </h2>
          </CloudWrap>
          
          <div className="flex justify-center">
            <div className="card-overlay p-8 rounded-3xl shadow-xl max-w-2xl">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-br from-orange-500 to-pink-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 shadow-lg">
                  <Heart className="h-8 w-8 text-white fill-current" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">FurryFriend Promise</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 bg-white/80 p-4 rounded-xl backdrop-blur-sm">
                  <Shield className="h-6 w-6 text-orange-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Verified Health Checks</h4>
                    <p className="text-gray-800">Complete medical history and health guarantees</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 bg-white/80 p-4 rounded-xl backdrop-blur-sm">
                  <Award className="h-6 w-6 text-pink-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Certified Lineage</h4>
                    <p className="text-gray-800">Documented breeding history and genetics</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 bg-white/80 p-4 rounded-xl backdrop-blur-sm">
                  <Users className="h-6 w-6 text-purple-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Lifetime Support</h4>
                    <p className="text-gray-800">Ongoing guidance for your furry friend's journey</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 bg-white/80 p-4 rounded-xl backdrop-blur-sm">
                  <Heart className="h-6 w-6 text-red-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Care Packages</h4>
                    <p className="text-gray-800">Breed-specific starter kits and resources</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breeds Section */}
      <section id="breeds" className="py-8 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-16 text-5xl animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '3.5s' }}>🐕‍🦺</div>
          <div className="absolute top-32 right-24 text-4xl animate-bounce" style={{ animationDelay: '0.7s', animationDuration: '2.8s' }}>🐾</div>
          <div className="absolute top-80 left-1/4 text-3xl animate-bounce" style={{ animationDelay: '1.1s', animationDuration: '3.2s' }}>🦴</div>
          <div className="absolute bottom-32 left-1/3 text-6xl animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.8s' }}>🐶</div>
          <div className="absolute bottom-20 right-16 text-4xl animate-pulse" style={{ animationDuration: '2.5s' }}>❤️</div>
          <div className="absolute top-1/2 right-1/3 text-3xl animate-bounce" style={{ animationDelay: '1.4s', animationDuration: '2.9s' }}>🏠</div>
          <div className="absolute bottom-80 right-1/4 text-4xl animate-bounce" style={{ animationDelay: '0.9s', animationDuration: '3.3s' }}>🎾</div>
          <div className="absolute top-60 left-1/2 text-3xl animate-bounce" style={{ animationDelay: '1.6s', animationDuration: '3.1s' }}>🐕</div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <CloudWrap>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-gray-900 text-section mb-16 tracking-wide drop-shadow-lg">
              Meet Our <span className="text-orange-600">Adorable Friends</span>
            </h2>
          </CloudWrap>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {breeds.map((breed) => (
              <div
                key={breed.name}
                className="group perspective-1000"
              >
                <Link to={`/breed/${breed.slug}`} className="block">
                  {/* Outer frame - orange pastel gradient frame */}
                  <div className="p-1 rounded-2xl md:rounded-3xl bg-gradient-to-br from-orange-200 to-orange-100 shadow-lg">
                    <div className="card-overlay rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl border-2 border-orange-300/40 hover:border-orange-400/60 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 perspective-1000 bg-gradient-to-br from-orange-50/30 to-orange-100/20 backdrop-blur-sm">
                  <div className="relative overflow-hidden">
                    {/* Image layout: if two images provided show left-right split, otherwise show single centered image */}
                    <div className="w-full aspect-[3/4] md:aspect-[4/5]">
                      {breed.image2 ? (
                        <div className="flex flex-row gap-1 h-full">
                          {/* Left Image with Frame */}
                          <div className="w-1/2 h-full p-0.5 bg-gradient-to-br from-orange-200 to-orange-100 rounded-lg">
                            <div className="w-full h-full overflow-hidden relative bg-gradient-to-b from-gray-100 to-gray-50 rounded-lg">
                              {/* blurred fill background to cover any empty space */}
                              <div
                                className="absolute inset-0 bg-center bg-cover filter blur-lg opacity-50"
                                style={{ backgroundImage: `url(${breed.image})` }}
                              />
                              <img
                                src={breed.image}
                                alt={`${breed.name} photo 1`}
                                className="relative w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 z-10"
                              />
                            </div>
                          </div>

                          {/* Right Image with Frame */}
                          <div className="w-1/2 h-full p-0.5 bg-gradient-to-br from-orange-200 to-orange-100 rounded-lg">
                            <div className="w-full h-full overflow-hidden relative bg-gradient-to-b from-gray-100 to-gray-50 rounded-lg">
                              <div
                                className="absolute inset-0 bg-center bg-cover filter blur-lg opacity-50"
                                style={{ backgroundImage: `url(${breed.image2 ?? breed.image})` }}
                              />
                              <img
                                src={breed.image2 ?? breed.image}
                                alt={`${breed.name} photo 2`}
                                className="relative w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 z-10"
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full h-full p-0.5 bg-gradient-to-br from-orange-200 to-orange-100 rounded-lg">
                          <div className="w-full h-full overflow-hidden relative bg-gradient-to-b from-gray-100 to-gray-50 rounded-lg flex items-center justify-center">
                            <div
                              className="absolute inset-0 bg-center bg-cover filter blur-lg opacity-50"
                              style={{ backgroundImage: `url(${breed.image})` }}
                            />
                            <img
                              src={breed.image}
                              alt={`${breed.name}`}
                              className="relative max-w-full max-h-full object-contain object-center transition-transform duration-500 z-10"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-3 md:p-4 md:p-6">
                    <h3 className="font-display text-base md:text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-all tracking-wide">
                      {breed.name}
                    </h3>
                    <button
                      onClick={() => document.getElementById(`breed-${breed.slug}`)?.scrollIntoView({ behavior: 'smooth' })}
                      className="mt-3 md:mt-4 w-full bg-gradient-to-r from-orange-400 to-orange-300 hover:from-orange-500 hover:to-orange-400 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm"
                    >
                      Learn More
                    </button>
                  </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Title Section */}
<section className="py-4 bg-white relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <CloudWrap>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-gray-900 text-section mb-4 tracking-wide drop-shadow-lg">
        Why Choose <span className="text-orange-600">Us</span>?
      </h2>
    </CloudWrap>
  </div>
</section>
      {/* CTA Image Section - Full width and height on desktop with luxury white frame */}
      <section className="py-8 md:py-12 relative overflow-hidden bg-white">
        <div className="px-4 md:px-12 lg:px-20">
          <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-2xl border-8 border-white" style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(0, 0, 0, 0.05)' }}>
            <img
              src="/CTAimg.jpeg"
              alt="Why Choose Us"
              className="w-full h-auto object-cover rounded-lg md:rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Find Friend CTA Section - Reduced and framed in a luxury white frame on desktop */}
      <section className="py-8 md:py-12 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          {/* Title above image */}
          <div className="text-center py-6 sm:py-8 md:py-10">
            <CloudWrap>
              <h2 className="font-display text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 drop-shadow-lg">
                Get in Touch
              </h2>
            </CloudWrap>
          </div>

          {/* Framed image with reduced height on desktop (clickable) */}
          <div className="relative">
            <Link to="/contact" className="mx-auto block bg-white rounded-3xl p-4 md:p-6 shadow-2xl border border-white/90" style={{ maxWidth: '900px' }}>
              <div className="relative">
                <img
                  src="/FindFriendCTA.png"
                  alt="Find your perfect friend"
                  className="w-full h-48 md:h-64 lg:h-72 object-cover rounded-2xl"
                />
                <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="font-display text-white text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight drop-shadow-lg">
                    Contact Us to Get your Best Friend
                  </span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-16 left-20 text-4xl animate-bounce" style={{ animationDelay: '0.4s', animationDuration: '3.4s' }}>📸</div>
          <div className="absolute top-40 right-28 text-3xl animate-bounce" style={{ animationDelay: '0.8s', animationDuration: '2.9s' }}>🐾</div>
          <div className="absolute bottom-40 left-1/4 text-5xl animate-bounce" style={{ animationDelay: '1.2s', animationDuration: '3.6s' }}>📱</div>
          <div className="absolute bottom-24 right-20 text-4xl animate-pulse" style={{ animationDuration: '2.3s' }}>❤️</div>
          <div className="absolute top-1/2 left-1/2 text-3xl animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3s' }}>🐶</div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <CloudWrap>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-gray-900 text-section mb-8 tracking-wide drop-shadow-lg">
              Follow Our <span className="text-orange-600">Journey</span>
            </h2>
          </CloudWrap>
          <InstagramGrid />
        </div>
      </section>
    </div>
  );
};

export default Home;