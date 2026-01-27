import { useState } from 'react';

// 👉 IMPORT YOUR IMAGES HERE
// Replace these paths with your real image files
import toyotaBrakePotImg from '../images/pic3.jpeg';
import americanBrakePotImg from '../images/pic4.jpeg';
import toyotaAbsImg from '../images/pic7.jpeg';
import multiBrandAbsImg from '../images/pic9.jpeg';
import toyotaBrakePotImg1 from '../images/pic2.jpeg';

type ProductItem = {
  title: string;
  description: string;
  category:
    | 'Toyota Brake Pots'
    | 'American Cars Brake Pots'
    | 'Toyota & SUV ABS'
     | 'Toyota Prado ABS'
    | 'Multi-Brand ABS';
  yearRange?: string;
  image?: string;
};

// Fallback in case any image fails
const fallbackImage =
  'https://images.pexels.com/photos/4489701/pexels-photo-4489701.jpeg?auto=compress&cs=tinysrgb&w=800';

export default function Products() {
  const products: ProductItem[] = [
    {
      title: 'Toyota Brake Pots',
      description:
        'Brake pots available for Toyota Vitz, Corolla, Camry, RAV4, Highlander, Vortex, Yaris, and Hilux.',
      category: 'Toyota Brake Pots',
      yearRange: 'All Years',
      image: toyotaBrakePotImg // ✅ local image
    },

     {
      title: 'Toyota Prado ABS',
      description:
        'ABS for Toyota',
      category: 'Toyota Brake Pots',
      yearRange: 'All Years',
      image: toyotaBrakePotImg1 // ✅ local image
    },
    {
      title: 'American Cars Brake Pots',
      description:
        'Brake pots available for all kinds of American vehicles across different models and years.',
      category: 'American Cars Brake Pots',
      yearRange: 'Available',
      image: americanBrakePotImg // ✅ local image
    },
    {
      title: 'Toyota & SUV ABS Systems',
      description:
        'ABS units for Land Cruiser (2009–2026), Tacoma (2009–2026), Prado (2008–2026), FJ Cruiser (2008–2026), Hummer H3, and 4Runner (2008–2026).',
      category: 'Toyota & SUV ABS',
      yearRange: '2008 – 2026',
      image: toyotaAbsImg // ✅ local image
    },
    {
      title: 'Multi-Brand ABS Systems',
      description:
        'ABS systems available for American, Korean, and Japanese vehicles.',
      category: 'Multi-Brand ABS',
      yearRange: 'Available',
      image: multiBrandAbsImg // ✅ local image
    }
  ];

  const [filterCategory, setFilterCategory] = useState<string>('');

  const filteredProducts = products.filter(item =>
    filterCategory ? item.category === filterCategory : true
  );

  const whatsappNumber = '233243180382'; // replace with real number

  const generateWhatsAppLink = (item: ProductItem) => {
    const message = `Hello, I am interested in ${item.title}. Year Range: ${item.yearRange}.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Brake Pot & ABS Catalogue
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Reliable brake pots and ABS systems for Toyota, American, Korean,
            and Japanese vehicles.
          </p>
        </div>

        {/* Filter */}
        <div className="flex justify-center mb-10">
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">All Categories</option>
            <option value="Toyota Brake Pots">Toyota Brake Pots</option>
            <option value="American Cars Brake Pots">American Cars Brake Pots</option>
            <option value="Toyota & SUV ABS">Toyota & SUV ABS</option>
            <option value="Multi-Brand ABS">Multi-Brand ABS</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src={item.image || fallbackImage}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <span className="inline-block bg-red-100 text-red-600 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                  {item.category}
                </span>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mb-3">
                  {item.description}
                </p>

                <p className="text-gray-700 text-sm mb-5">
                  <span className="font-medium">Year Range:</span>{' '}
                  {item.yearRange}
                </p>

                <a
                  href={generateWhatsAppLink(item)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  Order via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No products available for the selected category.
          </p>
        )}
      </div>
    </section>
  );
}
