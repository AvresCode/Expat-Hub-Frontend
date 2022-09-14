import { fetchAllUsers } from "../store/user/thunks";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export const AllUsersComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllUsers);
  }, [dispatch]);

  return (
    <div>
      <h1> AllUsersComponent </h1>
    </div>
  );
};
