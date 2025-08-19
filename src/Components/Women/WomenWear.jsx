import React, { useState } from 'react';
import CategoryProductTab from './CategoryTabs/CategoryProductTab';
import KurtiwithPants from './KurtiwithPants';
import BittuKurti from './BittuKurti';
import KurtiReliance from './KurtiReliance';
import PlazzoSet from './PlazzoSet';
import CottonTop from './CottonTop';
import DigitalTop from './DigitalTop';
import WesternTop from './WesternTop';
import TShirt from './TShirt';
import MaxiTops from './MaxiTops';
import Jeggings from './Jeggings';
import Leggings from './Leggings';
import NightWear from './NightWear';
import Nighty from './Nighty';
// import KurtiMaxi from './KurtiMaxi';
// import UmbrellaFrocks from './UmbrellaFrocks';

const categoryComponents = {
  'Kurti with Pants': <KurtiwithPants />,
  'Bittu Maxi': <BittuKurti />,
  'Kurti- Reliance Brand': <KurtiReliance />,
  'Plazzo Set' : <PlazzoSet />,
  'Cotton Top': <CottonTop />,
  'Digital Top': <DigitalTop />,
  'Western Top': <WesternTop />,
  'TShirt': <TShirt />,
  'Maxi': <MaxiTops />,
  'Jeggings': <Jeggings />,
  'Leggings': <Leggings />,
  'Night Wear': <NightWear/>,
  'Nighty' : <Nighty />,
  // 'Kurti Maxi': <KurtiMaxi />,
  // 'Umbrella Frocks': <UmbrellaFrocks />,
};

const WomenWear = () => {
  const [selectedCategory, setSelectedCategory] = useState('Kurti with Pants'); // ✅ Default category

  return (
    <div className="px-10 py-8">
      <CategoryProductTab
        selectedTab={selectedCategory}
        onSelect={(cat) => setSelectedCategory(cat)}
      />

      <div className="my-4">
        {categoryComponents[selectedCategory] || (
          <p className="text-center text-gray-500">No products in this category.</p>
        )}
      </div>
    </div>
  );
};

export default WomenWear;
