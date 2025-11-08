import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Shield, Award, Users, Calendar, Weight, Activity, CheckCircle, Star, MapPin, Phone, Mail } from 'lucide-react';
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
    weight: '99-110 lbs',
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
    weight: '4-7 lbs',
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
      '/TP/TPmom2.JPEG',
      '/TP/28463.JPEG',
      '/TP/pexels-jacob-sierra-419902407-16603124 (1).jpg',
      '/TP/pexels-katia-oleksa-661981532-29595140 (1).jpg',
      '/TP/pexels-valeriya-14095698 (1).jpg',
      '/TP/pexels-valeriya-14095707 (1).jpg'
    ],
    puppyToAdult: {
      puppy: '/TP/TPpup.JPEG',
      adult: '/TP/TPmom2.JPEG'
    },
    description: 'The Toy Poodle is an exceptionally intelligent and elegant breed that combines beauty with brains. These versatile dogs are perfect companions for those who appreciate an active, trainable, and hypoallergenic pet.',
    temperament: ['Intelligent', 'Active', 'Trainable', 'Alert', 'Friendly'],
    traits: ['hypoallergenic', 'smart', 'active', 'low-shedding'],
    size: 'Toy',
    weight: '4-6 lbs',
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
      '/YT/YTBed.jpg',
      '/YT/YTCute.jpg',
      '/YT/YTfriend.jpg',
      '/YT/YTHome.jpg',
      '/YT/YTpupcar.jpg',
      '/YT/YTPupface.jpg',
      '/YT/YTAesthetic.jpg',
      '/YT/YTaesthetic2.jpg'
    ],
    puppyToAdult: {
      puppy: '/YT/YTPupface.jpg',
      adult: '/YT/YTAesthetic.jpg'
    },
    description: 'The Yorkshire Terrier is a feisty and confident toy breed with a big personality in a small package. These brave little dogs are loyal companions with beautiful silky coats and spirited attitudes.',
    temperament: ['Bold', 'Confident', 'Courageous', 'Energetic', 'Affectionate'],
    traits: ['small', 'brave', 'energetic', 'low-shedding'],
    size: 'Toy',
    weight: '4-7 lbs',
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
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-soft-brown mb-4">Breed Not Found</h1>
          <Link to="/" className="text-warm-peach hover:text-warm-peach/80 underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-soft-brown hover:text-warm-peach transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-display text-xl">Back to Home</span>
            </Link>
            
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="p-2 rounded-full hover:bg-warm-peach/10 transition-colors"
            >
              <Heart className={`h-6 w-6 ${isFavorite ? 'text-warm-peach fill-current' : 'text-gray-400'}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with Image Gallery */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div 
            className="grid lg:grid-cols-2 gap-8 items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Image */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-100">
                <div className="aspect-[7/9] w-full">
                  <img
                    src={breed.gallery[selectedImage]}
                    alt={breed.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {breed.gallery.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-warm-peach scale-105' : 'border-gray-200'
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

            {/* Breed Information */}
            <div className="space-y-6">
              <div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-soft-brown mb-2">
                  {breed.name}
                </h1>
                <div className="flex items-center space-x-4 text-gray-600">
                  <span className="flex items-center">
                    <Star className="h-4 w-4 text-warm-peach fill-current" />
                    <span className="ml-1">4.9 (127 reviews)</span>
                  </span>
                  <span>•</span>
                  <span>{breed.size} Breed</span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">{breed.description}</p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-warm-peach/10 p-4 rounded-xl">
                  <div className="flex items-center space-x-2 mb-1">
                    <Weight className="h-4 w-4 text-warm-peach" />
                    <span className="text-sm text-gray-600">Weight</span>
                  </div>
                  <p className="font-semibold text-soft-brown">{breed.weight}</p>
                </div>
                <div className="bg-warm-peach/10 p-4 rounded-xl">
                  <div className="flex items-center space-x-2 mb-1">
                    <Calendar className="h-4 w-4 text-warm-peach" />
                    <span className="text-sm text-gray-600">Lifespan</span>
                  </div>
                  <p className="font-semibold text-soft-brown">{breed.lifespan}</p>
                </div>
              </div>

              {/* Traits */}
              <div>
                <h3 className="font-semibold text-soft-brown mb-3">Key Traits</h3>
                <div className="flex flex-wrap gap-2">
                  {breed.traits.map((trait) => (
                    <span
                      key={trait}
                      className="px-3 py-1 bg-warm-peach/20 text-warm-peach rounded-full text-sm"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA - Removed price and availability */}
              <div className="space-y-3 pt-4">
                <button className="bg-warm-peach hover:bg-warm-peach/90 text-white px-6 py-3 rounded-full font-semibold transform hover:scale-105 transition-all w-full">
                  Learn More About Adoption
                </button>
                <p className="text-sm text-gray-600 text-center">Health guarantee & lifetime support included</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Puppy to Adult Comparison Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-soft-brown via-warm-peach to-soft-brown bg-clip-text text-transparent mb-10">
            From Puppy to Adult
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Puppy */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-orange-50 to-pink-50 p-6 rounded-2xl">
                <h3 className="font-display text-2xl font-bold text-soft-brown mb-4">Puppy Stage</h3>
                <div className="relative overflow-hidden rounded-xl shadow-lg mb-4 bg-gray-100">
                  <div className="aspect-[7/9] w-full">
                    <img
                      src={breed.puppyToAdult.puppy}
                      alt={`${breed.name} puppy`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                <p className="text-gray-700">
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
              <div className="bg-gradient-to-br from-warm-peach/10 to-cream p-6 rounded-2xl">
                <h3 className="font-display text-2xl font-bold text-soft-brown mb-4">Adult Stage</h3>
                <div className="relative overflow-hidden rounded-xl shadow-lg mb-4 bg-gray-100">
                  <div className="aspect-[7/9] w-full">
                    <img
                      src={breed.puppyToAdult.adult}
                      alt={`${breed.name} adult`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                <p className="text-gray-700">
                  Adult {breed.name.toLowerCase()}s showcase their full beauty and personality. 
                  They have established their temperament and are well-adjusted to their environment with proper training.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Breed Gallery Section */}
      <section className="py-12 bg-gradient-to-br from-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-soft-brown via-warm-peach to-soft-brown bg-clip-text text-transparent mb-10">
            {breed.name} Gallery
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {breed.gallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-xl shadow-md group bg-gray-100"
              >
                <div className="aspect-[7/9] w-full">
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

      {/* Detailed Information Tabs */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Temperament */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-warm-peach/10 to-cream p-6 rounded-2xl"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="h-6 w-6 text-warm-peach" />
                <h3 className="font-display text-xl font-bold text-soft-brown">Temperament</h3>
              </div>
              <div className="space-y-2">
                {breed.temperament.map((temp) => (
                  <div key={temp} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-warm-peach" />
                    <span className="text-gray-700">{temp}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Health Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-warm-peach/10 to-cream p-6 rounded-2xl"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-6 w-6 text-warm-peach" />
                <h3 className="font-display text-xl font-bold text-soft-brown">Health Care</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Vet Checkups</p>
                  <p className="font-medium text-gray-800">{breed.health.vetCheckups}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Vaccinations</p>
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
              className="bg-gradient-to-br from-warm-peach/10 to-cream p-6 rounded-2xl"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Activity className="h-6 w-6 text-warm-peach" />
                <h3 className="font-display text-xl font-bold text-soft-brown">Care Needs</h3>
              </div>
              <div className="space-y-2 text-sm">
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

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-soft-brown mb-4">
              Why Choose <span className="text-warm-peach">FurryFriend</span>?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to connecting you with healthy, happy puppies from trusted breeders
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Health Guaranteed', desc: 'Comprehensive health checks and certifications' },
              { icon: Award, title: 'Certified Breeders', desc: 'Only licensed, reputable breeding partners' },
              { icon: Users, title: 'Lifetime Support', desc: 'Ongoing guidance throughout your journey' },
              { icon: Heart, title: 'Happy Puppies', desc: 'Raised with love and proper socialization' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-warm-peach p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white mx-auto" />
                </div>
                <h3 className="font-semibold text-soft-brown mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-warm-peach to-orange-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Meet Your New Best Friend?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Contact us today to schedule a visit or learn more about {breed.name}
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
              <Phone className="h-6 w-6 text-white mx-auto mb-2" />
              <p className="text-white font-semibold">Call Us</p>
              <p className="text-white/90 text-sm">(555) 123-4567</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
              <Mail className="h-6 w-6 text-white mx-auto mb-2" />
              <p className="text-white font-semibold">Email</p>
              <p className="text-white/90 text-sm">hello@furryfriend.com</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
              <MapPin className="h-6 w-6 text-white mx-auto mb-2" />
              <p className="text-white font-semibold">Visit</p>
              <p className="text-white/90 text-sm">123 Pet Street, City</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-warm-peach px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Schedule Visit
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-warm-peach transition-all">
              Ask Questions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};