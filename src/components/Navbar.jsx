import React, { useState } from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm !== "") {
      navigate(`/search/${searchTerm}`);
    }
    setSearchTerm("");
  };

  return (
    <div>
      <div className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <Link to={"/"}>
          <div className="text-white">
            <img
              src="https://i.postimg.cc/HLj26d3p/android-chrome-512x512.png"
              alt="E-Commerce"
              className="h-14"
            />
          </div>
        </Link>

        {/* Search Input */}
        <div className="flex-1 flex justify-center w-full max-w-md ml-2 lg:ml-4">
          <form onSubmit={handleSearch}>
            <div className="relative w-full">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for products"
                className="w-full pl-4 pr-20 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <button className="z-10">
                <FaSearch size={20} className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </button>
            </div>
          </form>
        </div>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <Link to={"/"}>
            <p>Home</p>
          </Link>

          <Link to={"/cart"}>
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              {cart.length > 0 ? (
                <div
                  className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                  justify-center items-center animate-bounce rounded-full text-white">
                  {cart.length}
                </div>
              ) : null}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

