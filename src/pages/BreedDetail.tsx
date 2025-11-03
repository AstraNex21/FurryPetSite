import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Shield, Award, Home } from 'lucide-react';
import { GrowthVisualization } from '../components/GrowthVisualization';

const breedData = {
  'french-mastiff': {
    name: 'French Mastiff',
    growthStages: [
      {
        stage: 'Puppy',
        image: '/dog25.jpg',
        age: '8-16 weeks',
        description: 'Adorable and playful, French Mastiff puppies are gentle giants in the making. At this stage, they are curious, loving, and beginning to show their protective instincts.'
      },
      {
        stage: 'Young Adult',
        image: '/dog26.jpg',
        age: '6-18 months',
        description: 'Growing rapidly, young French Mastiffs develop their distinctive features and calm temperament. They are learning boundaries and becoming more confident.'
      },
      {
        stage: 'Adult',
        image: '/dog27.jpg',
        age: '2+ years',
        description: 'Fully mature French Mastiffs are majestic, loyal companions. Their gentle nature with family and protective instincts make them excellent guardians and loving pets.'
      }
    ],
    images: [
      '/dog1.jpg',
      '/dog2.jpg',
      '/dog3.jpg'
    ],
    temperament: ['Loyal', 'Gentle', 'Protective', 'Patient'],
    history: 'The French Mastiff, also known as Dogue de Bordeaux, is an ancient breed with roots dating back to ancient Rome. These noble dogs were originally bred for guarding estates and hunting large game.',
    characteristics: {
      size: 'Large (99-150 lbs)',
      lifespan: '8-10 years',
      grooming: 'Low maintenance',
      exercise: 'Moderate',
      training: 'Easy with patience'
    },
    lifestyle: {
      families: 'Excellent with children',
      apartments: 'Better suited for houses',
      activity: 'Moderate exercise needs',
      climate: 'Prefers cooler weather'
    },
    care: [
      'Regular brushing 2-3 times per week',
      'Daily walks and moderate exercise',
      'Monitor for breathing issues in hot weather',
      'Regular dental care and nail trimming'
    ]
  },
  'maltese': {
    name: 'Maltese',
    growthStages: [
      {
        stage: 'Puppy',
        image: '/dog28.jpg',
        age: '8-12 weeks',
        description: 'Tiny and fluffy, Maltese puppies are bundles of joy with silky white coats. They are playful, affectionate, and already showing their charming personalities.'
      },
      {
        stage: 'Young Adult',
        image: '/dog29.jpg',
        age: '6-12 months',
        description: 'Developing their elegant coat and refined features, young Maltese are active and intelligent. They are learning social skills and house training.'
      },
      {
        stage: 'Adult',
        image: '/dog30.jpg',
        age: '1+ years',
        description: 'Adult Maltese are elegant, confident companions with flowing white coats. They are gentle, alert, and make perfect lap dogs with big personalities.'
      }
    ],
    images: [
      '/dog4.jpg',
      '/dog5.jpg',
      '/dog6.jpg'
    ],
    temperament: ['Playful', 'Gentle', 'Affectionate', 'Alert'],
    history: 'The Maltese is an ancient toy breed that has been a companion dog for over 2,000 years. Originally from the Mediterranean island of Malta, these elegant dogs were prized by nobility.',
    characteristics: {
      size: 'Toy (4-7 lbs)',
      lifespan: '12-15 years',
      grooming: 'High maintenance',
      exercise: 'Low to moderate',
      training: 'Moderately easy'
    },
    lifestyle: {
      families: 'Great with gentle children',
      apartments: 'Perfect apartment dog',
      activity: 'Light exercise needs',
      climate: 'Adaptable to most climates'
    },
    care: [
      'Daily brushing to prevent matting',
      'Regular professional grooming',
      'Gentle exercise like short walks',
      'Protect from larger dogs during play'
    ]
  },
  'toy-poodle': {
    name: 'Toy Poodle',
    growthStages: [
      {
        stage: 'Puppy',
        image: '/dog31.jpg',
        age: '8-12 weeks',
        description: 'Intelligent and curly-coated, Toy Poodle puppies are quick learners with boundless energy. They are already showing their smart, trainable nature.'
      },
      {
        stage: 'Young Adult',
        image: '/dog32.jpg',
        age: '6-12 months',
        description: 'Growing into their distinctive poodle features, young Toy Poodles are active and eager to please. Their hypoallergenic coat is developing its adult texture.'
      },
      {
        stage: 'Adult',
        image: '/dog33.jpg',
        age: '1+ years',
        description: 'Adult Toy Poodles are intelligent, athletic, and elegant. Despite their small size, they have the heart and intelligence of their larger poodle cousins.'
      }
    ],
    images: [
      '/dog7.jpg',
      '/dog8.jpg',
      '/dog9.jpg'
    ],
    temperament: ['Intelligent', 'Active', 'Trainable', 'Friendly'],
    history: 'Toy Poodles are the smallest variety of Poodles, originally bred in France as water retrievers. Despite their small size, they retain all the intelligence and athleticism of their larger cousins.',
    characteristics: {
      size: 'Toy (4-6 lbs)',
      lifespan: '12-15 years',
      grooming: 'High maintenance',
      exercise: 'Moderate',
      training: 'Very easy'
    },
    lifestyle: {
      families: 'Excellent family dogs',
      apartments: 'Great for apartments',
      activity: 'Daily exercise needed',
      climate: 'Adaptable but sensitive to extreme cold'
    },
    care: [
      'Professional grooming every 6-8 weeks',
      'Daily brushing and combing',
      'Regular mental stimulation and training',
      'Adequate exercise despite small size'
    ]
  },
  'yorkshire-terrier': {
    name: 'Yorkshire Terrier',
    growthStages: [
      {
        stage: 'Puppy',
        image: '/dog34.jpg',
        age: '8-12 weeks',
        description: 'Tiny but mighty, Yorkshire Terrier puppies are bold and confident from an early age. Their coat is developing the characteristic blue and tan colors.'
      },
      {
        stage: 'Young Adult',
        image: '/dog35.jpg',
        age: '6-12 months',
        description: 'Young Yorkies are developing their fearless personality and silky coat. They are energetic, curious, and showing their terrier instincts.'
      },
      {
        stage: 'Adult',
        image: '/dog36.jpg',
        age: '1+ years',
        description: 'Adult Yorkshire Terriers are confident, courageous, and elegant. Their beautiful silky coat and bold personality make them excellent companions.'
      }
    ],
    images: [
      '/dog10.jpg',
      '/dog11.jpg',
      '/dog12.jpg'
    ],
    temperament: ['Bold', 'Confident', 'Courageous', 'Energetic'],
    history: 'Yorkshire Terriers were originally bred in Yorkshire, England during the Industrial Revolution to catch rats in textile mills. Despite their small size, they have the heart of a much larger dog.',
    characteristics: {
      size: 'Toy (4-7 lbs)',
      lifespan: '13-16 years',
      grooming: 'High maintenance',
      exercise: 'Moderate',
      training: 'Can be challenging'
    },
    lifestyle: {
      families: 'Better with older children',
      apartments: 'Excellent apartment dogs',
      activity: 'Moderate exercise needs',
      climate: 'May need protection in cold weather'
    },
    care: [
      'Daily brushing of their silky coat',
      'Regular professional grooming',
      'Early socialization is important',
      'Monitor for dental issues'
    ]
  }
};

export const BreedDetail: React.FC = () => {
  const { breedName } = useParams<{ breedName: string }>();
  const breed = breedName ? breedData[breedName as keyof typeof breedData] : null;
  const [selectedImage, setSelectedImage] = React.useState(0);

  if (!breed) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-soft-brown mb-4">Breed not found</h1>
          <Link to="/" className="text-warm-peach hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-warm-peach hover:text-warm-peach/80 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to All Breeds</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {/* Growth Visualization Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GrowthVisualization 
              breedName={breed.name}
              stages={breed.growthStages}
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img
                src={breed.images[selectedImage]}
                alt={`${breed.name} - Premium dog breed with health guarantee and lifetime support`}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 filter hover:brightness-110"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {breed.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-xl overflow-hidden transform hover:scale-105 hover:rotate-1 transition-all duration-300 ${
                    selectedImage === index ? 'ring-4 ring-warm-peach' : 'ring-2 ring-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${breed.name} photo ${index + 1} - Premium dog breed for adoption`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 filter hover:brightness-110"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Breed Information */}
          <div className="space-y-8">
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold bg-gradient-to-r from-soft-brown via-warm-peach to-soft-brown bg-clip-text text-transparent mb-4 tracking-wide">
                {breed.name}
              </h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {breed.temperament.map((trait) => (
                  <span
                    key={trait}
                    className="px-4 py-2 bg-warm-peach/20 text-warm-peach rounded-full font-medium"
                  >
                    {trait}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {breed.history}
              </p>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="font-semibold text-soft-brown mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-warm-peach" />
                  Characteristics
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Size:</span>
                    <span className="font-medium text-right">{breed.characteristics.size}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Lifespan:</span>
                    <span className="font-medium text-right">{breed.characteristics.lifespan}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Grooming:</span>
                    <span className="font-medium text-right">{breed.characteristics.grooming}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Exercise:</span>
                    <span className="font-medium text-right">{breed.characteristics.exercise}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Training:</span>
                    <span className="font-medium text-right">{breed.characteristics.training}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="font-semibold text-soft-brown mb-4 flex items-center">
                  <Home className="h-5 w-5 mr-2 text-warm-peach" />
                  Lifestyle Fit
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-600">Families:</span>
                    <p className="font-medium">{breed.lifestyle.families}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Apartments:</span>
                    <p className="font-medium">{breed.lifestyle.apartments}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Activity:</span>
                    <p className="font-medium">{breed.lifestyle.activity}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Climate:</span>
                    <p className="font-medium">{breed.lifestyle.climate}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Care Guide */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-semibold text-soft-brown mb-4 flex items-center">
                <Heart className="h-5 w-5 mr-2 text-warm-peach" />
                Care Guidelines
              </h3>
              <ul className="space-y-3">
                {breed.care.map((tip, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-warm-peach text-lg">•</span>
                    <span className="text-gray-600">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="relative bg-gradient-to-r from-warm-peach to-warm-peach/80 p-8 rounded-2xl text-white text-center overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <img src="/dog22.jpg" alt="" className="w-full h-full object-cover blur-sm" />
              </div>
              <div className="relative z-10">
                <h3 className="font-display text-2xl font-bold mb-4 tracking-wide">
                Ready to Meet Your New Best Friend?
              </h3>
                <p className="font-sans mb-6 opacity-90 font-medium">
                Contact us today to learn more about our available {breed.name} companions
              </p>
                <Link
                to="/contact"
                  className="inline-block bg-white text-warm-peach px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get in Touch
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};