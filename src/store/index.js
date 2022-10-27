import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import productsSlice from "./slices/productsSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    products: productsSlice,
  },
});

export default store;