import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allUsers: null,
  oneUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAllUsers: (state, action) => {
      state.allUsers = action.payload;
    },

    setOneUser: (state, action) => {
      state.oneUser = action.payload;
    },
  },
});

export const { setAllUsers, setOneUser } = userSlice.actions;
export default userSlice.reducer;
