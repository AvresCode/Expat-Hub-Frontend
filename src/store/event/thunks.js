import axios from "axios";
import { apiUrl } from "../../config/constants";
import { setAllEvents } from "./slice";

// get all events
export const fetchAllEvents = async (dispatch, getState) => {
  try {
    const response = await axios.get(`${apiUrl}/events`);
    console.log("allEvent thunk response", response);
    dispatch(setAllEvents(response.data));
  } catch (e) {
    console.log(e.message);
  }
};
