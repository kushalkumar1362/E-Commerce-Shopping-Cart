import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { add, remove } from "../redux/Slices/cartSlice";
import toast from "react-hot-toast";

const Item = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [toastId, setToastId] = useState(null);
  const cart = useSelector((state) => state.cart);

  const { products } = useSelector((state) => state.products);
  const product = products.find((item) => item.id === Number(id));

  const addToCart = () => {
    if (toastId) {
      toast.dismiss(toastId);
    }
    dispatch(add(product));
    setToastId(toast.success("Item added to Cart"))
  };

  const removeFromCart = () => {
    dispatch(remove(product.id));
    if (toastId) {
      toast.dismiss(toastId);
    }
    setToastId(toast.success("Item removed from Cart"));
  };

  const { title, price, description, category, image, rating } = product;
  if (!product) {
    return <p className="text-center text-red-500 mt-5">Product not found!</p>;
  }
  return (
    <div className="p-10 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-start">
        <div className='w-80 h-96'>
          <img src={image} alt={title} className="max-w-full max-h-full" />
        </div>

        <div className="flex-2 mt-5 md:mt-0 md:ml-20 w-full">
          <h2 className="text-3xl font-bold mb-3">{title}</h2>
          <p className="mb-2 text-lg"><strong>Category:</strong> {category}</p>
          <p className="mb-2 text-lg"><strong>Description:</strong> {description}</p>
          <p className="mb-2 text-lg"><strong>Price:</strong> ${price}</p>
          <p className="mb-5 text-lg"><strong>Rating:</strong> {rating.rate} / 5 ({rating.count} reviews)</p>

          {cart.some((p) => p.id === product.id) ? (
            <button
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[14px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
              onClick={removeFromCart}>
              Remove Item
            </button>
          ) : (
            <button
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[14px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
              onClick={addToCart}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;

