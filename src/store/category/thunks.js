import axios from "axios";
import { apiUrl } from "../../config/constants";

// get all categories
export const fetchAllCategories = async (dispatch, getState) => {
  try {
    const response = await axios.get(`${apiUrl}/categories`);
    console.log("allCategories thunk response", response);
  } catch (e) {
    console.log(e.message);
  }
};

//get one category
export const fetchOneCategory = (id) => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${apiUrl}/categories/${id}`);
    console.log("category thunk response", response);
  } catch (e) {
    console.log(e.message);
  }
};
