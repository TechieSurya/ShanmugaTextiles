import React, { useState } from "react";
import CottonSaree from "./CottonSaree";
import SareesCategoryTabs from "./SareeCategoryTabs/SareesCategoryTabs";
import MysoreCotton from "./MysoreCotton";

import SilkSaree from "./SilkSaree";
import SareeComboOffer from "./SareeComboOffer";

const categoryComponents = {
  "Cotton Saree": <CottonSaree />,
  "Mysore Silk Cotton": <MysoreCotton />,
  "Silk Sarees": <SilkSaree />,
  "Saree Combo Offer": <SareeComboOffer />
  // Future: Add more like "Mysore Silk Cotton": <MysoreCotton />
};

// SareesCol.jsx
// ... (imports)

const SareesCol = () => {
  const [selectedCategory, setSelectedCategory] = useState("Cotton Saree");

  return (
    // Change px-10 to a responsive padding
    <div className="px-4 sm:px-10 py-8"> {/* Adjusted padding */}
      <SareesCategoryTabs
        selectedTab={selectedCategory}
        onSelect={(cat) => setSelectedCategory(cat)}
      />
      <div className="my-4">{categoryComponents[selectedCategory] || null}</div>
    </div>
  );
};



export default SareesCol;
