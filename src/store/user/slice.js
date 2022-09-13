import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allUsers: null,
  userDetail: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;
export default userSlice.reducer;
