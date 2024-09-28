import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {add, remove} from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

const Product = ({ post }) => {

 const dispatch = useDispatch();

 const addHandler = () => {
     dispatch(add(post));
     toast.success("Item added to cart");
 }
 const removeHandler = () => {
  dispatch(remove(post.id));
  toast.success("Item removed successfully");

 }


  const {cart} = useSelector((state) => state);
  const description = post.description.slice(0,48)+ "...";
  const title = post.title.slice(0,17)+"...";
  return (
    <div className="flex group hover:scale-105 bg-gray-50 hover:bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-all ease-in-out duration-500 flex-col lg:w-60 md:w-56  w-full   border-[1px] hover:shadow-none  rounded-md gap-4 px-2 h-[350px] mt-4 justify-center items-center">
      <div className="mt-2">
        <p className="md:text-md text-lg lowercase font-semibold text-gray-700">{title}</p>
      </div>
      <div className="px-6 flex items-center justify-center">
        <p className="md:text-[12px] text-sm">{description}</p>
      </div>
      <div className="flex items-center justify-center w-32 h-36 md:w-28  md:h-36">
        <img src={post.image} className="w-full object-conatin h-full" />
      </div>
      <div>
      <div className="flex mt-4 flex-row justify-center gap-12 md:gap-8 ">
        <p className="font-bold text-green-600 cursor-pointer">${post.price}</p>
        
          {
            cart.some((p) => p.id === post.id)?
            (<button
               className="rounded-full group-hover:bg-gray-700 group-hover:text-white text-gray-600 border-2 font-medium transition-all duration-200 ease-in-out text-sm border-gray-600 px-2"
               onClick={removeHandler}>Remove item</button>):
            (<button
              className="rounded-full group-hover:bg-gray-700 group-hover:text-white text-gray-600 border-2 font-medium transition-all duration-200 ease-in-out text-sm border-gray-600 px-2"
               onClick={addHandler}>Add To Cart</button>)
          }
       
      </div>
     
      </div>
     
    </div>
  );
};

export default Product;
