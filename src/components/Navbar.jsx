import React from "react";
import { FaCartPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const {cart} = useSelector((state) => state);



  return (
    <div className="w-full lg:px-40 md:px-10 px-6 items-center bg-slate-950 text-white ">
      <div className="flex items-center flex-row justify-between">
        <NavLink to="/">
          <p className="text-3xl font-bold cursor-pointer"><span className="text-green-600">E</span>cart</p>
        </NavLink>

        <div className="flex flex-row font-bold text-lg cursor-pointer gap-4 items-center md:gap-8 md:px-10 py-4">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <div className="relative">
          
          <NavLink to="/cart">
            <FaCartPlus size={24} />
          </NavLink>
          {cart.length > 0 &&
           <span className="absolute -top-1 -right-2 text-xs  text-white bg-green-600 justify-center items-center animate-bounce rounded-full px-1">{cart.length}</span> }
          </div>
         
         
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
