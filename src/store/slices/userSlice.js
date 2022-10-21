import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",

  initialState: {
    name: "randy",
    age: 24,
  },

  reducers: {
    nameIncrement: (state) => {
      state.name += "!";
    },
    nameDecrement: (state) => {
      state.name += state.name.slice(0, state.name.length - 1);
    },
    ageIncremented: (state, action) => {
      state.age += action.payload;
    },
    ageDecremented: (state, action) => {
      state.age -= action.payload;
    },
  },
});

// 相当于以前的actions
export const { nameIncrement, nameDecrement, ageIncremented, ageDecremented } =
  userSlice.actions;

// 相当于以前的reducers
export default userSlice.reducer