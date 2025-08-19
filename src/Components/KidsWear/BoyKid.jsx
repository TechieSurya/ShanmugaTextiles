import React, { useState } from "react";
import FilterSidebar from "../Women/FilterSidebar";
import PreviouslyExplored from "../Women/PreviouslyExplored";
import BK1190 from '/src/assets/Boy-Kid/IMG_1190.jpg';
import BK1191 from '/src/assets/Boy-Kid/IMG_1191.jpg';
import BK1192 from '/src/assets/Boy-Kid/IMG_1192.jpg';
import BK1193 from '/src/assets/Boy-Kid/IMG_1193.jpg';
import BK1194 from '/src/assets/Boy-Kid/IMG_1194.jpg';
import BK1195 from '/src/assets/Boy-Kid/IMG_1195.jpg';
import BK1196 from '/src/assets/Boy-Kid/IMG_1196.jpg';
import BK1197 from '/src/assets/Boy-Kid/IMG_1197.jpg';
import BK1198 from '/src/assets/Boy-Kid/IMG_1198.jpg';
import BK1199 from '/src/assets/Boy-Kid/IMG_1199.jpg';

const BoyKid = () => {
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
      title: "Yellow Shirt & Black Pant Set",
      price: 950,
      oldPrice: 1800,
      image: BK1190,
      size: '4-5Y',
      color: 'Yellow & Black',
      sleeve: 'Half Sleeve',
      fabric: 'Cotton Blend',
      discount: 47,
    },
    {
      id: 2,
      title: "Printed Shirt & Denim Jeans",
      price: 1100,
      oldPrice: 2000,
      image: BK1191,
      size: '5-6Y',
      color: 'Grey & Blue',
      sleeve: 'Full Sleeve',
      fabric: 'Cotton & Denim',
      discount: 45,
    },
    {
      id: 3,
      title: "Blue Shirt & Jeans Set",
      price: 1000,
      oldPrice: 1900,
      image: BK1192,
      size: '2-3Y',
      color: 'Blue',
      sleeve: 'Full Sleeve',
      fabric: 'Denim',
      discount: 47,
    },
    {
      id: 4,
      title: "Red Shirt & Denim Jeans",
      price: 1200,
      oldPrice: 2200,
      image: BK1193,
      size: '6-7Y',
      color: 'Red & Blue',
      sleeve: 'Full Sleeve',
      fabric: 'Cotton & Denim',
      discount: 45,
    },
    {
      id: 5,
      title: "Red Jacket & Blue Jeans",
      price: 1300,
      oldPrice: 2400,
      image: BK1194,
      size: '7-8Y',
      color: 'Red & Blue',
      sleeve: 'Long Sleeve',
      fabric: 'Denim',
      discount: 46,
    },
    {
      id: 6,
      title: "Orange Shirt & Red Jeans",
      price: 1150,
      oldPrice: 2100,
      image: BK1195,
      size: '4-5Y',
      color: 'Orange & Red',
      sleeve: 'Half Sleeve',
      fabric: 'Cotton Blend',
      discount: 45,
    },
    {
      id: 7,
      title: "White Shirt & Blue Jeans",
      price: 1050,
      oldPrice: 1950,
      image: BK1196,
      size: '5-6Y',
      color: 'White & Blue',
      sleeve: 'Full Sleeve',
      fabric: 'Cotton & Denim',
      discount: 46,
    },
    {
      id: 8,
      title: "Yellow Shirt & Denim Set",
      price: 980,
      oldPrice: 1850,
      image: BK1197,
      size: '3-4Y',
      color: 'Yellow & Blue',
      sleeve: 'Half Sleeve',
      fabric: 'Cotton & Denim',
      discount: 47,
    },
    {
      id: 9,
      title: "Pink Shirt & Shorts Set",
      price: 850,
      oldPrice: 1600,
      image: BK1198,
      size: '2-3Y',
      color: 'Pink & Blue',
      sleeve: 'Half Sleeve',
      fabric: 'Cotton',
      discount: 47,
    },
    {
      id: 10,
      title: "Green Jacket & Brown Pants",
      price: 1250,
      oldPrice: 2300,
      image: BK1199,
      size: '6-7Y',
      color: 'Green & Brown',
      sleeve: 'Long Sleeve',
      fabric: 'Blended',
      discount: 46,
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

    return (
      priceMatch &&
      sizeMatch &&
      colorMatch &&
      sleeveMatch &&
      fabricMatch &&
      discountMatch
    );
  });
  return (
    <div className="px-6 py-6 font-family">
      {/* ✅ Title on top */}
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold mb-1">Kids Wear</h2>
        <h4 className="text-green-700 font-medium">Boy Kid</h4>
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
            onDiscountChange={(val) =>
              setFilters({ ...filters, discount: val })
            }
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
                  <h3 className="font-sm  mt-4 md:text-md text-sm">{product.title}</h3>
                  <div className="flex space-x-4">
                    <div className="text-gray-900 mt-1 md:text-md text-sm">₹{product.price}</div>
                    <div className=" text-gray-500 mt-1 line-through flex md:text-md text-sm">
                      ₹{product.oldPrice}
                    </div>
                  </div>
                  <button className="mt-4 px-4 w-full py-2 border border-green-800 md:text-md text-sm
                  text-green-800 rounded-full hover:bg-green-800 hover:text-white transition">
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No products found.
            </p>
          )}
        </div>
      </div>
      <PreviouslyExplored />
    </div>
  );
};

export default BoyKid;
