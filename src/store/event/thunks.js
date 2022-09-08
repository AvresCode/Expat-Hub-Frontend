import axios from "axios";
import { apiUrl } from "../../config/constants";
import { setAllEvents, setEventDetail } from "./slice";
import { selectToken } from "../user/selectors";

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

//Edit attendee status

export const editStatusThunk =
  (eventId, status) => async (dispatch, getState) => {
    try {
      console.log("EditStatus");
      const token = selectToken(getState());
      const patchResponse = await axios.patch(
        `${apiUrl}/events/${eventId}`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("edit status thunk", patchResponse);
      const response = await axios.get(`${apiUrl}/events`);
      dispatch(setAllEvents(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
