import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Bar */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <span className="text-2xl font-extrabold text-red-600">
              RICHK NAK
            </span>
            <span className="ml-2 text-gray-700 font-medium">
              ENTERPRISE
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'products', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-700 font-medium hover:text-red-600 transition"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          {/* Phone CTA - Desktop */}
          <a
            href="tel:+233243180382"
            className="hidden md:flex items-center text-red-600 hover:text-red-700 font-semibold transition"
          >
            <Phone className="w-5 h-5 mr-2" />
            +233 243 180 382
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 hover:text-red-600 transition"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-4 py-6 border-t">
            {['home', 'about', 'products', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-700 text-lg font-medium hover:text-red-600 transition text-left"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}

            {/* Mobile Phone CTA */}
            <a
              href="tel:+233243180382"
              className="flex items-center text-red-600 font-semibold pt-4 border-t"
            >
              <Phone className="w-5 h-5 mr-2" />
              +233 243 180 382
            </a>
          </div>
        </div>

      </div>
    </nav>
  );
}
