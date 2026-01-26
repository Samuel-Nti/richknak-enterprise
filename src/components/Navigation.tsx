import { Phone } from 'lucide-react';

export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-red-600">RICHK NAK</span>
            <span className="ml-2 text-gray-700">ENTERPRISE</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-red-600 transition">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-red-600 transition">
              About
            </button>
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-red-600 transition">
              Products
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-red-600 transition">
              Contact
            </button>
          </div>

          <a href="tel:+233123456789" className="flex items-center text-red-600 hover:text-red-700 transition">
            <Phone className="w-5 h-5 mr-2" />
            <span className="font-semibold">+233  243 180 382</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
