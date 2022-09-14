import axios from "axios";
import { apiUrl } from "../../config/constants";

// get all events
export const fetchAllUsers = async (dispatch, getState) => {
  try {
    const response = await axios.get(`${apiUrl}/events`);
    console.log("allUsers thunk response", response);
  } catch (e) {
    console.log(e.message);
  }
};
