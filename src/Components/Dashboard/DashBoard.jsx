import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";

import { Bell } from "lucide-react";
import { FaSearch } from "react-icons/fa";
import Sidebar from "./Sidebar";
import DashboardContent from "./DashboardContent";
import Logo from "../../assets/HomeImg/Logo.png";
import ProductManagement from "./ProductManagement";
import OrderManagement from "./OrderManagement";
import UserManagement from "./UserManagement";
import ReviewModeration from "./ReviewModeration";
import CMS from "./CMS";
import SliderManagement from "./SliderManagement";


const DashBoard = () => {
  const [active, setActive] = useState("Product Management");

  const navigate = useNavigate();

   // Secure Firebase Auth Check
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  // Logout function
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      {/* Main Content */}
      <div className="flex flex-1 flex-col lg:flex-row overflow-hidden">
        {/* Sidebar on left */}
        <div className="w-fulllg:w-1/5 ">
          <Sidebar active={active} setActive={setActive} />
        </div>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-4 mt-4">
          {active === "Dash board" && <DashboardContent />}
          {active === "Product Management" && <ProductManagement />}
          {active === "Order Management" && <OrderManagement />}
          {active === "User Management" && <UserManagement />}
          {active === "Reviews & Ratings Moderation" && <ReviewModeration />}
          {active === "CMS" && <CMS />}
          {active === "Slider" && <SliderManagement />}
          {active === "Logout" && handleLogout()}
        </main>
      </div>
    </div>
  );
};

export default DashBoard;
