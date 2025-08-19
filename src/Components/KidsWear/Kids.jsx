import React, { useState } from "react";
import BirthdayDresses from "./KidFrock";
import KidsCategory from "./KidsCategorytab/kidsCategory";
import KidFrock from "./KidFrock";
import KidCottonTop from "./KidCottonTop";
import KidPiece from "./KidPiece";
import KidLeggings from "./KidLeggings";
import BoyKid from "./BoyKid";


const categoryComponents = {
  "Kid Frock": <KidFrock />,
  'Kid Cotton Top': <KidCottonTop />,
  'Kid 3 Piece': <KidPiece />,
  'Kid Leggings': <KidLeggings />,
  'Boy Kid': <BoyKid />
  // Add more components if needed
};
const Kids = () => {
  const [selectedCategory, setSelectedCategory] = useState("Kid Frock");
  return (
    // Change px-10 to a responsive padding
    <div className="px-4 sm:px-10 py-8">
      {" "}
      {/* Adjusted padding */}
      <KidsCategory
        selectedTab={selectedCategory}
        onSelect={(cat) => setSelectedCategory(cat)}
      />
      <div className="my-4">{categoryComponents[selectedCategory] || null}</div>
    </div>
  );
};

export default Kids;
