export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-red-600">RICHK NAK</span>
              <span className="ml-2 text-white">ENTERPRISE</span>
            </div>
            <p className="text-gray-400">
              Your trusted partner for quality auto spare parts in Ghana. Specializing in brake pots and ABS systems for all vehicle makes and models.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-red-600 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-red-600 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-red-600 transition">
                  Products
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-red-600 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Brands</h3>
            <ul className="space-y-2 text-gray-400">
              <li>American Cars Brake Pot</li>
              <li>Toyota Prado ABS</li>
              <li>Toyota Land Cruiser ABS</li>
              <li>Toyota Tacoma ABS</li>
              <li>Toyota Vitz Brake Pots</li>
              <li>Toyota Rav4</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} RICHK NAK ENTERPRISE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
