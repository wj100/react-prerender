import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',

  initialState: {
    list: null,
  },

  reducers: {
    setProducts: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
