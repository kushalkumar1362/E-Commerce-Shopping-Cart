import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item removed from Cart");
  };

  return (
    <div className="flex items-center p-2 md:p-5 justify-between   mt-2 mb-2 md:mx-5 ">
      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
        <div className="w-[30%]">
          <NavLink to={`item/${item.id}`}>
            <img className="object-cover " src={item.image} alt="" />
          </NavLink>
        </div>

        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h1 className="text-xl text-slate-700 font-semibold">
            <NavLink to={`item/${item.id}`}>
              {item.title}
            </NavLink>
          </h1>

          <h1 className="text-base text-slate-700 font-medium">
            {item.description}
          </h1>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-green-600">
              ${item.price}
            </p>
            <div
              className="text-red-800  bg-red-200 text-[25px] hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-2 mr-3"
              onClick={removeFromCart}>
              <MdDeleteForever />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
