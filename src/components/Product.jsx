import React from "react";

const Product = ({ post }) => {
  const description = post.description.slice(0,51)+ "...";
  const title = post.title.slice(0,17)+"...";
  return (
    <div className="flex hover:scale-105 shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-all ease-in-out duration-500 flex-col lg:w-60 md:w-56  w-full   border-[1px] border-gray-400 rounded-md gap-4 px-2 h-[350px] mt-4 justify-center items-center">
      <div className="mt-2">
        <p className="md:text-md text-xl font-semibold text-gray-700">{title}</p>
      </div>
      <div className="px-6 flex items-center justify-center">
        <p className="md:text-[12px] text-sm">{description}</p>
      </div>
      <div className="flex items-center justify-center w-32 h-36 md:w-28  md:h-36">
        <img src={post.image} className="w-full object-conatin h-full" />
      </div>
      <div>
      <div className="flex mt-4 flex-row justify-center gap-12 md:gap-8 ">
        <p className="font-bold text-green-600">${post.price}</p>
        <button className="rounded-full text-gray-600 border-2 font-semibold text-sm border-gray-600 px-2">Remove Items
          {/* {
            selected ? <p>Remove item</p> : <p>Add to cart</p>
          } */}
        </button>
      </div>
     
      </div>
     
    </div>
  );
};

export default Product;
