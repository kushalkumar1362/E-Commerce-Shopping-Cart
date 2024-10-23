import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    products: []
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    addProducts: (state, action) => { 
      state.products.push(action.payload)
      state.loading = false
    },
  }
});

export const { addProducts, setLoading } = ProductSlice.actions;
export default ProductSlice.reducer;
