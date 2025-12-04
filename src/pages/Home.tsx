import React, { useState, useEffect, ReactNode, TouchEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import InstagramGrid from "../components/InstagramGrid";

// Load Playpen Font
const link = document.createElement("link");
link.href =
  "https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@400;500;600;700;800&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link);

// Global + Ripple + Awwwards Animations
const style = document.createElement("style");
style.textContent = `
  body {
    font-family: 'Playpen Sans', cursive !important;
  }

  .mobile-ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    opacity: 0.4;
    background: white;
    pointer-events: none;
    animation: mobileRippleAnim 500ms ease-out forwards;
  }

  @keyframes mobileRippleAnim {
    to {
      transform: scale(3.5);
      opacity: 0;
    }
  }

  /* Desktop Magnetic Effect */
  .magnetic {
    transition: transform 0.15s ease-out;
    will-change: transform;
  }

  /* Tilt Container */
  .tilt-wrap {
    perspective: 900px;
  }

  /* Glow Trail */
  .contact-glow {
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0;
    background: radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,0.35), transparent 45%);
    transition: opacity 250ms ease-out;
  }

  /* Mobile press highlight */
  .press-glow {
    position: absolute;
    inset: 0;
    background: rgba(255,255,255,0.14);
    border-radius: 16px;
    opacity: 0;
    transition: opacity 180ms ease-out;
  }
`;
document.head.appendChild(style);

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

const breeds: Breed[] = [
  { name: "French Mastiff", slug: "french-mastiff", image: "/FM/8673.jpeg" },
  { name: "Maltese", slug: "maltese", image: "/Malt/25795.JPEG" },
  {
    name: "Toy Poodle",
    slug: "toy-poodle",
    image: "/TP/pexels-jacob-sierra-419902407-16603124 (1).jpg",
  },
  { name: "Yorkshire Terrier", slug: "yorkshire-terrier", image: "/YT/YT2.jpg" },
];

const carouselImages = [
  "/marquee/GSDdad.JPEG",
  "/marquee/7703.JPEG",
  "/marquee/25748.JPEG",
  "/marquee/maltmom.JPEG",
  "/marquee/32460.JPEG",
  "/marquee/79128.JPEG",
];

// ---------------- MOBILE BOUNCE + RIPPLE ----------------
const handleTouch = (e: TouchEvent<HTMLAnchorElement | HTMLButtonElement>) => {
  const el = e.currentTarget;

  el.style.transition = "transform 180ms cubic-bezier(0.25, 0.46, 0.45, 0.94)";
  el.style.transform = "scale(0.92)";

  setTimeout(() => {
    el.style.transform = "scale(1)";
  }, 140);

  const rect = el.getBoundingClientRect();
  const touch = e.touches[0];
  const ripple = document.createElement("span");
  const size = Math.max(rect.width, rect.height);

  ripple.className = "mobile-ripple";
  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${touch.clientX - rect.left - size / 2}px`;
  ripple.style.top = `${touch.clientY - rect.top - size / 2}px`;

  el.appendChild(ripple);
  setTimeout(() => ripple.remove(), 500);
};

// ---------------- MAGNETIC (Desktop) ----------------
const activateMagnetic = (e: React.MouseEvent<HTMLButtonElement>) => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const strength = 18;

  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  el.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
};

const resetMagnetic = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.currentTarget.style.transform = "translate(0,0)";
};

// ---------------- TILT + GLOW (Desktop) ----------------
const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
  const card = e.currentTarget;
  const glow = card.querySelector(".contact-glow") as HTMLElement;

  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const rotateX = ((y - rect.height / 2) / 20) * -1;
  const rotateY = (x - rect.width / 2) / 20;

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;

  glow.style.setProperty("--mx", `${x}px`);
  glow.style.setProperty("--my", `${y}px`);
  glow.style.opacity = "1";
};

const resetTilt = (e: React.MouseEvent<HTMLDivElement>) => {
  const card = e.currentTarget;
  const glow = card.querySelector(".contact-glow") as HTMLElement;

  card.style.transform = "scale(1) rotateX(0) rotateY(0)";
  glow.style.opacity = "0";
};

// ---------------- MOBILE PRESS GLOW ----------------
const mobilePress = (e: TouchEvent<HTMLDivElement>) => {
  const el = e.currentTarget;
  const glow = el.querySelector(".press-glow") as HTMLElement;

  glow.classList.add("opacity-100");
  setTimeout(() => glow.classList.remove("opacity-100"), 200);

  handleTouch(e as any);
};

// ---------------- COMPONENTS ----------------
const FramedImage = ({ src, alt }: FramedImageProps) => (
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

const ModernCarousel = ({ images }: ModernCarouselProps) => {
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
        <div
          className={`transition-all duration-500 w-full ${
            fade ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          <FramedImage src={images[index]} alt="slide" />
        </div>
      </div>

      <div className="hidden md:flex w-full h-full px-10 gap-6 items-center justify-center">
        <div
          className={`w-1/3 opacity-50 blur-[1px] transition ${
            fade ? "opacity-20 scale-90" : "scale-95"
          }`}
        >
          <FramedImage
            src={images[(index - 1 + images.length) % images.length]}
            alt="prev"
          />
        </div>

        <div
          className={`w-1/2 transition ${
            fade ? "opacity-30 scale-95" : "scale-110"
          }`}
        >
          <FramedImage src={images[index]} alt="main" />
        </div>

        <div
          className={`w-1/3 opacity-50 blur-[1px] transition ${
            fade ? "opacity-20 scale-90" : "scale-95"
          }`}
        >
          <FramedImage src={images[(index + 1) % images.length]} alt="next" />
        </div>
      </div>
    </div>
  );
};

const CloudWrap = ({ children }: CloudWrapProps) => (
  <div className="relative flex justify-center py-2">
    <div className="absolute w-[90%] max-w-[650px] opacity-90 -z-10 scale-110">
      <svg viewBox="0 0 220 80" className="w-full h-auto">
        <ellipse cx="36" cy="42" rx="36" ry="18" fill="white" />
        <ellipse cx="110" cy="30" rx="70" ry="28" fill="white" />
        <ellipse cx="184" cy="42" rx="36" ry="18" fill="white" />
      </svg>
    </div>
    <div className="px-6 py-1 backdrop-blur-sm">{children}</div>
  </div>
);

// ---------------- MAIN PAGE ----------------
export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-white text-gray-900 select-none"
      style={{ fontFamily: "Playpen Sans" }}
    >
      <section className="relative min-h-[40vh] md:min-h-[85vh] overflow-hidden flex items-center justify-center">
        <ModernCarousel images={carouselImages} />

        <div className="absolute inset-0 flex flex-col justify-end items-center text-center text-white px-4 pb-6 md:pb-16 pointer-events-none">
          <h1 className="text-3xl md:text-7xl font-extrabold drop-shadow-xl tracking-tight leading-tight">
            Find your <br />
            <span className="text-white">Forever Furry Friend</span>
          </h1>

          <div className="mt-3 md:mt-6 flex gap-3 md:gap-4 pointer-events-auto">
            <button
              onClick={() =>
                document
                  .getElementById("breeds")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold shadow-xl hover:scale-105 active:scale-95 transition"
            >
              Meet Our Friends
            </button>

            <Link
              to="/contact"
              className="bg-white/70 backdrop-blur-xl px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold text-gray-900 shadow-xl border border-white/80 hover:scale-105 active:scale-95 transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <div className="w-full flex justify-center py-4 md:py-8">
        <div className="w-3/4 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent"></div>
      </div>

      {/* WHY CHOOSE */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <CloudWrap>
            <h2 className="text-2xl md:text-5xl font-bold text-center">
              Why Choose <span className="text-orange-600">FurryFriend</span>?
            </h2>
          </CloudWrap>

          <div className="flex justify-center mt-3 md:mt-4">
            <img
              src="/afe.png"
              alt="Why Choose FurryFriend"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* BREED CARDS */}
      <section id="breeds" className="py-3 md:py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <CloudWrap>
            <h2 className="text-2xl md:text-5xl font-bold text-center">
              Meet Our <span className="text-orange-600">Adorable Friends</span>
            </h2>
          </CloudWrap>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-4 md:mt-6">
            {breeds.map((b) => (
              <Link
                key={b.slug}
                to={`/breed/${b.slug}`}
                onTouchStart={handleTouch}
                className="
                  relative overflow-hidden group block p-2 rounded-xl bg-orange-50 shadow-md 
                  transition-all duration-500 hover:shadow-2xl hover:scale-[1.06] hover:-translate-y-1 hover:rotate-[0.5deg]
                "
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={b.image}
                    alt={b.name}
                    className="
                      w-full aspect-[3/4] object-cover rounded-lg 
                      transition-all duration-700 group-hover:scale-110 group-hover:brightness-110
                    "
                  />
                </div>

                <div
                  className="
                    flex items-center justify-center mt-2 md:mt-3 transition-all duration-300
                    group-hover:translate-x-1
                  "
                >
                  <p className="font-semibold text-sm md:text-base">{b.name}</p>

                  <span
                    className="
                      inline-flex items-center ml-1 opacity-70 transition-all duration-300
                      group-hover:opacity-100 group-hover:translate-x-2
                    "
                  >
                    <ArrowRight size={16} className="text-orange-600" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-3 md:py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <CloudWrap>
            <h2 className="text-2xl md:text-5xl font-bold text-center">
              Follow Our <span className="text-orange-600">Journey</span>
            </h2>
          </CloudWrap>

          <InstagramGrid />
        </div>
      </section>

      {/* ---------------- CONTACT CTA WITH AWWWARDS ANIMATIONS ---------------- */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/contact")}
              onMouseMove={activateMagnetic}
              onMouseLeave={resetMagnetic}
              className="tilt-wrap magnetic-area relative"
            >
              <div
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
                onTouchStart={mobilePress}
                className="
                  magnetic relative overflow-hidden rounded-2xl shadow-xl 
                  transition-all duration-300 active:scale-95
                "
              >
                <div className="press-glow rounded-2xl"></div>

                <img
                  src="/COntactUs.png"
                  alt="Contact Us"
                  className="w-full h-auto object-cover rounded-2xl"
                />

                <div
                  className="
                    absolute inset-0 bg-gradient-to-t from-black/30 to-transparent 
                    opacity-0 hover:opacity-100 transition-opacity duration-300 
                    flex items-end justify-center pb-4
                  "
                >
                  <span className="text-white font-bold text-lg tracking-wide">
                    Get in Touch
                  </span>
                </div>

                <div className="contact-glow rounded-2xl"></div>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
