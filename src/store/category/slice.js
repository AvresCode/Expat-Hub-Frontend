import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCategories: null,
  categoryDetails: null,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
});
export const {} = categorySlice.actions;
export default categorySlice.reducer;
