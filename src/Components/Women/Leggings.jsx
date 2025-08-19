import React, { useState } from 'react';
import FilterSidebar from './FilterSidebar';
import PreviouslyExplored from './PreviouslyExplored';
import LG0902 from '/src/assets/Liggings/IMG_0902.jpg';
import LG0903 from '/src/assets/Liggings/IMG_0903.jpg';
import LG0904 from '/src/assets/Liggings/IMG_0904.jpg';
import LG0905 from '/src/assets/Liggings/IMG_0905.jpg';
import LG0908 from '/src/assets/Liggings/IMG_0908.jpg'; 
import LG0909 from '/src/assets/Liggings/IMG_0909.jpg';
import LG0910 from '/src/assets/Liggings/IMG_0910.jpg';
import LG0911 from '/src/assets/Liggings/IMG_0911.jpg';
import LG0912 from '/src/assets/Liggings/IMG_0912.jpg';
import LG0913 from '/src/assets/Liggings/IMG_0913.jpg';


const Leggings = () => {
  const [filters, setFilters] = useState({
    price: null,
    size: null,
    color: null,
    sleeve: null,
    fabric: null,
    discount: null,
  });

  const allProducts = [
   {
      id: 1,
      title: "Pink Leggings",
      price: 550,
      oldPrice: 1000,
      image: LG0902,
      size: 'M',
      color: 'Pink',
      sleeve: 'None',
      fabric: 'Lycra',
      discount: 45,
    },
    {
      id: 2,
      title: "Off-White Leggings",
      price: 580,
      oldPrice: 1050,
      image: LG0903,
      size: 'L',
      color: 'Off-White',
      sleeve: 'None',
      fabric: 'Cotton Lycra',
      discount: 45,
    },
    {
      id: 3,
      title: "Orange Leggings",
      price: 550,
      oldPrice: 1000,
      image: LG0904,
      size: 'S',
      color: 'Orange',
      sleeve: 'None',
      fabric: 'Stretch Cotton',
      discount: 45,
    },
    {
      id: 4,
      title: "Light Green Leggings",
      price: 570,
      oldPrice: 1020,
      image: LG0905,
      size: 'M',
      color: 'Light Green',
      sleeve: 'None',
      fabric: 'Viscose Blend',
      discount: 44,
    },
    {
      id: 5,
      title: "Purple Leggings",
      price: 600,
      oldPrice: 1100,
      image: LG0908, // Mapped to IMG_0908 due to missing 0906, 0907
      size: 'L',
      color: 'Purple',
      sleeve: 'None',
      fabric: 'Lycra',
      discount: 45,
    },
    {
      id: 6,
      title: "Light Purple Leggings",
      price: 590,
      oldPrice: 1080,
      image: LG0909,
      size: 'XL',
      color: 'Light Purple',
      sleeve: 'None',
      fabric: 'Cotton',
      discount: 45,
    },
    {
      id: 7,
      title: "Orange Solid Leggings",
      price: 550,
      oldPrice: 1000,
      image: LG0910,
      size: 'M',
      color: 'Orange',
      sleeve: 'None',
      fabric: 'Poly Cotton',
      discount: 45,
    },
    {
      id: 8,
      title: "Magenta Leggings",
      price: 620,
      oldPrice: 1150,
      image: LG0911,
      size: 'L',
      color: 'Magenta',
      sleeve: 'None',
      fabric: 'Lycra',
      discount: 46,
    },
    {
      id: 9,
      title: "Light Blue Leggings",
      price: 580,
      oldPrice: 1050,
      image: LG0912,
      size: 'S',
      color: 'Light Blue',
      sleeve: 'None',
      fabric: 'Stretch Cotton',
      discount: 45,
    },
    {
      id: 10,
      title: "Red Leggings",
      price: 600,
      oldPrice: 1100,
      image: LG0913,
      size: 'M',
      color: 'Red',
      sleeve: 'None',
      fabric: 'Viscose Blend',
      discount: 45,
    },
    
  ];

  const filtered = allProducts.filter((p) => {
    const priceMatch = filters.price
      ? p.price >= filters.price.min && p.price <= filters.price.max
      : true;
    const sizeMatch = filters.size ? p.size === filters.size : true;
    const colorMatch = filters.color ? p.color === filters.color : true;
    const sleeveMatch = filters.sleeve ? p.sleeve === filters.sleeve : true;
    const fabricMatch = filters.fabric ? p.fabric === filters.fabric : true;
    const discountMatch = filters.discount
      ? parseInt(p.discount) >= parseInt(filters.discount)
      : true;

    return priceMatch && sizeMatch && colorMatch && sleeveMatch && fabricMatch && discountMatch;
  });

  return (
    <div className="px-6 py-6 font-family">
      {/* ✅ Title on top */}
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold mb-1">Women's Wear</h2>
        <h4 className="text-green-700 font-medium">Leggings </h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filters */}
        <div className="col-span-1">
          <FilterSidebar
            onPriceChange={(val) => setFilters({ ...filters, price: val })}
            onSizeChange={(val) => setFilters({ ...filters, size: val })}
            onColorChange={(val) => setFilters({ ...filters, color: val })}
            onSleeveChange={(val) => setFilters({ ...filters, sleeve: val })}
            onFabricChange={(val) => setFilters({ ...filters, fabric: val })}
            onDiscountChange={(val) => setFilters({ ...filters, discount: val })}
          />
        </div>

        {/* Products */}
        <div className="col-span-1 md:col-span-3 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.length > 0 ? (
            filtered.map((product) => (
              <div key={product.id} className="p-2">
                <div className="bg-white w-[278px] mx-auto">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-[278px] h-[350px] object-cover rounded-[25px]"
                />
                <h3 className="font-sm mt-4 md:text-md text-sm">{product.title}</h3>
                <div className='flex space-x-4'>
                  <div className="text-gray-900 mt-1 md:text-md text-sm">₹{product.price}</div>
                <div className=" text-gray-500 mt-1 line-through flex md:text-md text-sm">₹{product.oldPrice}</div>
                </div>
                <button className="mt-4 px-4 w-full py-2 border border-green-800 text-green-800 
                rounded-full hover:bg-green-800 hover:text-white transition md:text-md text-sm">
                  ADD TO CART
                </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">No products found.</p>
          )}
        </div>
      </div>
      <PreviouslyExplored/>
    </div>
  );
};

export default Leggings;
