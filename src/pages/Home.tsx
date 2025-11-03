import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Shield, Heart, Award, Users, AlertTriangle, HelpCircle } from 'lucide-react';

const breeds = [
  {
    name: 'French Mastiff',
    slug: 'french-mastiff',
    image: '/dog1.jpg',
    temperament: ['Loyal', 'Gentle', 'Protective'],
    traits: ['family-friendly', 'protective', 'calm']
  },
  {
    name: 'Maltese',
    slug: 'maltese',
    image: '/dog4.jpg',
    temperament: ['Playful', 'Gentle', 'Affectionate'],
    traits: ['hypoallergenic', 'small', 'playful']
  },
  {
    name: 'Toy Poodle',
    slug: 'toy-poodle',
    image: '/dog7.jpg',
    temperament: ['Intelligent', 'Active', 'Trainable'],
    traits: ['hypoallergenic', 'smart', 'active']
  },
  {
    name: 'Yorkshire Terrier',
    slug: 'yorkshire-terrier',
    image: '/dog10.jpg',
    temperament: ['Bold', 'Confident', 'Courageous'],
    traits: ['small', 'brave', 'energetic']
  }
];

export const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % breeds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % breeds.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + breeds.length) % breeds.length);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="relative h-full">
            {breeds.map((breed, index) => (
              <motion.div
                key={breed.name}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
                initial={{ scale: 1.1 }}
                animate={{ scale: index === currentSlide ? 1 : 1.1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <img
                  src={breed.image}
                  alt={`${breed.name} - Premium dog breed available for adoption`}
                  alt={breed.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Find Your
            <span className="text-warm-peach block drop-shadow-lg">Furry Forever Friend</span>
          </motion.h1>
          <motion.p 
            className="font-sans text-xl md:text-2xl mb-8 opacity-90 font-medium tracking-wide"
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
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {breeds.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-warm-peach' : 'bg-white/50'
              }`}
            />
          ))}
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
                  <div className="relative overflow-hidden">
                    <img
                      src={breed.image}
                      alt={`${breed.name} - Premium dog breed for adoption with health guarantee`}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110"
                    />
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

      {/* Testimonials Section */}
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
                name: "Sarah & Max",
                text: "FurryFriend helped us find the perfect addition to our family. Max is everything they promised and more!",
                image: "/dog13.jpg"
              },
              {
                name: "James & Luna",
                text: "The support we received was incredible. Luna settled in beautifully and we couldn't be happier!",
                image: "/dog14.jpg"
              },
              {
                name: "Emma & Buddy",
                text: "Professional, caring, and so knowledgeable. Buddy has brought so much joy to our home!",
                image: "/dog15.jpg"
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