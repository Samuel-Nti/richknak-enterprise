import { useState } from 'react';

type BrakeItem = {
  brand: string;
  model: string;
  year: number;
  parts: string[];
  price: number;
  image: string;
};

export default function Products() {
  const catalogue: BrakeItem[] = [
    {
      brand: 'Toyota',
      model: 'Corolla',
      year: 2010,
      parts: ['Brake Pads', 'Brake Discs', 'Brake Shoes'],
      price: 450,
      image:
        'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      brand: 'Toyota',
      model: 'Camry',
      year: 2015,
      parts: ['Brake Pads', 'Brake Rotors', 'Brake Calipers'],
      price: 650,
      image:
        'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      brand: 'Honda',
      model: 'Accord',
      year: 2014,
      parts: ['Brake Pads', 'Brake Discs', 'Master Cylinder'],
      price: 700,
      image:
        'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      brand: 'Hyundai',
      model: 'Elantra',
      year: 2018,
      parts: ['Brake Pads', 'Brake Discs', 'Brake Sensors'],
      price: 550,
      image:
        'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      brand: 'Nissan',
      model: 'Altima',
      year: 2016,
      parts: ['Brake Pads', 'Brake Drums', 'Brake Lines'],
      price: 600,
      image:
        'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');

  const brands: string[] = [...new Set(catalogue.map(item => item.brand))];
  const years: number[] = [...new Set(catalogue.map(item => item.year))];

  const filteredCatalogue: BrakeItem[] = catalogue.filter(item => {
    return (
      (selectedBrand ? item.brand === selectedBrand : true) &&
      (selectedYear ? item.year === Number(selectedYear) : true)
    );
  });

  const whatsappNumber = '233XXXXXXXXX'; // replace with your number

  const generateWhatsAppLink = (item: BrakeItem): string => {
    const message = `Hello, I am interested in brake parts for ${item.brand} ${item.model} (${item.year}). Price: GHS ${item.price}.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };


  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Brake Parts Catalogue
          </h2>
          <p className="text-gray-600 text-lg">
            Order quality brake parts for popular vehicles in Ghana.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 justify-center">
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">All Brands</option>
            {brands.map((brand, idx) => (
              <option key={idx} value={brand}>
                {brand}
              </option>
            ))}
          </select>

          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">All Years</option>
            {years.map((year, idx) => (
              <option key={idx} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Catalogue Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCatalogue.map((item: BrakeItem, index: number) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.brand} ${item.model}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {item.brand} {item.model}
                </h3>

                <p className="text-sm text-gray-500 mb-2">
                  Year: {item.year}
                </p>

                <ul className="space-y-2 mb-4">
                  {item.parts.map((part: string, idx: number) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      {part}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-red-600">
                    GHS {item.price}
                  </span>

                  <a
                    href={generateWhatsAppLink(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                  >
                    Order via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCatalogue.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No brake parts found for the selected filter.
          </p>
        )}
      </div>
    </section>
  );
}
