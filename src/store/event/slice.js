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

    // editStatus: (state, action) => {
    //  const {evenId, status }= action.payload;

    //   const updatedEvent = state.allEvents.map((event) => event.id === eventId ? {...event, going.map((i) => {i.id = userId ? i.attendees.status = status })})
  },
});

export const { setAllEvents, setEventDetail } = eventSlice.actions;
export default eventSlice.reducer;
