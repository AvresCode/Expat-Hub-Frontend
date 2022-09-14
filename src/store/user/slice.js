import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allUsers: null,
  userDetail: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAllUsers: (state, action) => {
      state.allUsers = action.payload;
    },
  },
});

export const { setAllUsers } = userSlice.actions;
export default userSlice.reducer;
