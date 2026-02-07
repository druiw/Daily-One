import React from "react";
import { Menu } from "lucide-react";

const NavBar = () => {
  const handleMenuClick = async (e) => {
    alert("Hi");
  };

  return (
    <nav className="flex flex-row align-middle justify-center shadow gap-10 p-5 bg-white">
      One Question a Day
      <button onClick={handleMenuClick} className="cursor-pointer">
        <Menu className="h-6 w-6 text-gray-500" />
      </button>
    </nav>
  );
};

export default NavBar;
