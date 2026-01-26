import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Quality Auto Parts for <span className="text-red-600">Every Vehicle</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Your trusted source for premium brake parts and auto components in Ghana.
              We stock quality parts for all major car brands at competitive prices.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg inline-flex items-center transition transform hover:scale-105"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>

          <div className="relative">
            <div className="bg-red-600 rounded-2xl p-8 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Auto parts"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-gray-900 font-bold px-6 py-4 rounded-lg shadow-xl">
              <p className="text-sm">Trusted Since</p>
              <p className="text-3xl">2015</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
