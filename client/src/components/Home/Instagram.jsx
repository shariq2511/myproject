import React from 'react';

export default function Instagram() {
  return (
    <div className="bg-gray-50 py-12">
      {/* Title and Description */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">Follow Us On Instagram</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Discover the latest in women's fashion! Follow us on Instagram for style inspiration, exclusive offers, and a glimpse into our newest collections. Stay stylish with our carefully curated looks designed to make you feel your best.
        </p>
      </div>

      {/* Animated Image Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[ // Image data array
            {
              src: "https://images.pexels.com/photos/26970934/pexels-photo-26970934/free-photo-of-an-elegant-woman-sitting-on-a-bench-and-holding-a-tray.jpeg?auto=compress&cs=tinysrgb&w=600",
              alt: "Top Fashion",
            },
            {
              src: "https://images.pexels.com/photos/25288455/pexels-photo-25288455/free-photo-of-model-in-a-floral-dress-and-pants-with-a-blue-scarf-sitting-on-the-steps.jpeg?auto=compress&cs=tinysrgb&w=600",
              alt: "Fashion 1",
            },
            {
              src: "https://images.pexels.com/photos/20702677/pexels-photo-20702677/free-photo-of-portrait-of-brunette-woman-in-black-dress.jpeg?auto=compress&cs=tinysrgb&w=600",
              alt: "Fashion 2",
            },
            {
              src: "https://images.pexels.com/photos/20614160/pexels-photo-20614160/free-photo-of-woman-in-purple-traditional-dress-with-veil.jpeg?auto=compress&cs=tinysrgb&w=600",
              alt: "Fashion 3",
            },           
          ].map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform ${
                index % 2 === 0 ? 'translate-y-4' : '-translate-y-4'
              } hover:scale-105 hover:opacity-80`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

