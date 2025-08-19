import React, { useState } from "react";
import FilterSidebar from "../Women/FilterSidebar";

const momDaughterSubTabs = [
  "Designer Blouse & Saree",
  "Bridal Lehenga Choli",
  "Family Combo Dresses",
  "Aari Work Collections",
];

const WeddingCollections = () => {
  const [subTab, setSubTab] = useState("Designer Blouse & Saree");
  const [filters, setFilters] = useState({
    price: null,
    size: null,
    color: null,
    sleeve: null,
    fabric: null,
    discount: null,
  });

  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const allProducts = {
    "Designer Blouse & Saree": [
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
    "Bridal Lehenga Choli": [
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
    "Family Combo Dresses": [
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
    "Aari Work Collections": [
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
    <div className="mt-6 px-4">
      <h2 className="text-2xl font-bold text-center text-green-800">
        Wedding & Family Function
      </h2>

      <div className="md:hidden flex justify-between items-center mt-4 mb-6">
        <button
          onClick={() => setShowMobileFilter(true)}
          className="bg-green-800 text-white px-4 py-2 rounded flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 019 17v-3.586L3.293 6.707A1 1 0 013 6V4z"
            />
          </svg>
          <span className="text-sm font-medium">FILTER</span>
        </button>
        <button className="bg-gray-200 text-black px-4 py-2 rounded">
          SORT BY ⌄
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-6">
       {/* Left Sidebar (Desktop) */}
        <div className="hidden md:block col-span-1">
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

        <div className="col-span-1 md:col-span-3">
          <div className="flex justify-center gap-4 mb-6 flex-wrap">
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

          <div className="col-span-1 md:col-span-3 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="p-2">
                  <div className="bg-white w-[278px] mx-auto">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-[278px] h-[350px] object-cover rounded-[25px] border"
                    />
                    <h3 className="font-sm text-lg mt-4">{product.title}</h3>
                    <div className='flex space-x-4'>
                      <div className="text-gray-900 mt-1">₹{product.price}</div>
                      <div className=" text-gray-500 mt-1 line-through flex">₹{product.oldPrice}</div>
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

      {showMobileFilter && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex">
          <div className="w-72 bg-white h-full p-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Filters</h3>
              <button
                onClick={() => setShowMobileFilter(false)}
                className="text-2xl text-red-600 font-bold"
              >
                ×
              </button>
            </div>
            <FilterSidebar
              onPriceChange={(val) => setFilters({ ...filters, price: val })}
              onSizeChange={(val) => setFilters({ ...filters, size: val })}
              onColorChange={(val) => setFilters({ ...filters, color: val })}
              onSleeveChange={(val) => setFilters({ ...filters, sleeve: val })}
              onFabricChange={(val) => setFilters({ ...filters, fabric: val })}
              onDiscountChange={(val) => setFilters({ ...filters, discount: val })}
            />
          </div>
          <div className="flex-1" onClick={() => setShowMobileFilter(false)}></div>
        </div>
      )}
    </div>
  );
};

export default WeddingCollections;
