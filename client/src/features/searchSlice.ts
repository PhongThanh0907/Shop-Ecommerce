import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface FiltersState {
  search: string;
  brand: [];
}

const initialState: FiltersState = {
  search: '',
  brand: [],
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
  },
});

export const { searchFilterChange, brandFilterChange } = cartSystem.actions;
export default cartSystem.reducer;
