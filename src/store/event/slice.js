import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allEvents: null,
  eventDetail: null,
};

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setAllEvents: (state, action) => {
      state.allEvents = action.payload;
    },

    setEventDetail: (state, action) => {
      state.eventDetail = action.payload;
    },
  },
});

export const { setAllEvents, setEventDetail } = eventSlice.actions;
export default eventSlice.reducer;
