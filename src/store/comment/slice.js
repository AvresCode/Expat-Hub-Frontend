import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventComments: null,
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
});
export const {} = commentSlice.actions;
export default commentSlice.reducer;
