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

//Add a new event
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
