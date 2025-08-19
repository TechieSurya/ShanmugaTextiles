import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaBox,
  FaList,
  FaUser,
  FaStar,
  FaBars,
  FaTimes,
  FaComments,
  FaGift,
  FaChartBar,
  FaCog,
  FaCalendarDay
} from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";


const Sidebar = ({ active, setActive }) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar open/close

  const menu = [
    { name: "Product Management", icon: FaBox },
    { name: "Daily Collection", icon: FaCalendarDay },
    { name: "Reviews & Ratings", icon: FaStar },
    { name: "Slider", icon: FaComments },
    { name: "Logout", icon: BiLogOutCircle },
  ];

  return (
    <>
      <div className="relative">
        {" "}
        {/* Adjusted positioning */}
        <button
          onClick={() => setIsOpen(true)}
          className="text-gray-700 p-2 rounded-md bg-white shadow-md md:hidden"
        >
          <FaBars size={24} />
        </button>
      </div>

      {/* Overlay for when sidebar is open in mobile view */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-50 bg-opacity-50 z-40 sm:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar - conditionally rendered and styled for mobile */}
      <aside
        className={`fixed inset-y-0 left-0 w-60 bg-green-700 shadow-lg py-5 px-2 z-50 transform  ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out
                   sm:relative sm:translate-x-0 sm:w-60 sm:h-screen sm:bg-green-700 `}
      >
        {/* Close button for mobile view (inside the opened sidebar) */}
        <div className="flex justify-end mb-8 sm:hidden">
          <button onClick={() => setIsOpen(false)} className="text-white p-2">
            <FaTimes size={24} />
          </button>
        </div>

        {menu.map((item) => {
          const IconComponent = item.icon; // Get the actual icon component
          return (
            <button
              key={item.name}
              onClick={() => {
                setActive(item.name);
                setIsOpen(false); // Close sidebar on item click for mobile
              }}
              className={`w-full flex items-center gap-4 px-1 py-3 mb-2 rounded-md text-base ${
                active === item.name
                  ? "bg-white text-green-700"
                  : "hover:bg-green-600 text-white"
              }`}
            >
              <IconComponent size={20} /> {/* Render the icon */}
              {item.name}
            </button>
          );
        })}
      </aside>
    </>
  );
};

export default Sidebar;
