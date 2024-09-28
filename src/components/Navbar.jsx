import React from "react";
import { FaCartPlus } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full px-40 items-center bg-slate-950 text-white ">
      <div className="flex items-center flex-row justify-between">
        <NavLink to="/">
          <p className="text-3xl font-bold cursor-pointer">Ecart</p>
        </NavLink>

        <div className="flex flex-row font-bold text-lg cursor-pointer  items-center gap-8 px-10 py-4">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <FaCartPlus size={24} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
