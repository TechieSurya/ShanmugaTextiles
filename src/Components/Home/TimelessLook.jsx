import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/HomeImg/Img-1.jpg";
import img2 from "../../assets/HomeImg/Img-2.jpg";
import img3 from "../../assets/HomeImg/Img-3.jpg";
import img4 from "../../assets/HomeImg/Img-4.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  {
    name: "Choli",
    img: img1,
  },
  {
    name: "Chudi Sets",
    img: img2,
  },
  {
    name: "Palazzo",
    img: img3,
  },
  {
    name: "Saree",
    img: img4,
  },
  {
    name: "Kurtis",
    img: "/assets/kurti.jpg",
  },
];

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow cursor-pointer z-10"
  >
    <FaArrowLeft />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow cursor-pointer z-10"
  >
    <FaArrowRight />
  </div>
);

const TimelessLook = () => {
    const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};
  return (
    <div className="font-family bg-slate-50">
    <div className="max-w-6xl mx-auto px-4 py-10 ">
      <div className="max-w-6xl mx-auto px-4 py-10 text-center ">
        <h1 className="text-xl md:text-2xl font-semibold text-green-700 mb-4">
            Timeless Looks for Women</h1>
        <p className="text-gray-800 text-md mb-6 leading-loose">
          Explore our curated collection of lehengas, chudi sets, kurti combos,
          and more <br />— crafted for every celebration and everyday style..
        </p>
      </div>

      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="px-2">
            <div className="rounded-xl overflow-hidden shadow-md bg-white">
              <img src={item.img} alt={item.name} className="w-full h-72 object-contain" />
              <p className="text-center text-lg font-medium py-3">{item.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default TimelessLook;
