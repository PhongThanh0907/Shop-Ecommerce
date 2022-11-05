import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Item } from "../interfaces/item";
import { Product } from "../interfaces/product";

interface CartsState {
  cart: Item[];
  total: number;
  priceProduct: number;
}

const initialState: CartsState = {
  cart: [],
  total: 0,
  priceProduct: 0,
};

const cartSystem = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddCart: (state, action) => {
      console.log("add cart", action.payload);

      const index = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );
      if (index === -1) {
        const temp = { ...action.payload,totalCount: action.payload.price , numberCount: 1 };
        
        return {
          ...state,
          cart: [...state.cart, temp],          
        };
      } else {
        state.cart[index].numberCount += 1;
        state.cart[index].totalCount = action.payload.price * state.cart[index].numberCount
        state.priceProduct = action.payload.price + state.cart[index].totalCount;
      }
    },
    RemoveCart: (state, action) => {
      const newArr = state.cart.filter(
        (item) => item._id !== action.payload.id
      );
      state.cart = newArr;
    },
    UpdateNumberCount: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );
      if(index >= 0) {
        state.cart[index].numberCount = action.payload.numberCountValue
        console.log(state.cart[index].price)
        console.log(state.cart[index].numberCount)
        state.cart[index].totalCount = action.payload.numberCountValue * state.cart[index].price
      }
    },
  },
});

export const { AddCart, RemoveCart, UpdateNumberCount } = cartSystem.actions;
export default cartSystem.reducer;
