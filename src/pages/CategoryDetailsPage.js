import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchOneCategory } from "../store/category/thunks";

export const CategoryDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneCategory(id));
  }, [dispatch, id]);

  return <div>Category details</div>;
};
