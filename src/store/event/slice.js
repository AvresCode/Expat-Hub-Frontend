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

    setAddEvent: (state, action) => {
      console.log("add event action", action.payload);
      state.allEvents.push({ ...action.payload });
    },
  },
});

export const { setAllEvents, setEventDetail, setAddEvent } = eventSlice.actions;
export default eventSlice.reducer;
