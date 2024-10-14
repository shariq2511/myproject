import React from 'react';

const ProductCard = ({ imageSrc, title, price, reviews, stock }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-64 object-cover object-top"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm text-gray-500">Al Karam</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          <span className="text-gray-500 text-xs ml-2">{reviews} Customer Reviews</span>
        </div>
        <div className="mt-4">
          <span className="text-xl font-semibold">${price}</span>
          <span className="text-sm text-gray-500 ml-4">{stock} left in stock</span>
        </div>
      </div>
    </div>
  );
};

const ViewMorePage = () => {
  const products = [
    // Add your 30 product data here
    // Example:
    {
      imageSrc: 'https://example.com/image1.jpg',
      title: 'Product 1',
      price: '29.99',
      reviews: 12,
      stock: 5,
    },
    
    // Add more products similarly
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Our Full Collection</h1>
      <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            imageSrc={product.imageSrc}
            title={product.title}
            price={product.price}
            reviews={product.reviews}
            stock={product.stock}
          />
        ))}
      </div>
    </div>
  );
};

export default ViewMorePage; // Export the correct component
