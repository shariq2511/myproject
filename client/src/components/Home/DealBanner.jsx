import React from 'react';

// ProductDetails Component
const ProductDetails = () => {
  return (
    <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Royal Collection | <span className="text-black">Wedding Edition</span>
        </h1>

        {/* Description Heading */}
        <h2 className="text-lg font-medium mt-4 text-gray-700">Description:</h2>

        <p className="mt-2 text-gray-600 leading-relaxed">
          Step into elegance with our luxurious Wedding Edition. Crafted from the finest materials, this outfit exudes grace and sophistication, perfect for your special day.
        </p>

        {/* Size and Price Section */}
        <div className="flex justify-between items-center mt-6">
          <div className="text-lg text-white bg-black px-3 py-1 rounded">Size: M</div>
          <div className="text-2xl font-bold text-gray-900">$100.00</div>
        </div>

        {/* Buy Now Button */}
        <div className="mt-4">
          <button className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

// DealBanner Component
export default function DealBanner() {
  return (
    <div className="bg-gray-100 min-h-screen p-6 flex flex-col items-center">
      <div className="max-w-5xl bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="https://blog.bridals.pk/wp-content/uploads/2019/01/coral-banner.jpg" // Replace with the actual image source
            alt="Wedding Edition"
            className="w-full h-auto md:h-full object-cover"
          />
        </div>

        {/* Product Details Section */}
        <ProductDetails />
      </div>

      {/* Footer Icons Section */}
      <div className="bg-gray-50 w-full max-w-5xl mt-6 p-6 grid grid-cols-2 sm:grid-cols-4 gap-6 rounded-lg shadow-md">
        {/* High Quality Icon */}
        <div className="flex flex-col items-center">
          <img src="https://img.icons8.com/ios-filled/50/000000/diamond.png" alt="High Quality" className="w-8 h-8" />
          <p className="text-sm text-gray-700 mt-2">High Quality</p>
          <p className="text-xs text-gray-500">Crafted from top materials</p>
        </div>

        {/* Warranty Protection Icon */}
        <div className="flex flex-col items-center">
          <img src="https://img.icons8.com/ios-filled/50/000000/guarantee.png" alt="Warranty Protection" className="w-8 h-8" />
          <p className="text-sm text-gray-700 mt-2">Warranty Protection</p>
          <p className="text-xs text-gray-500">Over 1 year</p>
        </div>

        {/* Free Shipping Icon */}
        <div className="flex flex-col items-center">
          <img src="https://img.icons8.com/ios-filled/50/000000/shipped.png" alt="Free Shipping" className="w-8 h-8" />
          <p className="text-sm text-gray-700 mt-2">Free Shipping</p>
          <p className="text-xs text-gray-500">Order over 150 Rs/-</p>
        </div>

        {/* 24/7 Support Icon */}
        <div className="flex flex-col items-center">
          <img src="https://img.icons8.com/ios-filled/50/000000/phone-office.png" alt="24/7 Support" className="w-8 h-8" />
          <p className="text-sm text-gray-700 mt-2">24 / 7 Support</p>
          <p className="text-xs text-gray-500">Dedicated support</p>
        </div>
      </div>
    </div>
  );
}
