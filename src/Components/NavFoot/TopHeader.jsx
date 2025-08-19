import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "../../assets/HomeImg/Logo.png";
import { Search } from "lucide-react";
import Marquee from "react-fast-marquee";
import LogIn from "../../AdminLogin/LogIn";
import { useNavigate } from "react-router-dom";

const TopHeader = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="w-full font-family">
      {/* Top banner */}
      <div className="bg-green-700 ">
        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover={true}
          className="text-white text-base px-4 font-medium"
        >
          <p className="text-white px-4 md:px-20 py-3 text-center text-base">
            Elegant Wedding Collections for Women & Kids – Now with Special
            Discounts
          </p>
        </Marquee>
      </div>

      {/* Main section */}
      <div className="max-w-6xl mx-auto px-4 md:px-0 py-1 flex flex-col md:flex-row items-center justify-around gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Logo" className="h-24 w-24" />
          <p
            className="text-xl font-semibold bg-gradient-to-r from-[#32754c] 
          to-[#2a469e] bg-clip-text text-transparent"
          >
            Shri Shanmuga Textiles
          </p>
        </div>

        {/* Search */}
        {/* <div className="relative flex-grow max-w-lg w-full">
          <input
            type="text"
            placeholder="Search products"
            className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
        </div> */}

        {/* Icons
        <div className="flex items-center gap-6">
          <IoMdHeartEmpty className="text-2xl cursor-pointer text-gray-700" />
          <AiOutlineShoppingCart className="text-2xl cursor-pointer text-gray-700" />
          <FaRegUser className="text-2xl cursor-pointer text-gray-700" />
          <button onClick={handleLoginClick}
        className="bg-blue-600 text-white px-4 py-2 rounded"
        > LogIn</button>
        </div> */}
      </div>
    </div>
  );
};

export default TopHeader;
