import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../interfaces/product";

interface CartsState {
  cart: Product[];
  total: number;
}

const initialState: CartsState = {
  cart: [],
  total: 0,
};

const cartSystem = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddCart: (state, action) => {
      const find = state.cart.findIndex(
        (item) => item._id === action.payload.id
      );
      if (find > 0) {
        state.cart[find].quantity += 1;
      } else {
        state.total += 1;
      }
      state.cart.push(action.payload);
    },
    RemoveCart: (state, action) => {
      const newArr = state.cart.filter(
        (item) => item._id !== action.payload.id
      );
      state.cart = newArr;
      state.total -= 1;
    },
  },
});

export const { AddCart, RemoveCart } = cartSystem.actions;
export default cartSystem.reducer;
