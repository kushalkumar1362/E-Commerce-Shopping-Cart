import React, { useEffect, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Home, Cart, Item } from "./pages";
import { useSelector, useDispatch } from "react-redux";
import { addProducts, setLoading } from "./redux/Slices/productSlice";
import toast from "react-hot-toast";
import { Spinner } from "./components";

const App = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const dispatch = useDispatch();
  const { loading, products } = useSelector((state) => state.products);

  const fetchProductData = useCallback(async () => {
    if (products.length > 0) {
      return;
    }
    dispatch(setLoading(true));
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      if (data) {
        data.forEach((item) => {
          dispatch(addProducts(item));
        });
      }
    } catch (error) {
      toast.error("Network issue");
    }
    dispatch(setLoading(false));
  }, [dispatch, products.length]);

  useEffect(() => {
    fetchProductData();
  }, [fetchProductData]);

  return (
    <div>
      <div className="bg-slate-900">
        <Navbar />
      </div>

      {loading && <div className="flex items-center justify-center mt-10">
        <Spinner />
      </div>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:search" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/search/:search/item/:id" element={<Item />} />
        <Route path="/cart/item/:id" element={<Item />} />
      </Routes>
    </div>
  );
};

export default App;
