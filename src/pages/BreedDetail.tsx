import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Heart, Shield, Award, Users, Calendar, Weight, Activity, CheckCircle, Star, MapPin, Phone, Mail, Menu, X, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface BreedDetails {
  name: string;
  slug: string;
  image: string;
  gallery: string[];
  puppyToAdult: {
    puppy: string;
    adult: string;
  };
  description: string;
  temperament: string[];
  traits: string[];
  size: string;
  weight: string;
  puppyWeight: string;
  lifespan: string;
  coat: string;
  colors: string[];
  goodWith: string[];
  health: {
    commonIssues: string[];
    vetCheckups: string;
    vaccinations: string[];
  };
  care: {
    grooming: string;
    exercise: string;
    training: string;
    nutrition: string;
  };
}

// Sample breed data - in a real app, this would come from an API
const breedDatabase: Record<string, BreedDetails> = {
  'french-mastiff': {
    name: 'French Mastiff',
    slug: 'french-mastiff',
    image: '/dog1.jpg',
    gallery: [
      '/FM/13870.JPEG',
      '/FM/26525.JPEG',
      '/FM/FMtall.JPEG',
      '/FM/Frenchmastfamily1.JPEG',
      '/FM/8673.JPEG'
    ],
    puppyToAdult: {
      puppy: '/FM/26525.JPEG',
      adult: '/FM/FMtall.JPEG'
    },
    description: 'The French Mastiff, also known as Dogue de Bordeaux, is a majestic and powerful breed known for their loyal and protective nature. These gentle giants form strong bonds with their families and are excellent companions.',
    temperament: ['Loyal', 'Gentle', 'Protective', 'Calm', 'Affectionate'],
    traits: ['family-friendly', 'protective', 'calm', 'low-energy'],
    size: 'Large',
    weight: '45-50 kg',
    puppyWeight: '14-20 kg (3 months)',
    lifespan: '5-8 years',
    coat: 'Short, Fine',
    colors: ['Fawn', 'Mahogany', 'Red'],
    goodWith: ['Families', 'Children', 'Other Pets'],
    health: {
      commonIssues: ['Hip Dysplasia', 'Heart Conditions', 'Bloat'],
      vetCheckups: 'Twice yearly recommended',
      vaccinations: ['DHPP', 'Rabies', 'Bordetella']
    },
    care: {
      grooming: 'Weekly brushing, occasional bathing',
      exercise: 'Moderate daily walks',
      training: 'Early socialization and obedience training',
      nutrition: 'High-quality large breed formula'
    }
  },
  'maltese': {
    name: 'Maltese',
    slug: 'maltese',
    image: '/dog4.jpg',
    gallery: [
      '/Malt/25807.JPEG',
      '/Malt/maltcoloured.JPEG',
      '/Malt/maltcute.jpg',
      '/Malt/maltcute2.jpg',
      '/Malt/maltcute3.jpg',
      '/Malt/maltcute4.JPEG',
      '/Malt/Maltpic.jpg',
      '/Malt/matlhappy.jpg',
      '/Malt/5335.JPEG',
      '/Malt/7791.JPEG',
      '/Malt/8012.JPEG',
      '/Malt/25795.JPEG'
    ],
    puppyToAdult: {
      puppy: '/Malt/maltcute.jpg',
      adult: '/Malt/Maltpic.jpg'
    },
    description: 'The Maltese is a charming and elegant toy breed known for their silky white coat and playful personality. These affectionate companions are perfect for families and individuals seeking a loving, hypoallergenic pet.',
    temperament: ['Playful', 'Gentle', 'Affectionate', 'Intelligent', 'Social'],
    traits: ['hypoallergenic', 'small', 'playful', 'apartment-friendly'],
    size: 'Toy',
    weight: '1.8-3.2 kg',
    puppyWeight: '0.9-1.8 kg (3 months)',
    lifespan: '12-15 years',
    coat: 'Long, Silky',
    colors: ['White'],
    goodWith: ['Families', 'Seniors', 'Apartments'],
    health: {
      commonIssues: ['Dental Issues', 'Eye Problems', 'Patellar Luxation'],
      vetCheckups: 'Yearly recommended',
      vaccinations: ['DHPP', 'Rabies', 'Influenza']
    },
    care: {
      grooming: 'Daily brushing, professional grooming monthly',
      exercise: 'Indoor play, short walks',
      training: 'Positive reinforcement, house training',
      nutrition: 'Small breed kibble, portion control'
    }
  },
  'toy-poodle': {
    name: 'Toy Poodle',
    slug: 'toy-poodle',
    image: '/dog7.jpg',
    gallery: [
      '/TP/TPpup.JPEG',
      '/TP/pexels-jacob-sierra-419902407-16603124 (1).jpg',
      '/TP/pexels-katia-oleksa-661981532-29595140 (1).jpg',
      '/TP/pexels-valeriya-14095698 (1).jpg',
    ],
    puppyToAdult: {
      puppy: '/TP/TPpup.JPEG',
      adult: '/TP/pexels-jacob-sierra-419902407-16603124 (1).jpg'
    },
    description: 'The Toy Poodle is an exceptionally intelligent and elegant breed that combines beauty with brains. These versatile dogs are perfect companions for those who appreciate an active, trainable, and hypoallergenic pet.',
    temperament: ['Intelligent', 'Active', 'Trainable', 'Alert', 'Friendly'],
    traits: ['hypoallergenic', 'smart', 'active', 'low-shedding'],
    size: 'Toy',
    weight: '1.8-2.7 kg',
    puppyWeight: '1.1-1.9 kg (3 months)',
    lifespan: '10-18 years',
    coat: 'Curly, Dense',
    colors: ['White', 'Black', 'Apricot', 'Silver'],
    goodWith: ['Families', 'Allergy Sufferers', 'Apartments'],
    health: {
      commonIssues: ['Progressive Retinal Atrophy', 'Legg-Calve-Perthes', 'Epilepsy'],
      vetCheckups: 'Yearly recommended',
      vaccinations: ['DHPP', 'Rabies', 'Influenza']
    },
    care: {
      grooming: 'Professional grooming every 4-6 weeks',
      exercise: 'Daily walks, mental stimulation',
      training: 'Advanced obedience, agility training',
      nutrition: 'Small breed formula, regular meals'
    }
  },
  'yorkshire-terrier': {
    name: 'Yorkshire Terrier',
    slug: 'yorkshire-terrier',
    image: '/dog10.jpg',
    gallery: [
      '/YT/YT1.jpg',
      '/YT/YT2.jpg',
      '/YT/YTfriend.jpg',
      '/YT/YTCute.jpg',
      '/YT/YTpupcar.jpg',
      '/YT/YTPupface.jpg',
      '/YT/YTAesthetic.jpg',
      '/YT/YTaesthetic2.jpg'
    ],
    puppyToAdult: {
      puppy: '/YT/YTpupcar.jpg',
      adult: '/YT/YTPupface.jpg'
    },
    description: 'The Yorkshire Terrier is a feisty and confident toy breed with a big personality in a small package. These brave little dogs are loyal companions with beautiful silky coats and spirited attitudes.',
    temperament: ['Bold', 'Confident', 'Courageous', 'Energetic', 'Affectionate'],
    traits: ['small', 'brave', 'energetic', 'low-shedding'],
    size: 'Toy',
    weight: '1.8-3.2 kg',
    puppyWeight: '0.9-1.6 kg (3 months)',
    lifespan: '13-16 years',
    coat: 'Long, Silky',
    colors: ['Black & Tan', 'Blue & Gold'],
    goodWith: ['Families', 'Seniors', 'Apartments'],
    health: {
      commonIssues: ['Tracheal Collapse', 'Portosystemic Shunt', 'Dental Issues'],
      vetCheckups: 'Yearly recommended',
      vaccinations: ['DHPP', 'Rabies', 'Influenza']
    },
    care: {
      grooming: 'Daily brushing, regular trims',
      exercise: 'Short walks, indoor play',
      training: 'Consistent boundaries, socialization',
      nutrition: 'Small breed kibble, dental care'
    }
  }
};

// Navigation Bar Component matching Home page
const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBreedsDropdownOpen, setIsBreedsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleBreedsDropdown = () => {
    setIsBreedsDropdownOpen(!isBreedsDropdownOpen);
  };

  const handleBreedClick = (slug) => {
    navigate(`/breed/${slug}`);
    setIsBreedsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#E97451] via-[#FFB5A7] to-[#E6B8D4] shadow-lg">
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
              <Link to="/" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About Us
              </Link>
              
              {/* Breeds Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleBreedsDropdown}
                  className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Our Breeds
                  <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${isBreedsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isBreedsDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      {Object.values(breedDatabase).map((breed) => (
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
              
              <Link to="/contact" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors">
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
        <div className="md:hidden bg-white/95 backdrop-blur-sm">
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
                  {Object.values(breedDatabase).map((breed) => (
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

export const BreedDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [breed, setBreed] = useState<BreedDetails | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (slug && breedDatabase[slug]) {
      setBreed(breedDatabase[slug]);
    }
    window.scrollTo(0, 0);
  }, [slug]);

  if (!breed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FFB5A7] to-[#F4C2C2] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Breed Not Found</h1>
          <Link to="/" className="text-[#E97451] hover:text-[#E97451]/80 underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFB5A7] to-[#F4C2C2]">
      {/* Navigation Bar matching Home page */}
      <NavigationBar />

      {/* Hero Section with Image Gallery - Mobile Optimized */}
      <section className="relative pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
          <motion.div 
            className="space-y-6 lg:space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Mobile First: Breed Info on Top */}
            <div className="lg:hidden space-y-4">
              <div className="text-center">
                <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                  {breed.name}
                </h1>
                <div className="flex items-center justify-center space-x-4 text-gray-600 text-sm">
                  <span className="flex items-center">
                    <Star className="h-4 w-4 text-[#E97451] fill-current" />
                    <span className="ml-1">4.9 (127 reviews)</span>
                  </span>
                  <span>•</span>
                  <span>{breed.size} Breed</span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-center px-2">{breed.description}</p>

              {/* Mobile Quick Stats */}
              <div className="grid grid-cols-2 gap-3 px-2">
                <div className="bg-white p-3 rounded-xl shadow-md">
                  <div className="flex items-center space-x-2 mb-1">
                    <Weight className="h-4 w-4 text-[#E97451]" />
                    <span className="text-xs text-gray-600">Adult Weight</span>
                  </div>
                  <p className="font-semibold text-gray-800 text-sm">{breed.weight}</p>
                </div>
                <div className="bg-white p-3 rounded-xl shadow-md">
                  <div className="flex items-center space-x-2 mb-1">
                    <Weight className="h-4 w-4 text-[#E97451]" />
                    <span className="text-xs text-gray-600">Puppy Weight</span>
                  </div>
                  <p className="font-semibold text-gray-800 text-sm">{breed.puppyWeight}</p>
                </div>
                <div className="bg-white p-3 rounded-xl shadow-md">
                  <div className="flex items-center space-x-2 mb-1">
                    <Calendar className="h-4 w-4 text-[#E97451]" />
                    <span className="text-xs text-gray-600">Lifespan</span>
                  </div>
                  <p className="font-semibold text-gray-800 text-sm">{breed.lifespan}</p>
                </div>
              </div>
            </div>

            {/* Main Image Gallery - Mobile Optimized */}
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start space-y-6 lg:space-y-0">
              {/* Image Section */}
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-100">
                  <div className="aspect-[4/5] sm:aspect-[7/9] w-full">
                    <img
                      src={breed.gallery[selectedImage]}
                      alt={breed.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                
                {/* Thumbnail Gallery - Mobile Optimized */}
                <div className="flex space-x-2 overflow-x-auto pb-2 px-2">
                  {breed.gallery.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-16 h-20 sm:w-20 sm:h-24 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index ? 'border-[#E97451] scale-105' : 'border-gray-200'
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`${breed.name} ${index + 1}`} 
                        className="w-full h-full object-cover object-center" 
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Breed Information - Desktop Only */}
              <div className="hidden lg:block space-y-6">
                <div>
                  <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                    {breed.name}
                  </h1>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <span className="flex items-center">
                      <Star className="h-4 w-4 text-[#E97451] fill-current" />
                      <span className="ml-1">4.9 (127 reviews)</span>
                    </span>
                    <span>•</span>
                    <span>{breed.size} Breed</span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">{breed.description}</p>

                {/* Desktop Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <div className="flex items-center space-x-2 mb-1">
                      <Weight className="h-4 w-4 text-[#E97451]" />
                      <span className="text-sm text-gray-600">Adult Weight</span>
                    </div>
                    <p className="font-semibold text-gray-800">{breed.weight}</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <div className="flex items-center space-x-2 mb-1">
                      <Weight className="h-4 w-4 text-[#E97451]" />
                      <span className="text-sm text-gray-600">Puppy Weight</span>
                    </div>
                    <p className="font-semibold text-gray-800">{breed.puppyWeight}</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <div className="flex items-center space-x-2 mb-1">
                      <Calendar className="h-4 w-4 text-[#E97451]" />
                      <span className="text-sm text-gray-600">Lifespan</span>
                    </div>
                    <p className="font-semibold text-gray-800">{breed.lifespan}</p>
                  </div>
                </div>

                {/* Traits */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Key Traits</h3>
                  <div className="flex flex-wrap gap-2">
                    {breed.traits.map((trait) => (
                      <span
                        key={trait}
                        className="px-3 py-1 bg-[#FFB5A7]/30 text-gray-800 rounded-full text-sm"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="space-y-3 pt-4">
                  <button className="bg-[#E97451] hover:bg-[#E97451]/90 text-white px-6 py-3 rounded-full font-semibold transform hover:scale-105 transition-all w-full">
                    Learn More About Adoption
                  </button>
                  <p className="text-sm text-gray-600 text-center">Health guarantee & lifetime support included</p>
                </div>
              </div>
            </div>

            {/* Mobile Traits and CTA */}
            <div className="lg:hidden space-y-4 px-2">
              {/* Traits */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3 text-center">Key Traits</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {breed.traits.map((trait) => (
                    <span
                      key={trait}
                      className="px-3 py-1 bg-[#FFB5A7]/30 text-gray-800 rounded-full text-sm"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="space-y-3 pt-2">
                <button className="bg-[#E97451] hover:bg-[#E97451]/90 text-white px-6 py-3 rounded-full font-semibold transform hover:scale-105 transition-all w-full">
                  Learn More About Adoption
                </button>
                <p className="text-sm text-gray-600 text-center">Health guarantee & lifetime support included</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Puppy to Adult Comparison Section - Mobile Optimized */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-10">
            From Puppy to Adult
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Puppy */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#FFB5A7]/20 to-[#F4C2C2]/20 p-4 sm:p-6 rounded-2xl">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 text-center">Puppy Stage</h3>
                <div className="relative overflow-hidden rounded-xl shadow-lg mb-3 sm:mb-4 bg-gray-100">
                  <div className="aspect-[4/5] sm:aspect-[7/9] w-full">
                    <img
                      src={breed.puppyToAdult.puppy}
                      alt={`${breed.name} puppy`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">
                  {breed.name} puppies are adorable, energetic, and require special care during their early months. 
                  They need proper socialization, training, and nutrition to grow into healthy adult dogs.
                </p>
              </div>
            </motion.div>
            
            {/* Adult */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#E6B8D4]/20 to-white p-4 sm:p-6 rounded-2xl">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 text-center">Adult Stage</h3>
                <div className="relative overflow-hidden rounded-xl shadow-lg mb-3 sm:mb-4 bg-gray-100">
                  <div className="aspect-[4/5] sm:aspect-[7/9] w-full">
                    <img
                      src={breed.puppyToAdult.adult}
                      alt={`${breed.name} adult`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">
                  Adult {breed.name.toLowerCase()}s showcase their full beauty and personality. 
                  They have established their temperament and are well-adjusted to their environment with proper training.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Breed Gallery Section - Mobile Optimized */}
      <section className="py-8 sm:py-12 bg-gradient-to-br from-[#F4C2C2] to-[#E6B8D4] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-4xl sm:text-6xl animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>🐕</div>
          <div className="absolute top-40 right-20 text-3xl sm:text-4xl animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}>🐾</div>
          <div className="absolute bottom-20 left-1/3 text-4xl sm:text-5xl animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '2.8s' }}>🐶</div>
          <div className="absolute bottom-40 right-10 text-2xl sm:text-3xl animate-pulse" style={{ animationDuration: '2s' }}>❤️</div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-10">
            {breed.name} Gallery
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {breed.gallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-xl shadow-md group bg-gray-100"
              >
                <div className="aspect-[4/5] sm:aspect-[7/9] w-full">
                  <img
                    src={img}
                    alt={`${breed.name} ${index + 1}`}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Information Tabs - Mobile Optimized */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Temperament */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-[#FFB5A7]/20 to-white p-4 sm:p-6 rounded-2xl"
            >
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-[#E97451]" />
                <h3 className="font-display text-lg sm:text-xl font-bold text-gray-800">Temperament</h3>
              </div>
              <div className="space-y-2">
                {breed.temperament.map((temp) => (
                  <div key={temp} className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-[#E97451] flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">{temp}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Health Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#F4C2C2]/20 to-white p-4 sm:p-6 rounded-2xl"
            >
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-[#E97451]" />
                <h3 className="font-display text-lg sm:text-xl font-bold text-gray-800">Health Care</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">Vet Checkups</p>
                  <p className="font-medium text-gray-800 text-sm sm:text-base">{breed.health.vetCheckups}</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">Vaccinations</p>
                  <div className="flex flex-wrap gap-1">
                    {breed.health.vaccinations.map((vac) => (
                      <span key={vac} className="text-xs bg-white px-2 py-1 rounded">
                        {vac}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Care Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-[#E6B8D4]/20 to-white p-4 sm:p-6 rounded-2xl"
            >
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <Activity className="h-5 w-5 sm:h-6 sm:w-6 text-[#E97451]" />
                <h3 className="font-display text-lg sm:text-xl font-bold text-gray-800">Care Needs</h3>
              </div>
              <div className="space-y-2 text-xs sm:text-sm">
                <div>
                  <span className="text-gray-600">Grooming:</span>
                  <p className="text-gray-800">{breed.care.grooming}</p>
                </div>
                <div>
                  <span className="text-gray-600">Exercise:</span>
                  <p className="text-gray-800">{breed.care.exercise}</p>
                </div>
                <div>
                  <span className="text-gray-600">Training:</span>
                  <p className="text-gray-800">{breed.care.training}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Mobile Optimized */}
      <section className="py-8 sm:py-16 bg-gradient-to-br from-[#FFB5A7] to-[#F4C2C2] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-4xl sm:text-6xl animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>🐕</div>
          <div className="absolute top-40 right-20 text-3xl sm:text-4xl animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}>🐾</div>
          <div className="absolute bottom-20 left-1/3 text-4xl sm:text-5xl animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '2.8s' }}>🐶</div>
          <div className="absolute bottom-40 right-10 text-2xl sm:text-3xl animate-pulse" style={{ animationDuration: '2s' }}>❤️</div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Why Choose <span className="text-[#E97451]">FurryFriend</span>?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
              We're committed to connecting you with healthy, happy puppies from trusted breeders
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Shield, title: 'Health Guaranteed', desc: 'Comprehensive health checks' },
              { icon: Award, title: 'Certified Breeders', desc: 'Licensed, reputable partners' },
              { icon: Users, title: 'Lifetime Support', desc: 'Ongoing guidance' },
              { icon: Heart, title: 'Happy Puppies', desc: 'Raised with love' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-[#E97451] p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4">
                  <feature.icon className="h-5 w-5 sm:h-8 sm:w-8 text-white mx-auto" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 px-2">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA - Mobile Optimized */}
      <section className="py-8 sm:py-16 bg-gradient-to-r from-[#E97451] to-[#FFA07A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to Meet Your New Best Friend?
          </h2>
          <p className="text-white/90 mb-6 sm:mb-8 text-sm sm:text-base sm:text-lg px-4">
            Contact us today to schedule a visit or learn more about {breed.name}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-xl">
              <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white mx-auto mb-2" />
              <p className="text-white font-semibold text-sm sm:text-base">Call Us</p>
              <p className="text-white/90 text-xs sm:text-sm">(555) 123-4567</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-xl">
              <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white mx-auto mb-2" />
              <p className="text-white font-semibold text-sm sm:text-base">Email</p>
              <p className="text-white/90 text-xs sm:text-sm">hello@furryfriend.com</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-xl">
              <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white mx-auto mb-2" />
              <p className="text-white font-semibold text-sm sm:text-base">Visit</p>
              <p className="text-white/90 text-xs sm:text-sm">123 Pet Street, City</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-white text-[#E97451] px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base">
              Schedule Visit
            </button>
            <button className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#E97451] transition-all text-sm sm:text-base">
              Ask Questions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BreedDetail;