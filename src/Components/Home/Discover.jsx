import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Maxi1 from "../../assets/Kurtiwith-Pant/IMG_1157.jpg"
import Maxi2 from "../../assets/Kurtiwith-Pant/IMG_1158.jpg"
import Maxi3 from "../../assets/Kurtiwith-Pant/IMG_1159.jpg"
import Maxi4 from "../../assets/Kurtiwith-Pant/IMG_1160.jpg"
import Bittu0805 from "../../assets/Bittukurti/IMG_0805.jpg"
import Bittu0808 from "../../assets/Bittukurti/IMG_0808.jpg"
import Bittu0812 from "../../assets/Bittukurti/IMG_0812.jpg"
import Bittu0815 from "../../assets/Bittukurti/IMG_0815.jpg"
import KR0769 from "../../assets/KurtiReliance/IMG_0769.jpg"
import KR0772 from "../../assets/KurtiReliance/IMG_0772.jpg"
import KR0776 from "../../assets/KurtiReliance/IMG_0776.jpg"
import KR0780 from "../../assets/KurtiReliance/IMG_0780.jpg"
import PS1200 from "../../assets/Plazzo-Set/IMG_1200.jpg"
import PS1201 from "../../assets/Plazzo-Set/IMG_1201.jpg"
import PS1202 from "../../assets/Plazzo-Set/IMG_1202.jpg"
import PS1203 from "../../assets/Plazzo-Set/IMG_1203.jpg"
import CT0851 from "../../assets/Cotton-top/IMG_0851.jpg"
import CT0852 from "../../assets/Cotton-top/IMG_0852.jpg"
import CT0856 from "../../assets/Cotton-top/IMG_0856.jpg"
import CT0858 from "../../assets/Cotton-top/IMG_0858.jpg"

const categories = [
  "Kurti with Pants",
  "Bittu Maxi",
  "Kurti- Reliance Brand",
  "Plazzo Set",
  "Cotton Top",
  "Western Tops",
  "T-Shirts",
];

const allProducts = {
  "Kurti with Pants": [
    {
      title: "Kurti with Pants Green Color",
      price: "₹ 2,000.00",
      image: Maxi1,
    },
    {
      title: "Kurti with Pants Blue Color",
      price: "₹ 2,000.00",
      image: Maxi2,
    },
    { title: "Kurti with Pants Red Color", price: "₹ 2,500.00", image: Maxi3 },
    {
      title: "Kurti with Pants Maroon Color",
      price: "₹ 1,000.00",
      image: Maxi4,
    },
  ],
  "Bittu Maxi": [
    {
      title: "Kurti with Pants Maroon",
      price: "₹ 1,000.00",
      image: Bittu0805,
    },
    {
      title: "Kurti with Pants",
      price: "₹ 1,000.00",
      image: Bittu0808,
    },
    { title: "Floral Maxi Dress", price: "₹ 1,800.00", image: Bittu0812 },
    { title: "Printed Maxi Kurti", price: "₹ 2,200.00", image: Bittu0815 },
    
  ],
  "Kurti- Reliance Brand": [
    { title: "Cotton Night Suit", price: "₹ 1,200.00", image: KR0769 },
    { title: "Silk Night Set", price: "₹ 2,000.00", image: KR0772 },
     { title: "Cotton Night Suit", price: "₹ 1,200.00", image: KR0776 },
      { title: "Cotton Night Suit", price: "₹ 1,200.00", image: KR0780 },
  ],
  "Plazzo Set": [
    { title: "Cotton Night Suit", price: "₹ 1,200.00", image: PS1200 },
    { title: "Silk Night Set", price: "₹ 2,000.00", image: PS1201 },
     { title: "Cotton Night Suit", price: "₹ 1,200.00", image: PS1202 },
      { title: "Cotton Night Suit", price: "₹ 1,200.00", image: PS1203 },
  ],
  "Cotton Top": [
    { title: "Cotton Night Suit", price: "₹ 1,200.00", image: CT0858 },
    { title: "Silk Night Set", price: "₹ 2,000.00", image: CT0856 },
     { title: "Cotton Night Suit", price: "₹ 1,200.00", image: CT0852 },
      { title: "Cotton Night Suit", price: "₹ 1,200.00", image: CT0851  },
  ],
};

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-3xl text-green-800"
    onClick={onClick}
  >
    <IoIosArrowBack />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-3xl text-green-800"
    onClick={onClick}
  >
    <IoIosArrowForward />
  </div>
);

const Discover = () => {
  const [activeTab, setActiveTab] = useState("Kurti with Pants");

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
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
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="w-full px-4 py-10 font-family">
      {/* Title */}
      <div className="flex items-center justify-center gap-4 mb-10">
          <div className="w-20 border-t border-black"></div>
          <h2 className="text-xl font-semibold text-center whitespace-nowrap">
           DISCOVER STYLES FOR WOMEN’S
          </h2>
          <div className="w-20 border-t border-black"></div>
        </div>

      {/* Tabs */}
      <div className="flex justify-center md:gap-10 gap-4 flex-wrap mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`pb-1 border-b-2 font-medium ${
              activeTab === cat
                ? "border-green-600 text-green-600  cursor-pointer"
                : "border-transparent text-gray-600  cursor-pointer"
            } hover:text-green-600 transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Carousel */}
      <Slider {...settings}>
        {allProducts[activeTab].map((product, index) => (
          <div key={index} className="p-2">
            <div className="bg-white w-[278px] mx-auto">
              <img
                src={product.image}
                alt={product.title}
                className="w-[278px] h-[367px] object-cover rounded-[25px]"
              />
              <div className="p-4">
                <h3 className="font-sm md:text-md text-sm ">{product.title}</h3>
                <p className="text-gray-600 mt-1 md:text-md text-sm">{product.price}</p>
                <button className="mt-4 px-4 w-full py-2 border border-black rounded-full
                 hover:bg-green-800 hover:text-white transition md:text-md text-sm">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Discover;
