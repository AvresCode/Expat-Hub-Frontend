import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneUser } from "../store/user/thunks";
import { selectOneUser } from "../store/user/selectors";
import { UserCard } from "./UserCard";

export const OneUserComponent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneUser(id));
  }, [dispatch, id]);

  const oneUser = useSelector(selectOneUser);

  if (!oneUser) return <div> ...Loading</div>;

  return (
    <div>
      {oneUser && (
        <UserCard
          id={id}
          imageUrl={oneUser.imageUrl}
          firstName={oneUser.firstName}
          lastName={oneUser.lastName}
          city={oneUser.city}
          nationality={oneUser.nationality}
          education={oneUser.education}
          birthDate={oneUser.birthDate}
          showDetails={true}
        />
      )}
    </div>
  );
};
