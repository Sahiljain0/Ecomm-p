import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/Cartitem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(
      cart.reduce((acc, curr) => acc + curr.price,0));
  }, [cart]);

  return (
    <div className=" flex w-full my-10 items-center justify-center ">
      {cart.length > 0 ? (
        <div className="flex  justify-center gap-2 flex-row w-ful">
          <div className="flex flex-col gap-2 w-[60%]">
            {cart.map((post, index) => {
              return <CartItem key={post.id} post={post} postIndex={index} />;
            })}
          </div>

          <div className="flex items-start p-4 justify-start  border-[1px] h-max rounded-md border-gray-300 flex-col w-[40%]">
            <div className="flex flex-col ">
              <p className="text-md font-bold text-green-600">Your Cart</p>
              <h1 className="font-bold text-green-600 text-3xl mt-2">SUMMARY</h1>
              <p className="mt-6">
                <span className="text-md font-bold "> Total items : {cart.length}</span>
              </p>
            </div>

            <div className="flex mt-20 items-start flex-col">
              <p className="font-bold text-gray-700">Total Amount : <span className="text-black ">${totalAmount}</span> </p>
              {/* <button className="bg-green-600 text-md text-white rounded-md px-4">Checkout Now</button> */}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-96">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-semibold text-lg">Cart Empty </h1>
            <Link to="/">
            <button type="button" class="mt-4 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-800">Shop Now</button>

            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
