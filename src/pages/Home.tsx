import React, { useState, useEffect, ReactNode } from "react";
import { Link } from "react-router-dom";
import { Shield, Heart, Award, Users } from "lucide-react";
import InstagramGrid from "../components/InstagramGrid";

interface Breed {
  name: string;
  slug: string;
  image: string;
}

interface FramedImageProps {
  src: string;
  alt: string;
}

interface ModernCarouselProps {
  images: string[];
}

interface CloudWrapProps {
  children: ReactNode;
}

interface FeatureProps {
  icon: ReactNode;
  title: string;
  text: string;
}

const breeds: Breed[] = [
  { name: "French Mastiff", slug: "french-mastiff", image: "/FM/BreedCardFM.png" },
  { name: "Maltese", slug: "maltese", image: "/Malt/BreedCardMalt.png" },
  { name: "Toy Poodle", slug: "toy-poodle", image: "/TP/BreedCardTP.png" },
  { name: "Yorkshire Terrier", slug: "yorkshire-terrier", image: "/YT/BreedCardYT.png" }
];

const carouselImages: string[] = [
  "/marquee/GSDdad.JPEG",
  "/marquee/7703.JPEG",
  "/marquee/25748.JPEG",
  "/marquee/maltmom.JPEG",
  "/marquee/32460.JPEG",
  "/marquee/79128.JPEG"
];

const FramedImage: React.FC<FramedImageProps> = ({ src, alt }) => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="p-1 bg-white rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl">
      <div className="overflow-hidden rounded-lg border border-orange-200">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover scale-[1.02] transition-transform duration-700 hover:scale-110"
        />
      </div>
    </div>
  </div>
);

const ModernCarousel: React.FC<ModernCarouselProps> = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % images.length);
        setFade(false);
      }, 300);
    }, 3500);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50 flex items-center justify-center">
      <div className="md:hidden w-full h-full px-3 flex items-center">
        <div className={`transition-all duration-500 w-full ${fade ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
          <FramedImage src={images[index]} alt="slide" />
        </div>
      </div>

      <div className="hidden md:flex w-full h-full px-10 gap-6 items-center justify-center">
        <div className={`w-1/3 opacity-50 blur-[1px] transition ${fade ? "opacity-20 scale-90" : "scale-95"}`}>
          <FramedImage src={images[(index - 1 + images.length) % images.length]} alt="prev" />
        </div>

        <div className={`w-1/2 scale-110 transition ${fade ? "opacity-30 scale-95" : "scale-110"}`}>
          <FramedImage src={images[index]} alt="main" />
        </div>

        <div className={`w-1/3 opacity-50 blur-[1px] transition ${fade ? "opacity-20 scale-90" : "scale-95"}`}>
          <FramedImage src={images[(index + 1) % images.length]} alt="next" />
        </div>
      </div>
    </div>
  );
};

const CloudWrap: React.FC<CloudWrapProps> = ({ children }) => (
  <div className="relative flex justify-center py-4">
    <div className="absolute w-[90%] max-w-[650px] opacity-90 -z-10 scale-110">
      <svg viewBox="0 0 220 80" className="w-full h-auto">
        <ellipse cx="36" cy="42" rx="36" ry="18" fill="white" />
        <ellipse cx="110" cy="30" rx="70" ry="28" fill="white" />
        <ellipse cx="184" cy="42" rx="36" ry="18" fill="white" />
      </svg>
    </div>
    <div className="px-6 py-2 backdrop-blur-sm">{children}</div>
  </div>
);

const Feature: React.FC<FeatureProps> = ({ icon, title, text }) => (
  <div className="relative p-5 bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] rounded-2xl border border-white hover:scale-[1.02] transition-transform group overflow-hidden">
    <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-gradient-to-r from-orange-500 to-pink-500 group-hover:w-full transition-all duration-500"></span>

    <div className="flex gap-4 items-start">
      <div className="p-3 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl text-white shadow-lg">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{text}</p>
      </div>
    </div>
  </div>
);

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="relative min-h-[50vh] md:min-h-screen overflow-hidden flex items-center justify-center">
        <ModernCarousel images={carouselImages} />

        <div className="absolute inset-0 flex flex-col justify-end items-center text-center text-white px-4 pb-12 md:pb-20 pointer-events-none">
          <h1 className="text-4xl md:text-7xl font-extrabold drop-shadow-xl tracking-tight leading-tight">
            Find your <br />
            <span className="text-white">Forever Furry Friend</span>
          </h1>

          <div className="mt-6 flex gap-4 pointer-events-auto">
            <button
              onClick={() => document.getElementById("breeds")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition"
            >
              Meet Our Friends
            </button>

            <Link
              to="/contact"
              className="bg-white/70 backdrop-blur-xl px-8 py-3 rounded-full font-semibold text-gray-900 shadow-xl border border-white/80 hover:scale-105 transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <CloudWrap>
            <h2 className="text-3xl md:text-5xl font-bold text-center">
              Why Choose <span className="text-orange-600">FurryFriend</span>?
            </h2>
          </CloudWrap>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Feature icon={<Shield />} title="Lifetime Health Guarantee" text="Every puppy comes with verified lineage." />
            <Feature icon={<Heart />} title="Ethical Breeding" text="Mothers breed only once a year." />
            <Feature icon={<Award />} title="Import Lineage" text="Champion bloodlines ensuring healthier pups." />
            <Feature icon={<Users />} title="24/7 Medical Support" text="Lifetime guidance from expert vets." />
          </div>
        </div>
      </section>

      <section id="breeds" className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <CloudWrap>
            <h2 className="text-4xl md:text-5xl font-bold text-center">
              Meet Our <span className="text-orange-600">Adorable Friends</span>
            </h2>
          </CloudWrap>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {breeds.map((b) => (
              <Link
                key={b.slug}
                to={`/breed/${b.slug}`}
                className="block p-2 rounded-xl shadow-md bg-orange-50 hover:scale-105 hover:shadow-xl transition"
              >
                <img src={b.image} alt={b.name} className="w-full aspect-[3/4] object-cover rounded-lg" />
                <p className="text-center mt-3 font-semibold">{b.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            to="/contact"
            className="block shadow-xl rounded-3xl overflow-hidden border border-white hover:scale-[1.02] transition-transform"
          >
            <img src="/FindFriendCTA.png" className="w-full h-56 md:h-72 object-cover" />
          </Link>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <CloudWrap>
            <h2 className="text-4xl md:text-5xl font-bold text-center">
              Follow Our <span className="text-orange-600">Journey</span>
            </h2>
          </CloudWrap>

          <InstagramGrid />
        </div>
      </section>
    </div>
  );
};

export default Home;
