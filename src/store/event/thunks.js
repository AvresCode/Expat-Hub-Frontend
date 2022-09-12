import axios from "axios";
import { apiUrl } from "../../config/constants";
import { setAllEvents, setEventDetail, setAddEvent } from "./slice";
import { selectToken } from "../user/selectors";
import { showMessageWithTimeout } from "../appState/thunks";

// get all events
export const fetchAllEvents = async (dispatch, getState) => {
  try {
    const response = await axios.get(`${apiUrl}/events`);
    //  console.log("allEvent thunk response", response);
    // console.log("allEvent thunk going", response.data.going);
    dispatch(setAllEvents(response.data));
  } catch (e) {
    console.log(e.message);
  }
};

//get event details for detailPage
export const fetchOneEvent = (id) => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${apiUrl}/events/${id}`);
    console.log("detail thunk response", response);
    dispatch(setEventDetail(response.data));
  } catch (e) {
    console.log(e.message);
  }
};

//Add a new event by user who is logged in and isAmbassador: true.

export const newEventThunk =
  (title, description, date, city, address, spots, imageUrl, categoryId) =>
  async (dispatch, getState) => {
    try {
      console.log("addEvent");
      const token = selectToken(getState());

      const response = await axios.post(
        `${apiUrl}/events/addEvent`,
        {
          title,
          description,
          date,
          city,
          address,
          spots,
          imageUrl,
          categoryId,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("addEvent thunk response", response);
      dispatch(setAddEvent(response.data.newEvent));
      dispatch(showMessageWithTimeout("success", false, "Event added!", 4000));
    } catch (e) {
      console.log(e.message);
    }
  };

// delete the event by user who created the event
export const deleteOneEvent = (id) => async (dispatch, getState) => {
  try {
    const token = selectToken(getState());
    const deleteResponse = await axios.delete(`${apiUrl}/events/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("delete response", deleteResponse);

    const response = await axios.get(`${apiUrl}/events`);
    dispatch(setAllEvents(response.data));
    dispatch(
      showMessageWithTimeout("success", false, "Deleted successfully!", 4000)
    );
  } catch (e) {
    console.log(e.message);
  }
};

//Edit event by user who created the event

export const editEventThunk =
  (
    eventId,
    title,
    description,
    date,
    city,
    address,
    spots,
    imageUrl,
    categoryId
  ) =>
  async (dispatch, getState) => {
    try {
      console.log("EditEvent");
      const token = selectToken(getState());

      const editResponse = await axios.patch(
        `${apiUrl}/events/${eventId}/edit`,
        {
          title,
          description,
          date,
          city,
          address,
          spots,
          imageUrl,
          categoryId,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("edit event thunk", editResponse);

      const response = await axios.get(`${apiUrl}/events/${eventId}`);
      dispatch(setEventDetail(response.data));
      dispatch(
        showMessageWithTimeout("success", false, "Edited successfully!", 4000)
      );
    } catch (e) {
      console.log(e.message);
    }
  };

//Add comment by logged in user

export const newCommentThunk =
  (eventId, text) => async (dispatch, getState) => {
    try {
      console.log("addComment");
      const token = selectToken(getState());

      const commentResponse = await axios.post(
        `${apiUrl}/events/${eventId}/comment`,
        { text },

        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log("addComment thunk response", commentResponse);
      const response = await axios.get(`${apiUrl}/events/${eventId}`);
      dispatch(setEventDetail(response.data));
      dispatch(
        showMessageWithTimeout("success", false, "Comment added!", 4000)
      );
    } catch (e) {
      console.log(e.message);
    }
  };
