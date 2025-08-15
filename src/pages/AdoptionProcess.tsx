import React from 'react';
import { CheckCircle, Heart, Home, Shield, Users, Star, Clock, Award } from 'lucide-react';

const steps = [
  {
    icon: Heart,
    title: 'Find Your Match',
    description: 'Browse our adorable companions and find the perfect fit for your family lifestyle.',
    details: ['Explore breed characteristics', 'View detailed profiles', 'Ask questions about temperament']
  },
  {
    icon: Users,
    title: 'Initial Consultation',
    description: 'We\'ll have a friendly chat about your preferences, living situation, and expectations.',
    details: ['Phone or in-person meeting', 'Discuss your ideal companion', 'Get expert recommendations']
  },
  {
    icon: CheckCircle,
    title: 'Application & Approval',
    description: 'Complete our simple application process designed to ensure the best match.',
    details: ['Quick online application', 'Reference verification', 'Home environment assessment']
  },
  {
    icon: Star,
    title: 'Meet & Greet',
    description: 'Spend quality time with your potential new family member in a comfortable setting.',
    details: ['Scheduled visit to our facility', 'Bonding time with your chosen companion', 'Ask any final questions']
  },
  {
    icon: Shield,
    title: 'Health Documentation',
    description: 'Review comprehensive health records and receive all necessary documentation.',
    details: ['Veterinary health certificates', 'Vaccination records', 'Health guarantee paperwork']
  },
  {
    icon: Home,
    title: 'Welcome Home',
    description: 'Take your new best friend home with complete support and guidance.',
    details: ['Starter care package included', 'Training resources provided', 'Ongoing support available']
  }
];

export const AdoptionProcess: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-warm-peach to-warm-peach/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 tracking-wide">
            Adoption <span className="text-cream">Process</span>
          </h1>
          <p className="font-sans text-xl md:text-2xl max-w-3xl mx-auto opacity-90 font-medium tracking-wide">
            Six simple steps to welcome your new furry family member home
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gradient-to-br from-cream via-orange-50 to-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-16 text-5xl">🐕‍🦺</div>
          <div className="absolute top-60 right-24 text-4xl">🐾</div>
          <div className="absolute bottom-40 left-1/4 text-6xl">🐶</div>
          <div className="absolute bottom-20 right-16 text-4xl">❤️</div>
          <div className="absolute top-1/2 right-1/3 text-3xl">🏠</div>
          <div className="absolute top-80 left-1/3 text-3xl">🦴</div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold bg-gradient-to-r from-soft-brown via-warm-peach to-soft-brown bg-clip-text text-transparent mb-6 tracking-wide">
              Your Journey to <span className="bg-gradient-to-r from-warm-peach to-orange-400 bg-clip-text text-transparent">Furry Friendship</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've designed our process to be thorough yet simple, ensuring the perfect match for both you and your new companion.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="bg-warm-peach text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">
                      {index + 1}
                    </div>
                    <div className="bg-warm-peach/20 p-3 rounded-full mt-4">
                      <step.icon className="h-8 w-8 text-warm-peach" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-soft-brown mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center space-x-2 text-gray-600">
                          <CheckCircle className="h-5 w-5 text-warm-peach flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-20 bg-gradient-to-br from-white via-cream to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-16 left-20 text-4xl">🐕</div>
          <div className="absolute top-40 right-28 text-3xl">🐾</div>
          <div className="absolute bottom-40 left-1/4 text-5xl">🐶</div>
          <div className="absolute bottom-24 right-20 text-4xl">❤️</div>
          <div className="absolute top-1/2 left-1/2 text-3xl">🏠</div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-soft-brown via-warm-peach to-soft-brown bg-clip-text text-transparent mb-16">
            <span className="bg-gradient-to-r from-warm-peach to-orange-400 bg-clip-text text-transparent">Timeline</span> & What to Expect
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-warm-peach/20 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Clock className="h-12 w-12 text-warm-peach" />
              </div>
              <h3 className="text-2xl font-bold text-soft-brown mb-4">24-48 Hours</h3>
              <p className="text-gray-600 leading-relaxed">
                Initial response to your inquiry and consultation scheduling. We believe in quick, personal responses.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-warm-peach/20 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-12 w-12 text-warm-peach" />
              </div>
              <h3 className="text-2xl font-bold text-soft-brown mb-4">3-5 Days</h3>
              <p className="text-gray-600 leading-relaxed">
                Application review and approval process. We ensure every match is perfect for both family and pet.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-warm-peach/20 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Home className="h-12 w-12 text-warm-peach" />
              </div>
              <h3 className="text-2xl font-bold text-soft-brown mb-4">Same Week</h3>
              <p className="text-gray-600 leading-relaxed">
                Meet your new family member and take them home! Most families complete the process within a week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gradient-to-br from-cream via-orange-50 to-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-16 text-4xl">🐕</div>
          <div className="absolute top-60 right-24 text-3xl">🐾</div>
          <div className="absolute bottom-40 left-1/4 text-5xl">🐶</div>
          <div className="absolute bottom-20 right-16 text-4xl">❤️</div>
          <div className="absolute top-1/2 right-1/3 text-3xl">🏠</div>
          <div className="absolute bottom-60 left-1/3 text-3xl">🦴</div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-soft-brown via-warm-peach to-soft-brown bg-clip-text text-transparent mb-16">
            What's <span className="bg-gradient-to-r from-warm-peach to-orange-400 bg-clip-text text-transparent">Included</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <Shield className="h-12 w-12 text-warm-peach mx-auto mb-4" />
              <h3 className="font-bold text-soft-brown mb-2">Health Guarantee</h3>
              <p className="text-gray-600 text-sm">Complete medical records and health warranty for peace of mind.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <Award className="h-12 w-12 text-warm-peach mx-auto mb-4" />
              <h3 className="font-bold text-soft-brown mb-2">Starter Package</h3>
              <p className="text-gray-600 text-sm">Food, toys, bedding, and essentials to get you started right.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <Users className="h-12 w-12 text-warm-peach mx-auto mb-4" />
              <h3 className="font-bold text-soft-brown mb-2">Training Support</h3>
              <p className="text-gray-600 text-sm">Resources and guidance for successful integration into your home.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <Heart className="h-12 w-12 text-warm-peach mx-auto mb-4" />
              <h3 className="font-bold text-soft-brown mb-2">Lifetime Care</h3>
              <p className="text-gray-600 text-sm">Ongoing support and advice throughout your pet's entire life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-white via-cream to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-16 left-20 text-4xl">🐕</div>
          <div className="absolute top-40 right-28 text-3xl">🐾</div>
          <div className="absolute bottom-40 left-1/4 text-5xl">🐶</div>
          <div className="absolute bottom-24 right-20 text-4xl">❤️</div>
          <div className="absolute top-1/2 left-1/2 text-3xl">🏠</div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-soft-brown via-warm-peach to-soft-brown bg-clip-text text-transparent mb-16">
            Frequently Asked <span className="bg-gradient-to-r from-warm-peach to-orange-400 bg-clip-text text-transparent">Questions</span>
          </h2>
          
          <div className="space-y-8">
            <div className="bg-cream p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-soft-brown mb-3">
                What if my new pet doesn't adjust well to our home?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We provide comprehensive support during the adjustment period. If serious compatibility issues arise within the first 30 days, we'll work with you to find a solution, including the possibility of finding a different match.
              </p>
            </div>
            
            <div className="bg-cream p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-soft-brown mb-3">
                Are your pets up to date on vaccinations?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Absolutely! All our companions come fully vaccinated, dewormed, and with complete medical records. We also provide a health guarantee backed by our veterinary partners.
              </p>
            </div>
            
            <div className="bg-cream p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-soft-brown mb-3">
                Do you offer financing options?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yes, we understand that welcoming a new family member is a significant decision. We offer flexible payment plans to help make your dream of pet ownership a reality. Contact us to discuss options.
              </p>
            </div>
            
            <div className="bg-cream p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-soft-brown mb-3">
                Can I visit before committing to adopt?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Of course! We encourage visits and believe it's essential for both you and your potential new companion to meet first. Schedule a visit through our contact form or give us a call.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-warm-peach to-warm-peach/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/dog24.jpg" alt="" className="w-full h-full object-cover blur-sm" />
        </div>
        <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-4xl font-bold mb-6 tracking-wide">
            Ready to Start Your Journey?
          </h2>
            <p className="font-sans text-xl mb-8 opacity-90 font-medium tracking-wide">
            Take the first step towards welcoming your new best friend home today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/'}
                className="bg-white text-warm-peach px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Browse Our Friends
            </button>
            <button 
              onClick={() => window.location.href = '/contact'}
                className="border-2 border-white text-white hover:bg-white hover:text-warm-peach px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Start Application
            </button>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};