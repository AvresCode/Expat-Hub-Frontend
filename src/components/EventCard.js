import { fetchAllEvents } from "../store/event/thunks";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const EventCard = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchAllEvents), []);
};
