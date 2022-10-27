import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",

  initialState: {
    value: 0,
  },

  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
    add: (state, action) => {
      state.value += action.payload;
    },
  },
});

// 相当于以前的actions
export const { incremented, decremented, add } = counterSlice.actions;

// 相当于以前的reducers
export default counterSlice.reducer;