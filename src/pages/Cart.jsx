import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/Cartitem";
import { Link } from "react-router-dom";
import image from "../assets/cart.jpg";
import img from "../assets/bag.jpg"
const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(
      cart.reduce((acc, curr) => acc + curr.price,0));
  }, [cart]);

  return (
    <div className=" flex w-full my-10 md:px-10 px-2 items-center justify-center ">
      {cart.length > 0 ? (
        <div className="flex  justify-center gap-2 flex-col md:flex-row w-full">
          <div className="flex flex-col gap-2 md:w-[60%] w-full">
            {cart.map((post, index) => {
              return <CartItem key={post.id} post={post} postIndex={index} />;
            })}
          </div>

          <div className="flex items-start p-4  justify-start  border-[1px] h-max rounded-md border-gray-300 flex-col w-full md:w-[40%]">
            <div className="flex flex-col ">
              <p className="text-md font-bold text-green-600">Your Cart</p>
              <h1 className="font-bold text-green-600 text-3xl mt-2">SUMMARY</h1>
              <p className="mt-6">
                <span className="text-md font-bold "> Total items : {cart.length}</span>
              </p>
            </div>

            <div className="flex mt-4 md:mt-20 items-start flex-col">
              <p className="font-bold text-gray-700">Total Amount : <span className="text-black ">${totalAmount}</span> </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center flex-col items-center md:mt-0 mt-20 w-full h-96">
        
         <img className="md:w-80 w-64 h-auto " src={image}/>
        
        
       
          <div className="flex flex-col justify-center items-center">
            <p className="font-extrabold font-sans text-gray-800 text-xl md:text-3xl">Your Cart feel's lonely </p>
            <Link to="/">
            <button type="button" class="mt-4 focus:outline-none text-white bg-green-600  focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-800">Shop Now</button>

            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
