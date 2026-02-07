import { LogOut } from "lucide-react";
import React, { useState } from "react";
import MenuItem from "../MenuItem/MenuItem";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleComponent = async (e) => {
    setIsVisible(!isVisible);
  };

  return (
    <nav className="flex items-center justify-between shadow px-6 h-16 bg-white">
      {/* Left Items */}
      <div class="flex-1"></div>
      {/* Center Items */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <p className="font-thin text-2xl">One Question a Day</p>
      </div>

      {/* Right Items */}
      <button className="flex gap-6 cursor-pointer">
        <LogOut className="h-6 w-6 text-gray-500" />
      </button>
    </nav>
  );
};

export default NavBar;
