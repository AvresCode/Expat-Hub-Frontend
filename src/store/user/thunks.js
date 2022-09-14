import axios from "axios";
import { apiUrl } from "../../config/constants";
import { setAllUsers } from "./slice";

// get all users
export const fetchAllUsers = async (dispatch, getState) => {
  try {
    const response = await axios.get(`${apiUrl}/users`);
    console.log("allUsers thunk response", response);
    dispatch(setAllUsers(response.data));
  } catch (e) {
    console.log(e.message);
  }
};
