import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Aari from "/src/assets/HomeImg/Aariwork.jpg";
import Banner from "/src/assets/HomeImg/Banner2.jpg";
import clsx from 'clsx';

const sareeTabs = [
  { name: "Cotton Saree", image: Aari, path: "/sarees/cotton-saree" },
  { name: "Silk Sarees", image: Banner, path: "/sarees/silk-sarees" },
  {
    name: "Mysore Silk Cotton",
    image: Aari,
    path: "/sarees/Mysore-Silk-Cotton",
  },
  {
    name: "Saree Combo Offer",
    image: Banner,
    path: "/sarees/Saree-Combo-Offer",
  },
];

// SareesCategoryTabs.jsx
const SareesCategoryTabs = ({ selectedTab, onSelect }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-6 px-4"> {/* Added px-4 here */}
      {sareeTabs.map((cat) => (
        <div
          key={cat.name}
          onClick={() => onSelect(cat.name)}
          className="flex flex-col items-center space-y-2 cursor-pointer"
        >
          <div
            className="p-[2px] rounded-full transition"
            style={{
              background:
                selectedTab === cat.name
                  ? '#33774b'
                  : 'linear-gradient(to bottom, #33774b, #2c518c)',
            }}
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-20 h-20 object-cover rounded-full border-4 border-white"
            />
          </div>
          <button
            className={clsx(
              'text-sm font-medium transition',
              selectedTab === cat.name
                ? 'text-[#33774b]'
                : 'text-gray-800 hover:text-green-700'
            )}
          >
            {cat.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default SareesCategoryTabs;
