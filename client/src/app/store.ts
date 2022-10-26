import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import products from '../features/productSlice'
import cart from '../features/cartSlice'
import filter from '../features/searchSlice'

export const store = configureStore({
  reducer: {
    products,
    cart,
    filter,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
