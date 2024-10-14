import React, { useState, useEffect } from "react";

export default function DealsOfTheMonth() {
  const images = [
    "https://www.limelight.pk/cdn/shop/files/DSCF8592_366ee81d-59e8-4a42-af2c-e59b1aa35e6a_330x.jpg?v=1719230316",
    "https://www.limelight.pk/cdn/shop/files/DSC09736_330x.jpg?v=1716376624",
    "https://www.limelight.pk/cdn/shop/files/DSCF8599_330x.jpg?v=1716379092",
    "https://www.limelight.pk/cdn/shop/files/DSC09752_330x.jpg?v=1716379084",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-white">
      {/* Left Side - Deal Info */}
      <div className="md:w-1/2 text-center md:text-left mb-8">
        <h2 className="text-3xl font-bold mb-4">Deals Of The Month</h2>
        <p className="text-gray-600 mb-6">
          Discover elegant outfits at discounted prices. Treat yourself to
          stunning fashion deals this month!
        </p>
        <button className="bg-pink-500 text-white py-2 px-4 rounded-full shadow-md">
          Buy Now
        </button>

        {/* Countdown Timer */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Hurry, Before It's Too Late!
          </h3>
          <div className="flex justify-center md:justify-start space-x-4 text-white">
            <div className="text-center bg-pink-500 px-4 py-2 rounded-md">
              <div className="text-2xl font-bold">02</div>
              <div className="text-sm">Days</div>
            </div>
            <div className="text-center bg-pink-500 px-4 py-2 rounded-md">
              <div className="text-2xl font-bold">06</div>
              <div className="text-sm">Hrs</div>
            </div>
            <div className="text-center bg-pink-500 px-4 py-2 rounded-md">
              <div className="text-2xl font-bold">05</div>
              <div className="text-sm">Mins</div>
            </div>
            <div className="text-center bg-pink-500 px-4 py-2 rounded-md">
              <div className="text-2xl font-bold">30</div>
              <div className="text-sm">Sec</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Image Carousel */}
      <div className="md:w-1/2">
        <div className="relative">
          <div className="flex justify-center">
            {/* Image Carousel */}
            <div className="w-72 h-96 flex items-center justify-center bg-[#f9f5f0] rounded-lg overflow-hidden">
              <img
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                className="w-full h-full object-cover rounded-lg transition-transform duration-700 ease-in-out"
              />
            </div>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-4 space-x-2">
            <button
              onClick={prevSlide}
              className="w-6 h-6 bg-gray-300 rounded-full"
            >
              {/* Left Arrow */}
              <span className="block transform rotate-180">←</span>
            </button>
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-pink-500" : "bg-gray-300"
                }`}
              ></button>
            ))}
            <button
              onClick={nextSlide}
              className="w-6 h-6 bg-gray-300 rounded-full"
            >
              {/* Right Arrow */}
              <span className="block">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
