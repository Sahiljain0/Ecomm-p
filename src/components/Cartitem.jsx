import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { remove } from '../redux/slices/CartSlice';
const CartItem = ({post,postIndex}) => {

   const title = post.title.slice(0,30)+"...";
   const description = post.description.slice(0,100)+"...";

   const dispatch = useDispatch();
   const removeHandler = () => {
    dispatch(remove(post.id));
    toast.success("Item removed successfully");
   }
  return (
    <div className='flex border-[1px] rounded-md border-gray-300 justify-center gap-4 flex-row w-full h-44 md:h-56'>
      <div className='flex justify-center items-center md:h-56 h-44 w-[40%]'>
      <img className='md:h-44 md:w-48 h-32 w-28 object-contain ' src={post.image}/>
      </div>
      <div className='flex flex-col justify-center gap-4 items-start w-[50%]'>
        <p className='font-bold text-gray-700 text-md md:text-xl'>{title}</p>
        <p className='md:text-sm text-xs font-semibold text-gray-500'>{description}</p>
        <div className='flex flex-row justify-between w-full pr-6'>
          <p className='font-bold text-green-600'>${post.price}</p>
          <button className='text-2xl text-red-600 bg-red-300 rounded-full p-1' onClick={removeHandler}><MdDelete /></button>
        </div>
      </div>
      
    </div>
  )
}

export default CartItem