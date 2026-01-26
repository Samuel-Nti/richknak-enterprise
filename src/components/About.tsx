import { ShieldCheck, Wrench, Clock, Package } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Quality Guaranteed',
      description: 'All our parts are certified and come with warranty protection for your peace of mind.'
    },
    {
      icon: Package,
      title: 'Wide Selection',
      description: 'Extensive inventory of brake parts for all major vehicle brands and models.'
    },
    {
      icon: Clock,
      title: 'Fast Service',
      description: 'Quick turnaround time with most parts available for immediate pickup or delivery.'
    },
    {
      icon: Wrench,
      title: 'Expert Advice',
      description: 'Our experienced team provides professional guidance to help you find the right parts.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose GhanaAuto Parts?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are Ghana's leading supplier of quality auto spare parts, committed to keeping your vehicle safe and reliable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
