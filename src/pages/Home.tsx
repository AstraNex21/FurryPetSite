import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Heart, Award, Users, AlertTriangle, HelpCircle, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const breeds = [
  {
    name: 'French Mastiff',
    slug: 'french-mastiff',
    image: '/FM/FMX.jpg',
    temperament: ['Loyal', 'Gentle', 'Protective'],
    traits: ['family-friendly', 'protective', 'calm']
  },
  {
    name: 'Maltese',
    slug: 'maltese',
    image: '/Malt/maltcute.jpg',
    temperament: ['Playful', 'Gentle', 'Affectionate'],
    traits: ['hypoallergenic', 'small', 'playful']
  },
  {
    name: 'Toy Poodle',
    slug: 'toy-poodle',
    image: '/TP/pexels-valeriya-14095707 (1).jpg',
    temperament: ['Intelligent', 'Active', 'Trainable'],
    traits: ['hypoallergenic', 'smart', 'active']
  },
  {
    name: 'Yorkshire Terrier',
    slug: 'yorkshire-terrier',
    image: '/YT/YTAesthetic.jpg',
    temperament: ['Bold', 'Confident', 'Courageous'],
    traits: ['small', 'brave', 'energetic']
  }
];

// Marquee images
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

// Image Marquee Component
const ImageMarquee: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    if (!marqueeElement) return;

    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

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
        className={`flex ${isPaused ? '' : 'animate-marquee'} whitespace-nowrap`}
      >
        {/* First set of images */}
        {marqueeImages.map((img, index) => (
          <div key={`first-${index}`} className="inline-block mx-3 relative group">
            <div className="relative overflow-hidden rounded-lg h-32 w-24 md:h-40 md:w-28 shadow-lg transform transition-all duration-300 group-hover:scale-105">
              {/* Orange-pink gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-pink-400/20 to-purple-400/20 z-10"></div>
              
              {/* Frame border */}
              <div className="absolute inset-0 border-2 border-gradient-to-r from-orange-300 to-pink-300 rounded-lg z-20 pointer-events-none"></div>
              
              {/* Image with lazy loading */}
              <img
                src={img}
                alt={`Pet portrait ${index + 1}`}
                loading="lazy"
                className="h-full w-full object-cover object-center"
              />
              
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-300/30 to-pink-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            </div>
          </div>
        ))}
        
        {/* Duplicate set for seamless loop */}
        {marqueeImages.map((img, index) => (
          <div key={`second-${index}`} className="inline-block mx-3 relative group">
            <div className="relative overflow-hidden rounded-lg h-32 w-24 md:h-40 md:w-28 shadow-lg transform transition-all duration-300 group-hover:scale-105">
              {/* Orange-pink gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-pink-400/20 to-purple-400/20 z-10"></div>
              
              {/* Frame border */}
              <div className="absolute inset-0 border-2 border-gradient-to-r from-orange-300 to-pink-300 rounded-lg z-20 pointer-events-none"></div>
              
              {/* Image with lazy loading */}
              <img
                src={img}
                alt={`Pet portrait ${index + 1}`}
                loading="lazy"
                className="h-full w-full object-cover object-center"
              />
              
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-300/30 to-pink-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Gradient fade edges for smooth transition */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-30"></div>
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-30"></div>
    </div>
  );
};

export const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section with Image - Fixed height and object position */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Hero.png"
            alt="FurryFriend - Find your perfect companion"
            className="w-full h-full object-cover object-top md:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Find Your
            <span className="text-warm-peach block drop-shadow-lg">Furry Forever Friend</span>
          </motion.h1>
          <motion.p 
            className="font-sans text-lg md:text-xl lg:text-2xl mb-8 opacity-90 font-medium tracking-wide max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Discover love, loyalty, and endless joy with our carefully selected companions
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <button 
              onClick={() => document.getElementById('breeds')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-warm-peach hover:bg-warm-peach/90 text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Meet Our Friends
            </button>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-soft-brown px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>
          
          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <button 
              onClick={() => document.getElementById('marquee-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white/80 hover:text-white transition-colors"
            >
              <ArrowDown className="h-6 w-6 animate-bounce" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Image Marquee Section */}
      <section id="marquee-section" className="py-8 bg-gradient-to-r from-orange-50 via-pink-50 to-purple-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="font-display text-3xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Meet Our Adorable Friends
            </h2>
          </div>
          <ImageMarquee />
        </div>
      </section>

      {/* FurryFriend vs Breeders Section */}
      <section className="py-20 bg-gradient-to-br from-cream via-white to-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src="/dog19.jpg" alt="" className="w-full h-full object-cover blur-sm" />
        </div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-6xl">🐕</div>
          <div className="absolute top-40 right-20 text-4xl">🐾</div>
          <div className="absolute top-60 left-1/4 text-3xl">🦴</div>
          <div className="absolute bottom-20 left-1/3 text-5xl">🐶</div>
          <div className="absolute bottom-40 right-10 text-3xl">❤️</div>
          <div className="absolute top-1/3 right-1/3 text-4xl">🏠</div>
          <div className="absolute bottom-60 right-1/4 text-3xl">🎾</div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-soft-brown via-warm-peach to-soft-brown bg-clip-text text-transparent mb-16 tracking-wide">
            Why Choose <span className="bg-gradient-to-r from-warm-peach to-orange-400 bg-clip-text text-transparent">FurryFriend</span>?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* FurryFriend Benefits */}
            <div className="bg-gradient-to-br from-warm-peach/10 to-cream p-8 rounded-3xl shadow-lg border-2 border-warm-peach/20">
              <div className="text-center mb-8">
                <div className="bg-warm-peach p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white fill-current" />
                </div>
                <h3 className="text-2xl font-bold text-soft-brown">FurryFriend Promise</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Shield className="h-6 w-6 text-warm-peach flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-soft-brown">Verified Health Checks</h4>
                    <p className="text-gray-600">Complete medical history and health guarantees</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Award className="h-6 w-6 text-warm-peach flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-soft-brown">Certified Lineage</h4>
                    <p className="text-gray-600">Documented breeding history and genetics</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Users className="h-6 w-6 text-warm-peach flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-soft-brown">Lifetime Support</h4>
                    <p className="text-gray-600">Ongoing guidance for your furry friend's journey</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Heart className="h-6 w-6 text-warm-peach flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-soft-brown">Care Packages</h4>
                    <p className="text-gray-600">Breed-specific starter kits and resources</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Breeder Risks */}
            <div className="bg-gray-50 p-8 rounded-3xl shadow-lg border-2 border-gray-200">
              <div className="text-center mb-8">
                <div className="bg-gray-400 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <AlertTriangle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-700">Unknown Breeders</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <HelpCircle className="h-6 w-6 text-gray-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-700">Unverified Health</h4>
                    <p className="text-gray-500">No guarantee of medical history or health status</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <HelpCircle className="h-6 w-6 text-gray-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-700">Questionable Lineage</h4>
                    <p className="text-gray-500">Unclear breeding practices and genetics</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <HelpCircle className="h-6 w-6 text-gray-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-700">Limited Support</h4>
                    <p className="text-gray-500">Little to no ongoing guidance or assistance</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <HelpCircle className="h-6 w-6 text-gray-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-700">No Resources</h4>
                    <p className="text-gray-500">You're on your own for care and training</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breed Showcase Section */}
      <section id="breeds" className="py-20 bg-gradient-to-br from-cream via-orange-50 to-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src="/dog20.jpg" alt="" className="w-full h-full object-cover blur-sm" />
        </div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-16 text-5xl">🐕‍🦺</div>
          <div className="absolute top-32 right-24 text-4xl">🐾</div>
          <div className="absolute top-80 left-1/4 text-3xl">🦴</div>
          <div className="absolute bottom-32 left-1/3 text-6xl">🐶</div>
          <div className="absolute bottom-20 right-16 text-4xl">❤️</div>
          <div className="absolute top-1/2 right-1/3 text-3xl">🏠</div>
          <div className="absolute bottom-80 right-1/4 text-4xl">🎾</div>
          <div className="absolute top-60 left-1/2 text-3xl">🐕</div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-soft-brown via-warm-peach to-soft-brown bg-clip-text text-transparent mb-16 tracking-wide">
            Meet Our <span className="bg-gradient-to-r from-warm-peach to-orange-400 bg-clip-text text-transparent">Adorable Friends</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {breeds.map((breed, index) => (
              <motion.div
                key={breed.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, rotateY: 5 }}
                className="group perspective-1000"
              >
                <Link to={`/breed/${breed.slug}`} className="block">
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 hover:rotate-1 transition-all duration-500 perspective-1000">
                  <div className="relative overflow-hidden bg-gray-100">
                    <div className="aspect-[7/9] w-full">
                      <img
                        src={breed.image}
                        alt={`${breed.name} - Premium dog breed for adoption with health guarantee`}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/10 to-transparent backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-soft-brown mb-2 group-hover:text-warm-peach transition-colors tracking-wide">
                      {breed.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {breed.temperament.slice(0, 2).map((trait) => (
                        <span
                          key={trait}
                          className="px-3 py-1 bg-warm-peach/20 text-warm-peach text-sm rounded-full"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      {breed.traits.includes('family-friendly') && <span>👨‍👩‍👧‍👦</span>}
                      {breed.traits.includes('hypoallergenic') && <span>🌿</span>}
                      {breed.traits.includes('small') && <span>🐕</span>}
                      {breed.traits.includes('playful') && <span>⚽</span>}
                      {breed.traits.includes('protective') && <span>🛡️</span>}
                      {breed.traits.includes('smart') && <span>🧠</span>}
                    </div>
                  </div>
                </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section with Indian Names and Family Images */}
      <section className="py-20 bg-gradient-to-br from-white via-cream to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src="/dog21.jpg" alt="" className="w-full h-full object-cover blur-sm" />
        </div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-16 left-20 text-4xl">🐕</div>
          <div className="absolute top-40 right-28 text-3xl">🐾</div>
          <div className="absolute bottom-40 left-1/4 text-5xl">🐶</div>
          <div className="absolute bottom-24 right-20 text-4xl">❤️</div>
          <div className="absolute top-1/2 left-1/2 text-3xl">🏠</div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-soft-brown via-warm-peach to-soft-brown bg-clip-text text-transparent mb-16 tracking-wide">
            Happy <span className="bg-gradient-to-r from-warm-peach to-orange-400 bg-clip-text text-transparent">Families</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya & Bruno",
                text: "FurryFriend helped us find perfect addition to our family. Bruno has brought so much joy to our home!",
                image: "/marquee/maltfam.JPEG"
              },
              {
                name: "Rahul & Luna",
                text: "The support we received was incredible. Luna settled in beautifully and our kids absolutely adore her!",
                image: "/marquee/Petfam.JPEG"
              },
              {
                name: "Anjali & Buddy",
                text: "Professional, caring, and so knowledgeable. Buddy has become an inseparable part of our family!",
                image: "/marquee/Frenchmastfamily1.JPEG"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-cream p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-soft-brown">{testimonial.name}</h4>
                    <div className="flex space-x-1 text-warm-peach">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};