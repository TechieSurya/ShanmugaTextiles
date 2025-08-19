import React from 'react'
import clsx from 'clsx';
import KF0901 from "/src/assets/Kid-frock/IMG_0901.jpg";
import KCT1187 from '/src/assets/Kid-CottonTop/IMG_1187.jpg';
import K3P0867 from '/src/assets/Kid-3Piece/IMG_0867.jpg';
import KL0886 from '/src/assets/Kid-liggines/IMG_0886.jpg';
import BK1198 from '/src/assets/Boy-Kid/IMG_1198.jpg';

const categories = [
  { name: "Kid Frock", image: KF0901 },
  { name: "Kid Cotton Top", image: KCT1187 },
  { name: "Kid 3 Piece", image: K3P0867 },
  { name: "Kid Leggings", image: KL0886 },
  { name: "Boy Kid", image: BK1198 },
  
];

const KidsCategory = ({ selectedTab, onSelect }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-6 font-family">
          {categories.map((cat) => (
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
  )
}

export default KidsCategory