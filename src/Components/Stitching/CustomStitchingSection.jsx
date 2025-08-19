import React from 'react';
import { Truck, ScissorsSquare, BadgeDollarSign } from 'lucide-react';
import { motion } from "framer-motion";

const CustomStitchingSection = () => {
  return (
    <section className="text-center py-12 px-6 md:px-16">
      {/* Headings */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        Masters of Custom Stitching & Design
      </h2>
      <p className="text-green-600 font-medium mb-4">
        Your Dream Outfit Starts Here
      </p>

      {/* Description */}
      <p className="max-w-5xl mx-auto text-gray-700 text-base md:text-md mb-10 leading-loose">
        Sree Shanmuga Textiles offers expert tailoring services that combine tradition with modern craftsmanship. 
        Our skilled team specializes in custom stitching, Aari embroidery, alterations, and personalized outfit design — tailored to your unique needs. 
        With a strong focus on quality and perfect fit, we’ve become a trusted name for beautifully stitched ethnic wear for women and children.
      </p>

      {/* Icons with Features */}
      {/* Icons with Features */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-6 text-center">
  <div className="flex flex-col items-center space-y-2">
   <motion.div
  className="text-4xl mb-2"
  animate={{ x: [0, 5, -5, 0] }}
  transition={{ repeat: Infinity, duration: 2 }}
>
  🚚
</motion.div>
    <h4 className="font-semibold text-lg">Timely Delivery</h4>
    <p className="text-gray-600 text-sm mt-1">Fast, reliable stitching for every occasion.</p>
  </div>

  <div className="flex flex-col items-center space-y-2">
    <div className="text-4xl mb-2">👗</div>
    <h4 className="font-semibold text-lg">Tailored Elegance</h4>
    <p className="text-gray-600 text-sm mt-1">Premium fit and finish by expert tailors & Aari artisans.</p>
  </div>

 <div className="flex flex-col items-center space-y-2">
      <motion.div
        className="text-4xl mb-2"
        animate={{ rotate: [0, 360] }}
        transition={{
          repeat: Infinity,
          repeatDelay: 5,         // 5 seconds pause after each full rotation
          duration: 4,            // 4 seconds for full slow rotation
          ease: "linear",
        }}
      >
        💵
      </motion.div>

      <h4 className="font-semibold text-lg">Affordable Prices</h4>
      <p className="text-gray-600 text-sm mt-1 text-center max-w-[220px]">
        Boutique style, budget-friendly price.
      </p>
    </div>
</div>
    </section>
  );
};

export default CustomStitchingSection;
