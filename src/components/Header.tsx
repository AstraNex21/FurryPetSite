import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ChevronDown } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const closeAll = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const breeds = [
    { name: "French Mastiff", slug: "french-mastiff" },
    { name: "Maltese", slug: "maltese" },
    { name: "Toy Poodle", slug: "toy-poodle" },
    { name: "Yorkshire Terrier", slug: "yorkshire-terrier" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-white/20">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">

        <Link to="/" onClick={closeAll} className="flex items-center gap-2 select-none">
          <Heart className="text-pink-500" size={26} />
          <span className="text-xl tracking-wide font-semibold text-gray-800 uppercase">
            Furry Friend
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 text-gray-800 text-sm font-medium">

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 hover:text-pink-500 transition"
            >
              Our Breeds <ChevronDown size={16} />
            </button>

            {dropdownOpen && (
              <div className="absolute top-8 left-0 bg-white shadow-lg rounded-xl py-3 w-52 border border-gray-100">
                {breeds.map((b) => (
                  <Link
                    key={b.slug}
                    to={`/breed/${b.slug}`}
                    className="block px-4 py-2 hover:bg-pink-100/50 text-sm"
                    onClick={closeAll}
                  >
                    {b.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/adoption-process" className="hover:text-pink-500 transition" onClick={closeAll}>
            Adoption Process
          </Link>

          <Link to="/about" className="hover:text-pink-500 transition" onClick={closeAll}>
            About
          </Link>

          <Link to="/contact" className="hover:text-pink-500 transition" onClick={closeAll}>
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-gray-800 transition ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block h-0.5 w-6 bg-gray-800 transition ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-gray-800 transition ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="flex flex-col py-4 px-6 space-y-4 text-gray-800 text-base font-medium">

            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-between w-full"
            >
              Our Breeds <ChevronDown size={18} />
            </button>

            {dropdownOpen && (
              <div className="ml-3 flex flex-col gap-2 text-sm">
                {breeds.map((b) => (
                  <Link
                    key={b.slug}
                    to={`/breed/${b.slug}`}
                    className="hover:text-pink-500"
                    onClick={closeAll}
                  >
                    {b.name}
                  </Link>
                ))}
              </div>
            )}

            <Link to="/adoption-process" onClick={closeAll} className="hover:text-pink-500">
              Adoption Process
            </Link>

            <Link to="/about" onClick={closeAll} className="hover:text-pink-500">
              About
            </Link>

            <Link to="/contact" onClick={closeAll} className="hover:text-pink-500">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
