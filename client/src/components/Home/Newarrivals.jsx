import React from 'react';


const NewArrivals = () => {
  const products = [
    
    {
      imageSrc: 'https://www.limelight.pk/cdn/shop/files/A0348ST-SML-565_1_-2PieceSilkSuit-Embroidered_Pret_330x.jpg?v=1727766918',
      title: 'Shiny Dress',
      price: '95.50',
      reviews: '(4.1k)',
      stock: '7',
    },
    {
      imageSrc: 'https://www.limelight.pk/cdn/shop/files/DSCF7929_330x.jpg?v=1725445729',
      title: 'Long Dress',
      price: '95.50',
      reviews: '(4.1k)',
      stock: '7',
    },
    {
      imageSrc: 'https://www.limelight.pk/cdn/shop/files/DSC09845_330x.jpg?v=1716375641',
      title: 'Full Sweater',
      price: '95.50',
      reviews: '(4.1k)',
      stock: '7',
    },
    {
      imageSrc: 'https://www.limelight.pk/cdn/shop/files/DSCF7264_3176a53e-a9e3-4849-8235-e9f2170da69d_330x.jpg?v=1725447001',
      title: 'White Dress',
      price: '95.50',
      reviews: '(4.1k)',
      stock: '7',
    },
    {
      imageSrc: 'https://www.limelight.pk/cdn/shop/files/DSCF7390_330x.jpg?v=1725447147',
      title: 'Colorful Dress',
      price: '95.50',
      reviews: '(4.1k)',
      stock: '7',
    },
    {
      imageSrc: 'https://www.limelight.pk/cdn/shop/files/39A3691_330x.jpg?v=1715578001',
      title: 'White Shirt',
      price: '95.50',
      reviews: '(4.1k)',
      stock: '7',
    },
  ];

  return (
    
    <div className="bg-gray-100 min-h-screen p-6 flex flex-col items-center">
      <div>
      <h1 className="text-3xl font-bold mb-4 py-5 text-black">NEW ARRIVALS</h1>
      
      </div>
      <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={product.imageSrc}
              alt={product.title}
              className="w-full h-64 object-cover object-top"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{product.title}</h2>
              <p className="text-sm text-gray-500">Al Karam</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                <span className="text-gray-500 text-xs ml-2">{product.reviews} Customer Reviews</span>
              </div>
              <div className="mt-4">
                <span className="text-xl font-semibold">${product.price}</span>
                <span className="text-sm text-gray-500 ml-4">{product.stock} left in stock</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-8 px-6 py-2 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 transition duration-300">
        View More
      </button>
    </div>
  );
};

export default NewArrivals;
