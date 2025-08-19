import React from 'react';
import clsx from 'clsx';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Maxi1 from "/src/assets/Kurtiwith-Pant/IMG_1157.jpg"
import Bittu0809 from "/src/assets/Bittukurti/IMG_0809.jpg"
import KR0774 from "/src/assets/KurtiReliance/IMG_0774.jpg"
import PS1210 from "/src/assets/Plazzo-Set/IMG_1210.jpg"
import DTop0848 from '/src/assets/Digital-top/IMG_0848.jpg';
import CTop0854 from "/src/assets/Cotton-top/IMG_0854.jpg"
import WTop1290 from "/src/assets/Western-Top/IMG_1290.jpg"
import TS1307 from "/src/assets/TS/IMG_1307.jpg"
import Max1169 from '/src/assets/Maxi/IMG_1169.jpg';
import JG1300 from '/src/assets/Jeggings/IMG_1300.jpg';
import LG0905 from '/src/assets/Liggings/IMG_0905.jpg';
import NW0869 from '/src/assets/Night-Wear/IMG_0869.jpg';

const categories = [
  { name: 'Kurti with Pants', image: Maxi1 },
  { name: 'Bittu Maxi', image: Bittu0809 },
  { name: 'Kurti- Reliance Brand', image: KR0774 },
  { name: 'Plazzo Set', image: PS1210 },
  { name: 'Cotton Top', image: CTop0854 },
  { name: 'Digital Top', image: DTop0848},
  {name: 'Western Top', image: WTop1290},
  {name: 'TShirt', image: TS1307},
  {name: 'Maxi', image: Max1169},
  {name: 'Jeggings', image: JG1300},
  {name: 'Leggings', image: LG0905},
  { name: 'Night Wear', image: NW0869 },
  { name: 'Nighty', image: NW0869 },
];

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-3xl text-green-800"
    onClick={onClick}
  >
    <IoIosArrowBack />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-3xl text-green-800"
    onClick={onClick}
  >
    <IoIosArrowForward />
  </div>
);

const CategoryProductTab = ({ selectedTab, onSelect }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    centerMode: true,
  centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };
  
  return (
    <div className="relative px-6 py-6">
      <Slider {...settings}>
        {categories.map((cat) => (
          <div
            key={cat.name}
            onClick={() => onSelect(cat.name)}
            className="!w-[100px] !mx-[6px]  flex flex-col items-center cursor-pointer px-2"
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
                'text-sm font-medium transition text-center truncate w-[100px]',
                selectedTab === cat.name
                  ? 'text-[#33774b]'
                  : 'text-gray-800 hover:text-green-700'
              )}
            >
              {cat.name}
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategoryProductTab;
