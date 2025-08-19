import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { path } from "framer-motion/client";
import Logo from "../../assets/HomeImg/Logo.png";


const navItems = [
  { name: "Home", path: "/" },
  {
    name: "Sarees", path:"/sarees",
   
    submenu: [
      { name: "Cotton Saree", path: "/sarees/cotton-saree" },
      { name: "Silk Sarees", path: "/sarees/silk-sarees" },
      { name: "Mysore Silk Cotton", path: "/sarees/Mysore-Silk-Cotton" },
      { name: "Saree Combo Offer", path: "/sarees/Saree-Combo-Offer" },
    ],
  },
  {
    name: "Kurtis & Sets",
    
    submenu: [
      { name: "Kurti with Pants", path: "/kurtis-sets/kurtis-pants" },
      { name: "Kurti- Reliance Brand", path: "/kurtis-sets/kurti-reliance-brand" },
      { name: "Plazzo Set", path: "/kurtis-sets/plazzo-set" },
    ],
  },
  {
    name: "Maxi Dresses",
    path: "/maxi-dresses",
    submenu: [
      { name: "Bittu Maxi", path: "/women/kurti-maxi" },
      { name: "Maxi", path: "/women/maxi-tops" },
    ],
  },
  {
    name: "Tops & Tees",
    path: "/tops",
    submenu: [
      { name: "Cotton Top", path: "/women/cotton-top" },
      { name: "Digital Top", path: "/women/digital-top" },
      { name: "Western Top", path: "/women/western-top" },
      { name: "T-Shirt", path: "/women/t-shirt" },
      { name: "Jeggings", path: "/women/jeggings" },
    ],
  },
  {
    name: "Night Wear",
    path: "/night-wear",
    submenu: [
      { name: "Night Wear", path: "/women/night-wear" },
      { name: "Nighty", path: "/women/nighty" },
    ],
  },
  {
    name: "Blouse",
    path: "/blouse",
  },

  {
    name: "Kids Wear",
    path: "/kids",
     sections: [
      {
        title: "Girl Kid",
        items: [
          { name: "Kid Frock", path: "/kids/kid-frock" },
      { name: "Kid Cotton Top", path: "/kids/kid-cotton-top" },
      { name: "Kid 3 Piece", path: "/kids/kid-3-piece" },
      { name: "Kid Leggings", path: "/kids/kid-leggings" },
        ],
      },
      {
        title: "Boy Kid",
        items: [
          { name: "Shirt & Jean", path: "/kids/jean-shirt" },
        ],
      },
      ],
  },

  { name: "Contact", path: "/contact" },
  
];

{/* {
    name: "Collections",
    path: "/collections",
    sections: [
      {
        title: "Mom & Kid Combo",
        items: [
          { name: "Combo Sets", path: "/collections/mom-kid/combo-sets" },
          { name: "Festive Wear", path: "/collections/mom-kid/festive-wear" },
        ],
      },
      {
        title: "Wedding Party",
        items: [
          { name: "Lehengas", path: "/collections/wedding/lehenga" },
          { name: "Bridal Sarees", path: "/collections/wedding/bridal-sarees" },
        ],
      },
    ],
  },*/}

const NavbarLink = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubIndex, setOpenSubIndex] = useState(null);

  useEffect(() => {
    const currentPath = location.pathname;
    for (let item of navItems) {
      if (item.path === currentPath) return setActiveItem(item.name);
      if (item.submenu && item.submenu.some((sub) => sub.path === currentPath))
        return setActiveItem(item.name);
      if (
        item.sections &&
        item.sections.some((sec) =>
          sec.items.some((sub) => sub.path === currentPath)
        )
      )
        return setActiveItem(item.name);
    }
  }, [location.pathname]);

  const toggleSubmenu = (index) => {
    setOpenSubIndex(openSubIndex === index ? null : index);
  };

  return (
    <nav className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center gap-6 py-4">
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              <div
                className={`flex items-center gap-1 text-sm font-medium px-4 py-2 cursor-pointer 
                  rounded transition-all duration-200 ${
                  activeItem === item.name
                    ? "bg-green-700 text-white"
                    : "text-gray-800 hover:text-green-700"
                }`}
              >
                <Link to={item.path || "#"} className="flex items-center gap-1">
                  {item.name}
                  {(item.submenu || item.sections) && (
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-300 group-hover:rotate-180"
                    />
                  )}
                </Link>
              </div>
              {(item.submenu || item.sections) && (
                <div className="absolute opacity-0 invisible group-hover:opacity-100  
                group-hover:visible transition-all duration-200 top-full left-0 bg-white border
                 border-green-600 shadow-lg rounded-md p-4 mt-2 min-w-[220px] z-50 
                 before:content-[''] before:absolute before:top-[-8px] before:left-0 before:right-0
                  before:h-2 before:bg-transparent ">
                  {item.submenu && (
                    <ul
                className={`gap-2 ${
                item.name === "Women Wear"
                ? "grid grid-cols-2 w-[400px]"
                : "space-y-1"
  }`}
>
  {item.submenu.map((sub, i) => (
    <li key={i}>
      <Link
        to={sub.path}
        className="text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 py-2 px-3 block rounded transition-colors duration-150"
      >
        {sub.name}
      </Link>
    </li>
  ))}
</ul>
                  )}
                  {item.sections &&
                    item.sections.map((section, i) => (
                      <div key={i} className="mb-3 last:mb-0">
                        <h4 className="text-sm font-semibold text-green-700 mb-2 border-b border-green-100 pb-1">
                          {section.title}
                        </h4>
                        <ul className="space-y-1">
                          {section.items.map((sub, j) => (
                            <li key={j}>
                              <Link
                                to={sub.path}
                                className="text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 py-2 px-3 block rounded transition-colors duration-150"
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex justify-end py-4">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-150"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-green-600 py-4 space-y-2">
            {navItems.map((item, index) => (
              <div key={index} className="px-4">
                <div
                  className={`flex flex-col items-center text-sm font-medium py-2 cursor-pointer transition-all duration-150 ${
                    activeItem === item.name
                      ? "bg-green-700 text-white rounded"
                      : "text-gray-800 hover:text-green-700 hover:bg-green-50 rounded"
                  }`}
                  onClick={() => {
                    if (item.submenu || item.sections) {
                      toggleSubmenu(index);
                      setActiveItem(item.name);
                    } else {
                      setActiveItem(item.name);
                      setMobileOpen(false);
                    }
                  }}
                >
                  <div className="flex items-center justify-center gap-1">
                    <Link to={item.path || "#"}>{item.name}</Link>
                    {(item.submenu || item.sections) &&
                      (openSubIndex === index ? (
                        <ChevronUp size={16} className="ml-1" />
                      ) : (
                        <ChevronDown size={16} className="ml-1" />
                      ))}
                  </div>
                </div>
                {openSubIndex === index && (
                  <div className="mt-2 space-y-1 animate-in slide-in-from-top-2 duration-200">
                    {item.submenu &&
                      item.submenu.map((sub, i) => (
                        <Link
                          key={i}
                          to={sub.path}
                          className="text-sm text-gray-600 hover:text-green-700 hover:bg-green-50 text-center block py-2 px-3 rounded transition-colors duration-150"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    {item.sections &&
                      item.sections.map((section, i) => (
                        <div key={i} className="py-1">
                          <h4 className="text-sm font-semibold text-green-700 mt-2 mb-1 text-center">
                            {section.title}
                          </h4>
                          {section.items.map((sub, j) => (
                            <Link
                              key={j}
                              to={sub.path}
                              className="text-sm text-gray-600 hover:text-green-700 hover:bg-green-50 text-center block py-2 px-3 rounded transition-colors duration-150"
                              onClick={() => setMobileOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarLink;
