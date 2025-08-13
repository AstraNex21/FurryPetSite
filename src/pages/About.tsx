import React from 'react';
import { Heart, Shield, Award, Users, Star, Check } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-warm-peach to-warm-peach/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-cream">Story</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Connecting hearts, one furry friend at a time
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-white via-cream to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-16 text-5xl">🐕‍🦺</div>
          <div className="absolute top-60 right-24 text-4xl">🐾</div>
          <div className="absolute bottom-40 left-1/4 text-6xl">🐶</div>
          <div className="absolute bottom-20 right-16 text-4xl">❤️</div>
          <div className="absolute top-1/2 right-1/3 text-3xl">🏠</div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-soft-brown via-warm-peach to-soft-brown bg-clip-text text-transparent mb-6">
                Our <span className="bg-gradient-to-r from-warm-peach to-orange-400 bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At FurryFriend, we believe that every family deserves the joy, love, and companionship 
                that comes with welcoming a four-legged friend into their home. Our mission is to create 
                perfect matches between loving families and our carefully selected, health-guaranteed companions.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We're not just a petshop – we're matchmakers for life. Every dog in our care receives 
                the love, attention, and medical care they deserve while waiting for their forever family.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-warm-peach">500+</div>
                  <div className="text-gray-600">Happy Families</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-warm-peach">5</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/dog16.jpg"
                alt="Happy family with dog"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-warm-peach text-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Heart className="h-8 w-8 fill-current" />
                  <div>
                    <div className="font-bold text-lg">100%</div>
                    <div className="text-sm opacity-90">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-cream via-orange-50 to-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-16 left-20 text-4xl">🐕</div>
          <div className="absolute top-40 right-28 text-3xl">🐾</div>
          <div className="absolute bottom-40 left-1/4 text-5xl">🐶</div>
          <div className="absolute bottom-24 right-20 text-4xl">❤️</div>
          <div className="absolute top-1/2 left-1/2 text-3xl">🏠</div>
          <div className="absolute top-80 right-1/4 text-3xl">🦴</div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-soft-brown via-warm-peach to-soft-brown bg-clip-text text-transparent mb-16">
            Our <span className="bg-gradient-to-r from-warm-peach to-orange-400 bg-clip-text text-transparent">Values</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-2xl shadow-lg mb-4">
                <Heart className="h-12 w-12 text-warm-peach mx-auto mb-4" />
                <h3 className="font-bold text-soft-brown mb-2">Love First</h3>
                <p className="text-gray-600 text-sm">
                  Every decision we make is guided by love and compassion for our furry friends.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-6 rounded-2xl shadow-lg mb-4">
                <Shield className="h-12 w-12 text-warm-peach mx-auto mb-4" />
                <h3 className="font-bold text-soft-brown mb-2">Health Guarantee</h3>
                <p className="text-gray-600 text-sm">
                  Complete health screenings and medical care for all our companions.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-6 rounded-2xl shadow-lg mb-4">
                <Award className="h-12 w-12 text-warm-peach mx-auto mb-4" />
                <h3 className="font-bold text-soft-brown mb-2">Excellence</h3>
                <p className="text-gray-600 text-sm">
                  We maintain the highest standards in breeding, care, and customer service.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-6 rounded-2xl shadow-lg mb-4">
                <Users className="h-12 w-12 text-warm-peach mx-auto mb-4" />
                <h3 className="font-bold text-soft-brown mb-2">Community</h3>
                <p className="text-gray-600 text-sm">
                  Building lasting relationships with families and supporting them throughout their journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-white via-cream to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-16 text-4xl">🐕</div>
          <div className="absolute top-60 right-24 text-3xl">🐾</div>
          <div className="absolute bottom-40 left-1/4 text-5xl">🐶</div>
          <div className="absolute bottom-20 right-16 text-4xl">❤️</div>
          <div className="absolute top-1/2 right-1/3 text-3xl">🏠</div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-soft-brown via-warm-peach to-soft-brown bg-clip-text text-transparent mb-16">
            The <span className="bg-gradient-to-r from-warm-peach to-orange-400 bg-clip-text text-transparent">FurryFriend</span> Difference
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-soft-brown mb-8">What Sets Us Apart</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-warm-peach p-2 rounded-full flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-soft-brown mb-1">Comprehensive Health Screening</h4>
                    <p className="text-gray-600">Every puppy undergoes thorough veterinary examinations, vaccinations, and health certifications before joining your family.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-warm-peach p-2 rounded-full flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-soft-brown mb-1">Verified Breeding Partners</h4>
                    <p className="text-gray-600">We work exclusively with certified, ethical breeders who share our commitment to animal welfare and quality.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-warm-peach p-2 rounded-full flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-soft-brown mb-1">Lifetime Support</h4>
                    <p className="text-gray-600">Our relationship doesn't end at adoption. We provide ongoing guidance, training resources, and support throughout your pet's life.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-warm-peach p-2 rounded-full flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-soft-brown mb-1">Perfect Match Promise</h4>
                    <p className="text-gray-600">We take time to understand your lifestyle and preferences to ensure the perfect match between you and your new companion.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <img
                src="/dog17.jpg"
                alt="Veterinarian with dog"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <img
                src="/dog18.jpg"
                alt="Happy dog playing"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-soft-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Trusted by <span className="text-warm-peach">Families Everywhere</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Star className="h-12 w-12 text-warm-peach mx-auto mb-4 fill-current" />
              <div className="text-2xl font-bold mb-2">4.9/5</div>
              <div className="text-white/80">Customer Rating</div>
            </div>
            
            <div>
              <Shield className="h-12 w-12 text-warm-peach mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">100%</div>
              <div className="text-white/80">Health Guaranteed</div>
            </div>
            
            <div>
              <Users className="h-12 w-12 text-warm-peach mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">500+</div>
              <div className="text-white/80">Happy Families</div>
            </div>
            
            <div>
              <Heart className="h-12 w-12 text-warm-peach mx-auto mb-4 fill-current" />
              <div className="text-2xl font-bold mb-2">Lifetime</div>
              <div className="text-white/80">Support Promise</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-warm-peach to-warm-peach/80 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Find Your Perfect Match?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let us help you discover the joy of unconditional love and companionship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/'}
              className="bg-white text-warm-peach px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Browse Our Friends
            </button>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="border-2 border-white text-white hover:bg-white hover:text-warm-peach px-8 py-4 rounded-full text-lg font-semibold transition-colors"
            >
              Contact Us Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};