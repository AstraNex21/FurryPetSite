import React from "react";
import { Heart, Shield, Award, Users, Star, Check } from "lucide-react";
import { Link } from "react-router-dom";
import InstagramGrid from "../components/InstagramGrid";

// Import Playpen Sans font
import './PlaypenSans.css';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Playpen Sans, cursive' }}>
      {/* Hero Section removed */}

      {/* Mission Section */}
      <section className="py-4 sm:py-8 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-16 text-5xl">🐕‍🦺</div>
          <div className="absolute top-60 right-24 text-4xl">🐾</div>
          <div className="absolute bottom-40 left-1/4 text-6xl">🐶</div>
          <div className="absolute bottom-20 right-16 text-4xl">❤️</div>
          <div className="absolute top-1/2 right-1/3 text-3xl">🏠</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold bg-gradient-to-r from-soft-brown via-warm-peach to-soft-brown bg-clip-text text-transparent mb-4 sm:mb-6 tracking-wide" style={{ fontFamily: 'Playpen Sans, cursive' }}>
                Our <span className="bg-gradient-to-r from-warm-peach to-orange-400 bg-clip-text text-transparent">Mission</span>
              </h2>

              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed" style={{ fontFamily: 'Playpen Sans, cursive' }}>
                At FurryFriend, we believe that every family deserves the joy and companionship
                that comes with welcoming a four-legged friend.
              </p>

              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed" style={{ fontFamily: 'Playpen Sans, cursive' }}>
                We're not just a pet shop – we're matchmakers for life.
              </p>

              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-warm-peach">500+</div>
                  <div className="text-gray-600">Happy Families</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-warm-peach">5</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-100 rounded-2xl shadow-2xl overflow-hidden">
                <div className="aspect-[4/3] w-full">
                  <img
                    src="/maltshappy.png"
                    alt="Happy Maltese dogs"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-warm-peach text-white p-4 sm:p-6 rounded-2xl shadow-lg">
                <div className="flex items-center gap-2">
                  <Heart className="h-6 w-6 sm:h-8 sm:w-8 fill-current" />
                  <div>
                    <div className="font-bold text-base sm:text-lg">100%</div>
                    <div className="text-sm opacity-90">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-4 sm:py-8 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-16 left-20 text-4xl">🐕</div>
          <div className="absolute top-40 right-28 text-3xl">🐾</div>
          <div className="absolute bottom-40 left-1/4 text-5xl">🐶</div>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-soft-brown via-warm-peach to-soft-brown bg-clip-text text-transparent" style={{ fontFamily: 'Playpen Sans, cursive' }}>
            Our <span className="bg-gradient-to-r from-warm-peach to-orange-400 bg-clip-text text-transparent">Values</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            <div className="text-center">
              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg mb-4">
                <Heart className="h-8 w-8 sm:h-12 sm:w-12 text-warm-peach mx-auto mb-4" />
                <h3 className="font-bold text-soft-brown mb-2" style={{ fontFamily: 'Playpen Sans, cursive' }}>Love First</h3>
                <p className="text-gray-600 text-sm" style={{ fontFamily: 'Playpen Sans, cursive' }}>Every decision is guided by compassion.</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg mb-4">
                <Shield className="h-8 w-8 sm:h-12 sm:w-12 text-warm-peach mx-auto mb-4" />
                <h3 className="font-bold text-soft-brown mb-2" style={{ fontFamily: 'Playpen Sans, cursive' }}>Health Guarantee</h3>
                <p className="text-gray-600 text-sm" style={{ fontFamily: 'Playpen Sans, cursive' }}>Full health screenings for every companion.</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg mb-4">
                <Award className="h-8 w-8 sm:h-12 sm:w-12 text-warm-peach mx-auto mb-4" />
                <h3 className="font-bold text-soft-brown mb-2" style={{ fontFamily: 'Playpen Sans, cursive' }}>Excellence</h3>
                <p className="text-gray-600 text-sm" style={{ fontFamily: 'Playpen Sans, cursive' }}>We maintain the highest standards.</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg mb-4">
                <Users className="h-8 w-8 sm:h-12 sm:w-12 text-warm-peach mx-auto mb-4" />
                <h3 className="font-bold text-soft-brown mb-2" style={{ fontFamily: 'Playpen Sans, cursive' }}>Community</h3>
                <p className="text-gray-600 text-sm" style={{ fontFamily: 'Playpen Sans, cursive' }}>We support families throughout journey.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose FurryFriend Section */}
      <section className="py-4 sm:py-8 md:py-12">
        <h2 className="text-xl sm:text-2xl md:text-5xl font-bold text-center text-gray-800 mb-2 sm:mb-4 md:mb-10" style={{ fontFamily: 'Playpen Sans, cursive' }}>
          Why Choose <span className="text-orange-600">FurryFriend</span>?
        </h2>
        <div className="flex justify-center">
          <img src="/afe.png" alt="Why Choose FurryFriend" className="max-w-full h-auto rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Instagram Grid Section */}
      <section className="py-4 sm:py-8 md:py-12">
        <h2 className="text-xl sm:text-2xl md:text-5xl font-bold text-center text-gray-800 mb-2 sm:mb-4 md:mb-10" style={{ fontFamily: 'Playpen Sans, cursive' }}>
          Follow Our <span className="text-orange-600">Journey</span>
        </h2>
        <InstagramGrid />
      </section>
    </div>
  );
};