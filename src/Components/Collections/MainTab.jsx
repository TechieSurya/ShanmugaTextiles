import React, { useState } from 'react';
import MomDaughter from './MomDaughter';
import MomDau from "../../assets/Collections/MomDau.jpg"
import parrty from "../../assets/Collections/Party.jpg"
import WeddingCollections from './WeddingCollections';

const mainTabs = [
  {
    name: 'Mom & Daughter Combo',
    image: MomDau,
  },
  {
    name: 'Wedding & Family Function',
    image: parrty,
  },
];
const MainTab = () => {
  const [mainTab, setMainTab] = useState('Mom & Daughter Combo');

  return (
    <div className="p-6 font-family">
      {/* Main Tabs */}
      <div className="flex justify-center space-x-8 mb-6">
  {mainTabs.map((tab) => (
    <button
      key={tab.name}
      onClick={() => setMainTab(tab.name)}
      className="flex flex-col items-center space-y-2 focus:outline-none"
    >
      <img
        src={tab.image}
        alt={tab.name}
        className={`w-24 h-24 object-cover rounded-full border-4 transition ${
          mainTab === tab.name ? 'border-green-700' : 'border-gray-300'
        }`}
      />
      <span
        className={`text-sm font-semibold ${
          mainTab === tab.name ? 'text-green-700' : 'text-gray-800'
        }`}
      >
        {tab.name}
      </span>
    </button>
  ))}
</div>


      {/* Conditional Rendering */}
      {mainTab === 'Mom & Daughter Combo' ? (
  <MomDaughter />
) : (
  <WeddingCollections />
)}
    </div>
  );
};

export default MainTab;
