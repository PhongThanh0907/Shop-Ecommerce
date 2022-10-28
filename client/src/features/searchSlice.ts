import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface FiltersState {
  search: string;
  brand: [];
  min: number,
  max: number,
}

const initialState: FiltersState = {
  search: '',
  brand: [],
  min: 0,
  max: 0
};

const cartSystem = createSlice({
  name: "filter",
  initialState,
  reducers: {
    searchFilterChange: (state, action) => {
    state.search = action.payload
    },
    brandFilterChange: (state, action) => {
    state.brand = action.payload
    },
    priceFilterChange: (state, action) => {
    state.min = action.payload
    state.max = action.payload
    },
  },
});

export const { searchFilterChange, brandFilterChange, priceFilterChange } = cartSystem.actions;
export default cartSystem.reducer;
