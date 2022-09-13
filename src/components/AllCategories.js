import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories } from "../store/category/thunks";

export const AllCategories = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCategories);
  }, [dispatch]);

  return (
    <div style={{ width: "300px", backgroundColor: "yellow" }}>
      {" "}
      All cetegories
    </div>
  );
};
