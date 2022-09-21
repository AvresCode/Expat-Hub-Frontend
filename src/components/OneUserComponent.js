import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchOneUser } from "../store/user/thunks";

export const OneUserComponent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneUser(id));
  }, [dispatch, id]);

  return <div>OneUserPage</div>;
};
