import React from 'react';

// Define the EmbroideredUnstitched component
const EmbroideredUnstitched = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-8">EMBROIDERED UNSTITCHED</h1>
      <div className="flex space-x-12">
        {/* Daily Wear */}
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border border-gray-200">
            <img
              src="https://www.limelight.pk/cdn/shop/files/menu_embroidered-unstitched_daily-wear.png?v=17984298865370704281" // Add the link of the Daily Wear image here
              alt="Daily Wear"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-4 text-lg">DAILY WEAR</p>
        </div>

        {/* Glam */}
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border border-gray-200">
            <img
              src="https://www.limelight.pk/cdn/shop/files/menu_embroidered-unstitched_glam.png?v=14200543643372613231" // Add the link of the Glam image here
              alt="Glam"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-4 text-lg">GLAM</p>
        </div>

        {/* Signature */}
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border border-gray-200">
            <img
              src="https://www.limelight.pk/cdn/shop/files/menu_embroidered-unstitched_signature.png?v=1382984072874600662" // Add the link of the Signature image here
              alt="Signature"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-4 text-lg">SIGNATURE</p>
        </div>
      </div>
    </div>
  );
};

// Main Emboidered component
function Emboidered() {
  return (
    <div>
      <EmbroideredUnstitched />
    </div>
  );
}

export default Emboidered;
