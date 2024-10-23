import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import productReducer from "./Slices/productSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});

