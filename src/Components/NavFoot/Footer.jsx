import React from "react";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import Logo from '../../assets/HomeImg/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-white  pt-2 pb-10 font-family">
      {/* Top Gradient Line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-[#32754c]  to-[#8a4de8] mb-6" />
<div className="px-6 md:px-20">
      {/* Logo and Title */}
      <div className="flex items-center gap-3 mb-10">
        <img
          src={Logo} // replace with your image path
          alt="Logo"
          className="w-24 h-24 object-contain"
        />
        <h2 className="italic text-xl font-semibold bg-gradient-to-r from-[#32754c] 
        to-[#2a469e] bg-clip-text text-transparent"> Shri Shanmuga Textiles
        </h2>
      </div>

      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm text-gray-700">
        {/* Contact Us */}
        <div className="leading-loose">
          <h3 className="font-semibold text-black mb-2 text-xl">Contact Us</h3>
          <p className="flex items-start gap-1">
            <MapPin className="w-4 h-4 mt-1" />
            <span>
              Williams Road,<br />
              The Backside Of The Eye Foundation,<br />
              Cantonment, Trichy–1.
            </span>
          </p>
          <p className="mt-2 flex items-center gap-1">
            <Mail className="w-4 h-4" />
            contact@sreeshanmugatextiles.com
          </p>
          <p className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            7210295555, 9042157589
          </p>
          <p className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            Monday to Sunday 10am–8pm
          </p>
        </div>

        {/* Wholesale Enquiry */}
        <div className="leading-loose">
          <h3 className="font-semibold text-black mb-2 text-xl">Wholesale Enquiry</h3>
          <p className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            7210295555, 9042157589
          </p>
          <p className="flex items-center gap-1">
            <Mail className="w-4 h-4" />
            contact@sreeshanmugatextiles.com
          </p>
        </div>

        {/* Links */}
        <div className="leading-loose">
          <h3 className="font-semibold text-black mb-2 text-xl">Links</h3>
          <ul className="space-y-1">
            <li>Home</li>
            <li>Shop By Category</li>
            <li>Brands</li>
            <li>About Us</li>
            <li>Stitching Service</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Policy */}
        <div className="leading-loose">
          <h3 className="font-semibold text-black mb-2 text-xl">Policy</h3>
          <ul className="space-y-1">
            <li>Privacy Policy</li>
            <li>Exchange Policy</li>
          </ul>
        </div>
      </div>
      </div>
      {/* Bottom Copyright */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-200 pt-4">
        © {new Date().getFullYear()} Shri Shanmuga Textiles. All Rights Reserved. Designed & Developed by <a href="https://teknospot.in/" target="_blank" className="font-semibold">Tekno Spot</a>
      </div>
    </footer>
  );
};

export default Footer;
