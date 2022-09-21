import axios from "axios";
import { apiUrl } from "../../config/constants";
import { setAllUsers, setOneUser } from "./slice";

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

//get one user by id
export const fetchOneUser = (id) => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${apiUrl}/users/${id}`);
    console.log("one user thunk response", response);
    dispatch(setOneUser(response.data));
  } catch (e) {
    console.log(e.message);
  }
};
