import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

export function getProducts() {
  return async function getProductThunk(dispatch, getState) {
    try {
      const result = await axios.get("http://localhost:8080/api/products");
      const data = result.data;
      dispatch(fetchProducts(data));
    } catch (error) {
      console.log("Fetch error", error);
    }
  };
}
