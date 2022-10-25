import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../interfaces/product";
import productAPI from "../services/productAPI";

interface ProductsState {
  data: Product[];
  isLoading: boolean;
  error: string;
}

const initialState: ProductsState = {
  data: [],
  isLoading: false,
  error: "",
};

export const getProductList = createAsyncThunk(
  "products/getProductList",
  async () => {
    try {
      const data = await productAPI.getProductList();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const productSlice = createSlice({
  name: "products", // namespace để tạo ra các action types
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductList.pending, (state) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(getProductList.fulfilled, (state, { payload }) => {
      return { ...state, isLoading: false, data: payload };
    });
    builder.addCase(getProductList.rejected, (state, { error }) => {
      return { ...state, isLoading: false, error: error.message as string };
    });
  },
});

export default productSlice.reducer;

