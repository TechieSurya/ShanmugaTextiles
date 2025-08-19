import React from 'react'
import OfferImg from "../../assets/HomeImg/BgImg.jpg";
import Inset from "../../assets/HomeImg/OfferImg.png";

const Offersection = () => {
  return (
    <div className="font-family flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-2 bg-white rounded-xl">
      {/* Left Side - Image */}
    <div className="w-full md:w-1/2 flex justify-center relative">
      
    <img
    src={OfferImg}
    alt="Offer"
    className="w-auto h-auto rounded-[23px] object-contain"
    />
  <img src={Inset} alt="" className='absolute z-50 inset-0 object-cover scale-x-[-1] top-2'/>

      </div>

      {/* Right Side - Text */}
      <div className="w-full md:w-1/2 md:pl-10 text-center md:text-left">
        <div className=" mx-auto text-center px-4 py-10">
      {/* 1 for ₹200 Offer */}
      <h2 className="text-xl md:text-2xl font-bold italic mb-2 leading-loose">
        Get Any <span className="font-bold">1</span> for <span className="font-bold">₹200</span>
      </h2>
      <p className="text-gray-800 text-lg font-semibold mb-1 leading-loose">
        Budget-friendly fashion you’ll love — grab your <br />
        favorite for just ₹200!
      </p>
      <p className="text-gray-800 text-lg font-semibold mb-6 leading-loose">
        One stylish pick, unbelievable price — don’t miss <br />
        out!
      </p>

      {/* 3 for ₹500 Offer */}
      <h2 className="text-xl md:text-2xl font-bold italic mb-2 leading-loose">
        Get Any <span className="font-bold">3</span> for <span className="font-bold">₹500</span>
      </h2>
      <p className="text-gray-800 text-lg font-semibold mb-1 leading-loose">
        Style meets savings — mix & match your favorites <br />
        for just ₹500.
      </p>
      <p className="text-gray-800 text-lg font-semibold mb-6 leading-loose">
        Pick any 3 trendy pieces and refresh your wardrobe affordably.<br />
        
      </p>

      {/* Shop Button */}
      <button className="bg-green-700 text-white font-semibold px-10 py-2 rounded-md hover:bg-green-800 transition">
        Shop Now
      </button>
    </div>
      </div>
    </div>
  )
}

export default Offersection