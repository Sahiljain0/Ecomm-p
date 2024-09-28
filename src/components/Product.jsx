import React from "react";

const Product = ({ post }) => {
  const description = post.description.slice(0,51)+ "...";
  const title = post.title.slice(0,17)+"...";
  return (
    <div className="flex flex-col w-60   border-[1px] border-gray-400 rounded-md gap-4 px-2 h-[350px] mt-4 justify-center items-center">
      <div className="mt-2">
        <p className="text-md font-semibold text-gray-700">{title}</p>
      </div>
      <div className="px-6">
        <p className="text-[12px]">{description}</p>
      </div>
      <div>
        <img src={post.image} className="w-28  h-auto" />
      </div>
      <div>
      <div className="flex mt-4 flex-row justify-center gap-8 ">
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
