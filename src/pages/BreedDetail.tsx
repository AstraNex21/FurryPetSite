import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Heart, Calendar, Weight, X, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import InstagramGrid from '../components/InstagramGrid';
// Remove the Header import since it should be rendered by the layout component
// import { Header } from '../components/Header'; 

// Import Playpen Sans font
import './PlaypenSans.css';

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
      puppy: '/FM/26505.JPEG',
      adult: '/FM/FMtall.JPEG'
    },
    description:
      'The French Mastiff, also known as Dogue de Bordeaux, is a majestic and powerful breed known for their loyal and protective nature. These gentle giants form strong bonds with their families and are excellent companions.',
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
  maltese: {
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
    description:
      'The Maltese is a charming and elegant toy breed known for their silky white coat and playful personality. These affectionate companions are perfect for families and individuals seeking a loving, hypoallergenic pet.',
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
    description:
      'The Toy Poodle is an exceptionally intelligent and elegant breed that combines beauty with brains. These versatile dogs are perfect companions for those who appreciate an active, trainable, and hypoallergenic pet.',
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
    description:
      'The Yorkshire Terrier is a feisty and confident toy breed with a big personality in a small package. These brave little dogs are loyal companions with beautiful silky coats and spirited attitudes.',
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

export const BreedDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [breed, setBreed] = useState<BreedDetails | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (slug && breedDatabase[slug]) {
      setBreed(breedDatabase[slug]);
    }
    window.scrollTo(0, 0);
  }, [slug]);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote request submitted:', { breed: breed?.name, ...formData });
    setFormData({ name: '', phone: '', message: '' });
    setShowQuoteForm(false);
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  // Get the puppy to adult image based on breed
  const getPupAdultImage = () => {
    if (breed?.slug === 'french-mastiff') return '/FMPupAdult.png';
    if (breed?.slug === 'maltese') return '/maltpupadult.png';
    if (breed?.slug === 'toy-poodle') return '/TPpupAdult.png';
    if (breed?.slug === 'yorkshire-terrier') return '/YTPupadult.png';
    return '';
  };

  if (!breed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FFB5A7] to-[#F4C2C2] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Breed Not Found</h1>
          <Link
            to="/"
            className="text-[#E97451] hover:text-[#E97451]/80 underline"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  // Function to get the 5 most important traits for each breed
  const getTopTraits = () => {
    if (breed.slug === 'maltese') {
      return [
        { icon: '✨', label: 'Charming' },
        { icon: '🌟', label: 'Adorable' },
        { icon: '🎭', label: 'Elegant' },
        { icon: '🎀', label: 'Gentle' },
        { icon: '🏠', label: 'Indoor' }
      ];
    } else if (breed.slug === 'toy-poodle') {
      return [
        { icon: '🧠', label: 'Genius' },
        { icon: '🎓', label: 'Trainable' },
        { icon: '🎨', label: 'Stylish' },
        { icon: '🏃', label: 'Active' },
        { icon: '🤸', label: 'Agile' }
      ];
    } else if (breed.slug === 'yorkshire-terrier') {
      return [
        { icon: '💫', label: 'Sparkling' },
        { icon: '🎯', label: 'Bold' },
        { icon: '🦸', label: 'Brave' },
        { icon: '👔', label: 'Classy' },
        { icon: '🌟', label: 'Feisty' }
      ];
    } else if (breed.slug === 'french-mastiff') {
      return [
        { icon: '🏰', label: 'Guardian' },
        { icon: '💪', label: 'Mighty' },
        { icon: '🛡️', label: 'Protector' },
        { icon: '👑', label: 'Majestic' },
        { icon: '❤️', label: 'Devoted' }
      ];
    }
    // Default traits for any other breed
    return [
      { icon: '❤️', label: 'Loving' },
      { icon: '🏠', label: 'Family' },
      { icon: '🎾', label: 'Playful' },
      { icon: '🍽️', label: 'Foodie' },
      { icon: '🐾', label: 'Friendly' }
    ];
  };

  // Get the top 5 traits for the current breed
  const topTraits = getTopTraits();

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Playpen Sans, cursive' }}>
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
                <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Playpen Sans, cursive' }}>
                  {breed.name}
                </h1>

                {/* Key Traits Icons and Emojis - Mobile (Limited to 5) */}
                <div className="flex items-center justify-center flex-wrap gap-3 mb-4 px-2">
                  {topTraits.map((trait, index) => (
                    <div key={index} className="flex flex-col items-center gap-1">
                      <span className="text-2xl">{trait.icon}</span>
                      <span className="text-xs text-gray-600">{trait.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center text-gray-600 text-sm">
                  <span>{breed.size} Breed</span>
                </div>
              </div>

              {/* Mobile Quick Stats - Updated to only show 4 traits */}
              <div className="grid grid-cols-2 gap-3 px-2">
                <div className="bg-white p-3 rounded-xl shadow-md liquid-border">
                  <div className="flex items-center space-x-2 mb-1">
                    <Weight className="h-4 w-4 text-[#E97451]" />
                    <span className="text-xs text-gray-600">Weight</span>
                  </div>
                  <p className="font-semibold text-gray-800 text-sm">
                    {breed.weight}
                  </p>
                </div>
                <div className="bg-white p-3 rounded-xl shadow-md liquid-border">
                  <div className="flex items-center space-x-2 mb-1">
                    <Calendar className="h-4 w-4 text-[#E97451]" />
                    <span className="text-xs text-gray-600">Lifespan</span>
                  </div>
                  <p className="font-semibold text-gray-800 text-sm">
                    {breed.lifespan}
                  </p>
                </div>
                <div className="bg-white p-3 rounded-xl shadow-md liquid-border">
                  <div className="flex items-center space-x-2 mb-1">
                    <Heart className="h-4 w-4 text-[#E97451]" />
                    <span className="text-xs text-gray-600">Grooming & Healthcare</span>
                  </div>
                  <p className="font-semibold text-gray-800 text-sm">
                    {breed.care.grooming.split(',')[0]}
                  </p>
                </div>
                <div className="bg-white p-3 rounded-xl shadow-md liquid-border">
                  <div className="flex items-center space-x-2 mb-1">
                    <Activity className="h-4 w-4 text-[#E97451]" />
                    <span className="text-xs text-gray-600">Temperament</span>
                  </div>
                  <p className="font-semibold text-gray-800 text-sm">
                    {breed.temperament[0]}
                  </p>
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
                        selectedImage === index
                          ? 'border-[#E97451] scale-105'
                          : 'border-gray-200'
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
                  <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-3" style={{ fontFamily: 'Playpen Sans, cursive' }}>
                    {breed.name}
                  </h1>

                  {/* Key Traits Icons and Emojis - Desktop (Limited to 5) */}
                  <div className="flex items-center flex-wrap gap-4 mb-4">
                    {topTraits.map((trait, index) => (
                      <div key={index} className="flex flex-col items-center gap-1">
                        <span className="text-3xl">{trait.icon}</span>
                        <span className="text-sm text-gray-600">{trait.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center text-gray-600 text-base">
                    <span>{breed.size} Breed</span>
                  </div>
                </div>

                {/* Desktop Quick Stats - Updated to only show 4 traits */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl shadow-md liquid-border">
                    <div className="flex items-center space-x-2 mb-1">
                      <Weight className="h-4 w-4 text-[#E97451]" />
                      <span className="text-sm text-gray-600">Weight</span>
                    </div>
                    <p className="font-semibold text-gray-800">{breed.weight}</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-md liquid-border">
                    <div className="flex items-center space-x-2 mb-1">
                      <Calendar className="h-4 w-4 text-[#E97451]" />
                      <span className="text-sm text-gray-600">Lifespan</span>
                    </div>
                    <p className="font-semibold text-gray-800">
                      {breed.lifespan}
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-md liquid-border">
                    <div className="flex items-center space-x-2 mb-1">
                      <Heart className="h-4 w-4 text-[#E97451]" />
                      <span className="text-sm text-gray-600">Grooming & Healthcare</span>
                    </div>
                    <p className="font-semibold text-gray-800 text-sm">
                      {breed.care.grooming.split(',')[0]}
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-md liquid-border">
                    <div className="flex items-center space-x-2 mb-1">
                      <Activity className="h-4 w-4 text-[#E97451]" />
                      <span className="text-sm text-gray-600">Temperament</span>
                    </div>
                    <p className="font-semibold text-gray-800 text-sm">
                      {breed.temperament[0]}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="space-y-3 pt-4">
                  <button
                    onClick={() => setShowQuoteForm(true)}
                    className="bg-[#E97451] hover:bg-[#E97451]/90 text-white px-6 py-3 rounded-full font-semibold transform hover:scale-105 transition-all w-full"
                    style={{ fontFamily: 'Playpen Sans, cursive' }}
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Traits and CTA */}
            <div className="lg:hidden space-y-4 px-2">
              {/* CTA */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={() => setShowQuoteForm(true)}
                  className="bg-[#E97451] hover:bg-[#E97451]/90 text-white px-6 py-3 rounded-full font-semibold transform hover:scale-105 transition-all w-full"
                  style={{ fontFamily: 'Playpen Sans, cursive' }}
                >
                  Request Quote
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Puppy to Adult Comparison Section - Updated to show single image at full size */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-5xl"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl bg-gray-100">
                <img
                  src={getPupAdultImage()}
                  alt={`${breed.name} puppy to adult`}
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Breed Gallery Section - Mobile Optimized */}
      <section className="py-8 sm:py-12 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-10 left-10 text-4xl sm:text-6xl animate-bounce"
            style={{ animationDelay: '0s', animationDuration: '3s' }}
          >
            🐕
          </div>
          <div
            className="absolute top-40 right-20 text-3xl sm:text-4xl animate-bounce"
            style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}
          >
            🐾
          </div>
          <div
            className="absolute bottom-20 left-1/3 text-4xl sm:text-5xl animate-bounce"
            style={{ animationDelay: '1.5s', animationDuration: '2.8s' }}
          >
            🐶
          </div>
          <div
            className="absolute bottom-40 right-10 text-2xl sm:text-3xl animate-pulse"
            style={{ animationDuration: '2s' }}
          >
            ❤️
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-10" style={{ fontFamily: 'Playpen Sans, cursive' }}>
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

      {/* Why Choose Furry Friend Section */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-10" style={{ fontFamily: 'Playpen Sans, cursive' }}>
            Why Choose <span className="text-orange-600">FurryFriend</span>?
          </h2>
          <div className="flex justify-center">
            <img src="/afe.png" alt="Why Choose FurryFriend" className="max-w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Instagram Grid Section */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-10" style={{ fontFamily: 'Playpen Sans, cursive' }}>
            Follow Our <span className="text-orange-600">Journey</span>
          </h2>
          <InstagramGrid />
        </div>
      </section>

      {/* Contact Us Section - Added below Instagram Grid */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <img 
                src="/COntactUs.png" 
                alt="Contact Us" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <span className="text-white font-bold text-lg">Get in Touch</span>
              </div>
            </button>
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
              <h2 className="font-display text-2xl font-bold text-gray-800" style={{ fontFamily: 'Playpen Sans, cursive' }}>
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
              Interested in {breed?.name}? Fill out the form below and we'll get back to you with a quote.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Playpen Sans, cursive' }}>
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
                  style={{ fontFamily: 'Playpen Sans, cursive' }}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Playpen Sans, cursive' }}>
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
                  style={{ fontFamily: 'Playpen Sans, cursive' }}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Playpen Sans, cursive' }}>
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  rows={4}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#E97451] transition-colors resize-none"
                  placeholder="Tell us more about what you're looking for..."
                  style={{ fontFamily: 'Playpen Sans, cursive' }}
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-[#E97451] hover:bg-[#E97451]/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                  style={{ fontFamily: 'Playpen Sans, cursive' }}
                >
                  Submit Request
                </button>
                <button
                  type="button"
                  onClick={() => setShowQuoteForm(false)}
                  className="flex-1 border-2 border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold py-2 px-4 rounded-lg transition-colors"
                  style={{ fontFamily: 'Playpen Sans, cursive' }}
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