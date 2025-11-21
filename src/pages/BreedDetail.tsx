import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Heart, Shield, Award, Users, Calendar, Weight, Star, MapPin, Phone, Mail, Menu, X, ChevronDown } from 'lucide-react';
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
      '/FM/8673.jpeg',
      '/FM/13870.JPEG',
      '/FM/26505.JPEG',
      '/FM/26525.JPEG',
      '/FM/26527.JPEG',
      '/FM/FMtall.JPEG',
      '/FM/FMX.jpg',
      '/FM/Frenchmastfamily1.JPEG',
      '/FM/Gemini_Generated_Image_2iunct2iunct2iun.png',
      '/FM/Gemini_Generated_Image_ujxibujxibujxibu.png',
      '/FM/_.jpeg'
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
      vetCheckups: 'Twice yearly, heart disease & joint screening',
      vaccinations: ['DHPP', 'Rabies', 'Bordetella']
    },
    care: {
      grooming: 'Weekly brushing, clean face wrinkles, nail trimming every 3-4 weeks',
      exercise: 'Moderate daily walks, avoid heat exposure',
      training: 'Early socialization and obedience training',
      nutrition: 'High-quality large breed formula, weight control'
    }
  },
  'maltese': {
    name: 'Maltese',
    slug: 'maltese',
    image: '/dog4.jpg',
    gallery: [
      '/Malt/25795.JPEG',
      '/Malt/25807.JPEG',
      '/Malt/5335.JPEG',
      '/Malt/76272.JPEG',
      '/Malt/7791.JPEG',
      '/Malt/79128.JPEG',
      '/Malt/79148.JPEG',
      '/Malt/7932.JPEG',
      '/Malt/8012.JPEG',
      '/Malt/maltcoloured.JPEG',
      '/Malt/maltcute.jpg',
      '/Malt/maltcute2.jpg',
      '/Malt/maltcute3.jpg',
      '/Malt/maltcute4.JPEG',
      '/Malt/matlhappy.jpg',
      '/Malt/PHOTO-2022-02-01-22-12-24.jpg'
    ],
    puppyToAdult: {
      puppy: '/Malt/maltcute.jpg',
      adult: '/Malt/matlhappy.jpg'
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
      vetCheckups: 'Yearly, monitor respiratory & digestive health',
      vaccinations: ['DHPP', 'Rabies', 'Influenza']
    },
    care: {
      grooming: 'Daily brushing, tear-stain cleaning, bath every 2-3 weeks, professional grooming',
      exercise: 'Gentle exercise suitable for small size',
      training: 'Positive reinforcement, house training',
      nutrition: 'High-quality small breed formula, stable diet'
    }
  },
  'toy-poodle': {
    name: 'Toy Poodle',
    slug: 'toy-poodle',
    image: '/dog7.jpg',
    gallery: [
      '/TP/Toy Poodle Puppy for sale in Dallas, Texas _ $200.jpeg',
      '/TP/TPpup.JPEG',
      '/TP/28411.JPEG',
      '/TP/28463.JPEG',
      '/TP/69023.JPEG',
      '/TP/Gemini_Generated_Image_4kzl0g4kzl0g4kzl.png',
      '/TP/Gemini_Generated_Image_cu6yytcu6yytcu6y.png',
      '/TP/pexels-jacob-sierra-419902407-16603124 (1).jpg',
      '/TP/pexels-katia-oleksa-661981532-29595140 (1).jpg',
      '/TP/pexels-valeriya-14095698 (1).jpg',
      '/TP/pexels-valeriya-14095707 (1).jpg'
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
      vetCheckups: 'Yearly check for eye disorders & patellar luxation',
      vaccinations: ['DHPP', 'Rabies', 'Influenza']
    },
    care: {
      grooming: 'Professional grooming every 4-6 weeks, regular brushing, ear cleaning',
      exercise: 'Daily walks, mental stimulation, healthy weight management',
      training: 'Advanced obedience, agility training',
      nutrition: 'High-quality small breed formula, regular meals, monitor blood sugar'
    }
  },
  'yorkshire-terrier': {
    name: 'Yorkshire Terrier',
    slug: 'yorkshire-terrier',
    image: '/dog10.jpg',
    gallery: [
      '/YT/31342.JPEG',
      '/YT/37860.JPEG',
      '/YT/37869.JPEG',
      '/YT/4907.JPEG',
      '/YT/8086.JPEG',
      '/YT/YT1.jpg',
      '/YT/YT2.jpg',
      '/YT/YTAesthetic.jpg',
      '/YT/YTaesthetic2.jpg',
      '/YT/YTBed.jpg',
      '/YT/YTCute.jpg',
      '/YT/YTfriend.jpg',
      '/YT/YTpupcar.jpg',
      '/YT/YTPupface.jpg'
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
      vetCheckups: 'Regular small-breed check-ups, monitor tracheal collapse',
      vaccinations: ['DHPP', 'Rabies', 'Influenza']
    },
    care: {
      grooming: 'Daily brushing or regular puppy cuts, bath every 2-3 weeks, eye & ear cleaning',
      exercise: 'Short walks, indoor play, safe handling due to fragile size',
      training: 'Consistent boundaries, early socialization',
      nutrition: 'Small breed kibble, dental care, keep warm in winter'
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

  const handleBreedClick = (slug: string) => {
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
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    if (slug && breedDatabase[slug]) {
      setBreed(breedDatabase[slug]);
    }
    window.scrollTo(0, 0);
  }, [slug]);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - you can send this to your backend
    console.log('Quote request submitted:', { breed: breed?.name, ...formData });
    // Reset form and close modal
    setFormData({ name: '', email: '', phone: '', message: '' });
    setShowQuoteForm(false);
    // Optionally show a success message
    alert('Thank you for your inquiry! We will contact you soon.');
  };

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
    <div className="min-h-screen bg-white">
      {/* Navigation Bar matching Home page */}
      <NavigationBar />

      {/* Hero Section with Image Gallery - Mobile Optimized */}
      <section className="relative pt-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-4">
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
                
                {/* Key Traits Icons and Emojis */}
                <div className="flex items-center justify-center flex-wrap gap-3 mb-4 px-2">
                  {breed.traits.includes('family-friendly') && (
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-2xl">👨‍👩‍👧‍👦</span>
                      <span className="text-xs text-gray-600">Family</span>
                    </div>
                  )}
                  {breed.traits.includes('protective') && (
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-2xl">🛡️</span>
                      <span className="text-xs text-gray-600">Protective</span>
                    </div>
                  )}
                  {breed.traits.includes('playful') && (
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-2xl">⚽</span>
                      <span className="text-xs text-gray-600">Playful</span>
                    </div>
                  )}
                  {breed.traits.includes('hypoallergenic') && (
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-2xl">🌿</span>
                      <span className="text-xs text-gray-600">Hypoallergenic</span>
                    </div>
                  )}
                  {breed.traits.includes('small') && (
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-2xl">🐕</span>
                      <span className="text-xs text-gray-600">Small</span>
                    </div>
                  )}
                  {breed.traits.includes('smart') && (
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-2xl">🧠</span>
                      <span className="text-xs text-gray-600">Smart</span>
                    </div>
                  )}
                  {breed.traits.includes('calm') && (
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-2xl">😌</span>
                      <span className="text-xs text-gray-600">Calm</span>
                    </div>
                  )}
                  {breed.traits.includes('energetic') && (
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-2xl">⚡</span>
                      <span className="text-xs text-gray-600">Energetic</span>
                    </div>
                  )}
                </div>
                
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
                <div className="bg-white p-3 rounded-xl shadow-md">
                  <div className="flex items-center space-x-2 mb-1">
                    <Heart className="h-4 w-4 text-[#E97451]" />
                    <span className="text-xs text-gray-600">Healthcare</span>
                  </div>
                  <p className="font-semibold text-gray-800 text-xs">{breed.health.vetCheckups}</p>
                </div>
                <div className="bg-white p-3 rounded-xl shadow-md col-span-2">
                  <div className="flex items-center space-x-2 mb-1">
                    <Award className="h-4 w-4 text-[#E97451]" />
                    <span className="text-xs text-gray-600">Care Needs</span>
                  </div>
                  <p className="font-semibold text-gray-800 text-xs">{breed.care.grooming.split(',')[0]}</p>
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
                  <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-3">
                    {breed.name}
                  </h1>
                  
                  {/* Key Traits Icons and Emojis - Desktop */}
                  <div className="flex items-center flex-wrap gap-4 mb-4">
                    {breed.traits.includes('family-friendly') && (
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-3xl">👨‍👩‍👧‍👦</span>
                        <span className="text-sm text-gray-600">Family</span>
                      </div>
                    )}
                    {breed.traits.includes('protective') && (
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-3xl">🛡️</span>
                        <span className="text-sm text-gray-600">Protective</span>
                      </div>
                    )}
                    {breed.traits.includes('playful') && (
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-3xl">⚽</span>
                        <span className="text-sm text-gray-600">Playful</span>
                      </div>
                    )}
                    {breed.traits.includes('hypoallergenic') && (
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-3xl">🌿</span>
                        <span className="text-sm text-gray-600">Hypoallergenic</span>
                      </div>
                    )}
                    {breed.traits.includes('small') && (
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-3xl">🐕</span>
                        <span className="text-sm text-gray-600">Small</span>
                      </div>
                    )}
                    {breed.traits.includes('smart') && (
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-3xl">🧠</span>
                        <span className="text-sm text-gray-600">Smart</span>
                      </div>
                    )}
                    {breed.traits.includes('calm') && (
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-3xl">😌</span>
                        <span className="text-sm text-gray-600">Calm</span>
                      </div>
                    )}
                    {breed.traits.includes('energetic') && (
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-3xl">⚡</span>
                        <span className="text-sm text-gray-600">Energetic</span>
                      </div>
                    )}
                  </div>
                  
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
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <div className="flex items-center space-x-2 mb-1">
                      <Heart className="h-4 w-4 text-[#E97451]" />
                      <span className="text-sm text-gray-600">Healthcare</span>
                    </div>
                    <p className="font-semibold text-gray-800 text-xs">{breed.health.vetCheckups}</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <div className="flex items-center space-x-2 mb-1">
                      <Award className="h-4 w-4 text-[#E97451]" />
                      <span className="text-sm text-gray-600">Care Needs</span>
                    </div>
                    <p className="font-semibold text-gray-800 text-xs">{breed.care.grooming.split(',')[0]}</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="space-y-3 pt-4">
                  <button 
                    onClick={() => setShowQuoteForm(true)}
                    className="bg-[#E97451] hover:bg-[#E97451]/90 text-white px-6 py-3 rounded-full font-semibold transform hover:scale-105 transition-all w-full">
                    Request Quote
                  </button>
                  <p className="text-sm text-gray-600 text-center">Health guarantee & lifetime support included</p>
                </div>
              </div>
            </div>

            {/* Mobile Traits and CTA */}
            <div className="lg:hidden space-y-4 px-2">
              {/* CTA */}
              <div className="space-y-3 pt-2">
                <button 
                  onClick={() => setShowQuoteForm(true)}
                  className="bg-[#E97451] hover:bg-[#E97451]/90 text-white px-6 py-3 rounded-full font-semibold transform hover:scale-105 transition-all w-full">
                  Request Quote
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
      <section className="py-8 sm:py-12 bg-white relative overflow-hidden">
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

      {/* CTA Image Section - Replacing Why Choose Us */}
      <section id="cta-video" className="py-4 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-gray-900 text-section mb-4 tracking-wide drop-shadow-lg">
            Why Choose <span className="text-orange-600">Us</span>?
          </h2>
        </div>
        <img
          src="/CTAimg.jpeg"
          alt="Why Choose Us"
          className="w-full h-auto"
        />
      </section>

{/* Find Friend CTA Section */}
<section className="py-0 bg-white relative overflow-hidden">
  <div className="w-full">
    {/* Title above image */}
    <div className="text-center py-6 sm:py-8 md:py-12">
      <h2 className="font-display text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 drop-shadow-lg">
        Get in Touch
      </h2>
    </div>
    
    {/* Image as a clickable CTA linking to contact page */}
    <div className="relative w-full">
      <Link to="/contact" className="block w-full">
        <div style={{ width: '100%', display: 'block' }} className="relative">
          <img
            src="/FindFriendCTA.png"
            alt="Find your perfect friend"
            className="w-full h-auto object-cover"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
          <span className="absolute inset-0 flex items-start justify-center pt-4 sm:pt-6 md:pt-8 pointer-events-none">
            <span className="font-display text-white text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight drop-shadow-lg">
              Contact Us to Get your Best Friend
            </span>
          </span>
        </div>
      </Link>
    </div>
  </div>
</section>

      {/* Quote Request Modal */}
      {showQuoteForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-display text-2xl font-bold text-gray-800">
                Request Quote
              </h2>
              <button
                onClick={() => setShowQuoteForm(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <p className="text-gray-600 mb-6">
              Interested in {breed?.name}? Fill out form below and we'll get back to you with a quote.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#E97451] transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#E97451] transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#E97451] transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  rows={4}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#E97451] transition-colors resize-none"
                  placeholder="Tell us more about what you're looking for..."
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-[#E97451] hover:bg-[#E97451]/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Submit Request
                </button>
                <button
                  type="button"
                  onClick={() => setShowQuoteForm(false)}
                  className="flex-1 border-2 border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default BreedDetail;