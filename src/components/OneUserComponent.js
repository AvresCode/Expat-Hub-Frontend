import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneUser } from "../store/user/thunks";
import { selectOneUser } from "../store/user/selectors";
import { UserCard } from "./UserCard";
import {
  OneUserPageContainer,
  Button,
  UserEventContainer,
  UserAllEventsContainer,
} from "../styled";
import { MyPageEventCard } from "./MyPageEventCard";
import { Link } from "react-router-dom";

export const OneUserComponent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneUser(id));
  }, [dispatch, id]);

  const oneUser = useSelector(selectOneUser);

  if (!oneUser) return <div> ...Loading</div>;

  return (
    <OneUserPageContainer>
      {oneUser && (
        <div>
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
          />{" "}
          <h3 style={{ textAlign: "center", margin: "8vh" }}>
            {" "}
            Meet {oneUser.firstName} in the following events:
          </h3>
          <div>
            {/* <UserAllEventsContainer> */}
            {oneUser?.going.map((event) => {
              const { id, imageUrl, title, city, date } = event;
              if (new Date(event.date) > new Date()) {
                return (
                  <UserEventContainer key={id}>
                    <MyPageEventCard
                      imageUrl={imageUrl}
                      title={title}
                      city={city}
                      date={date}
                    />
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {" "}
                      <Link to={`/events/${id}`}>
                        <Button> View details</Button>
                      </Link>
                    </div>
                  </UserEventContainer>
                );
              }
            })}

            {/* </UserAllEventsContainer> */}
          </div>
        </div>
      )}
    </OneUserPageContainer>
  );
};
