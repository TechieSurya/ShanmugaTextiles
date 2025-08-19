import React, { useState } from "react";
import FilterSidebar from "../Women/FilterSidebar";

const momDaughterSubTabs = [
  "Lehenga set",
  "Chudi Set",
  "Partywear Gowns",
  "Night Wear",
];

const MomDaughter = () => {
  const [subTab, setSubTab] = useState("Lehenga set");
  const [filters, setFilters] = useState({
    price: null,
    size: null,
    color: null,
    sleeve: null,
    fabric: null,
    discount: null,
  });

  const allProducts = {
    "Lehenga set": [
      {
        id: 1,
        title: "Mom & Daughter Lehenga set",
        image: "/src/assets/Collections/MomDau.jpg",
        price: 500,
        oldPrice: 2500,
        size: "M",
        color: "Red",
        sleeve: "Full Sleeve",
        fabric: "Cotton",
        discount: 30,
      },
      {
        id: 2,
        title: "Mom & Daughter Lehenga set",
        image: "/src/assets/Collections/party.jpg",
        price: 1500,
        oldPrice: 1800,
        size: "L",
        color: "Green",
        sleeve: "Half Sleeve",
        fabric: "Silk",
        discount: 20,
      },
    ],
    "Chudi Set": [
      {
        id: 3,
        title: "Mom & Daughter Chudi set",
        image: "/src/assets/Collections/MomDau.jpg",
        price: 1200,
        oldPrice: 2000,
        size: "S",
        color: "Blue",
        sleeve: "Sleeveless",
        fabric: "Rayon",
        discount: 40,
      },
      {
        id: 4,
        title: "Mom & Daughter Chudi set",
        image: "/images/chudi1.jpg",
        price: 1200,
        oldPrice: 2000,
        size: "S",
        color: "Blue",
        sleeve: "Sleeveless",
        fabric: "Rayon",
        discount: 40,
      },
    ],
    "Partywear Gowns": [
      {
        id: 5,
        title: "Partywear Gown Combo",
        image: "/images/gown1.jpg",
        price: 1800,
        oldPrice: 2700,
        size: "M",
        color: "Black",
        sleeve: "Full Sleeve",
        fabric: "Linen",
        discount: 25,
      },
      {
        id: 6,
        title: "Partywear Gown Combo",
        image: "/src/assets/Collections/MomDau.jpg",
        price: 1800,
        oldPrice: 2700,
        size: "M",
        color: "Black",
        sleeve: "Full Sleeve",
        fabric: "Linen",
        discount: 25,
      },
      {
        id: 7,
        title: "Partywear Gown Combo",
        image: "/images/gown1.jpg",
        price: 1800,
        oldPrice: 2700,
        size: "M",
        color: "Black",
        sleeve: "Full Sleeve",
        fabric: "Linen",
        discount: 25,
      },
    ],
    "Night Wear": [
      {
        id: 8,
        title: "Mom & Daughter Night Wear",
        image: "/images/night1.jpg",
        price: 1100,
        oldPrice: 1800,
        size: "L",
        color: "White",
        sleeve: "Half Sleeve",
        fabric: "Cotton",
        discount: 15,
      },
      {
        id: 9,
        title: "Mom & Daughter Night Wear",
        image: "/src/assets/Collections/MomDau.jpg",
        price: 1100,
        oldPrice: 1800,
        size: "L",
        color: "White",
        sleeve: "Half Sleeve",
        fabric: "Cotton",
        discount: 15,
      },
    ],
  };

  const filteredProducts = (allProducts[subTab] || []).filter((p) => {
    const priceMatch = filters.price
      ? p.price >= filters.price.min && p.price <= filters.price.max
      : true;
    const sizeMatch = filters.size ? p.size === filters.size : true;
    const colorMatch = filters.color ? p.color === filters.color : true;
    const sleeveMatch = filters.sleeve ? p.sleeve === filters.sleeve : true;
    const fabricMatch = filters.fabric ? p.fabric === filters.fabric : true;
    const discountMatch = filters.discount ? p.discount >= filters.discount : true;

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
    <div className="mt-6 px-4 font-family max-w-7xl mx-auto">
      {/* Title */}
      <h2 className="text-2xl font-bold text-center text-green-800">
        Mom & Daughter Combo
      </h2>

      {/* Sub Tabs */}
      <div className="flex justify-center gap-4 mb-6 mt-4 flex-wrap">
        {momDaughterSubTabs.map((sub) => (
          <button
            key={sub}
            onClick={() => setSubTab(sub)}
            className={`text-sm font-semibold px-4 py-1 border rounded-full ${
              subTab === sub
                ? "bg-green-700 text-white"
                : "border-green-700 text-green-700"
            }`}
          >
            {sub}
          </button>
        ))}
      </div>

      {/* Sidebar Filter + Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-6">
        {/* Sidebar Filter */}
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

        {/* Product Cards */}
        <div className="col-span-1 md:col-span-3">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="p-2">
                  <div className="bg-white w-full max-w-xs mx-auto">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-[350px] object-cover rounded-[25px] border"
                    />
                    <h3 className="font-sm text-lg mt-4">{product.title}</h3>
                    <div className="flex space-x-4">
                      <div className="text-gray-900 mt-1">₹{product.price}</div>
                      <div className="text-gray-500 mt-1 line-through">₹{product.oldPrice}</div>
                    </div>
                    <button className="mt-4 px-4 w-full py-2 border border-green-800 text-green-800 rounded-full hover:bg-green-800 hover:text-white transition">
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
      </div>
    </div>
  );
};

export default MomDaughter;
