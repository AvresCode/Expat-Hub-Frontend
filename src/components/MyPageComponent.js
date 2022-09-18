import {
  MyPageComponentContainer,
  CreatedEventsContainer,
  UpcomingEventsContainer,
  PastEventsContainer,
  EditProfileContainer,
  Button,
} from "../styled";
import { useSelector } from "react-redux";
import { selectAllEvents } from "../store/event/selectors";
import { selectUser } from "../store/auth/selectors";
import { MyPageEventCard } from "./MyPageEventCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteOneEvent } from "../store/event/thunks";

export const MyPageComponent = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const allEvents = useSelector(selectAllEvents);

  if (!allEvents)
    return (
      <div>
        {" "}
        <p> Loading ...</p>
      </div>
    );

  const eventCreatedByUser = [...allEvents]
    .filter((event) => event.userId === user.id)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  console.log("eventCreated", eventCreatedByUser);

  return (
    <MyPageComponentContainer>
      <CreatedEventsContainer>
        <h3>Events you created </h3>
        {eventCreatedByUser.map((event) => {
          const { id, imageUrl, title, date, city } = event;
          return (
            <div key={id}>
              <MyPageEventCard
                imageUrl={imageUrl}
                title={title}
                city={city}
                date={date}
              />
              {new Date(event.date) > new Date() ? (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <div>
                    {" "}
                    <Link to={`/events/editEvent/${id}`}>
                      {" "}
                      <Button> Edit event</Button>{" "}
                    </Link>
                  </div>
                  <div>
                    {" "}
                    <Button onClick={() => dispatch(deleteOneEvent(id))}>
                      {" "}
                      Delete event
                    </Button>
                  </div>
                </div>
              ) : (
                <Button style={{ cursor: "default" }}> Closed!</Button>
              )}
            </div>
          );
        })}
      </CreatedEventsContainer>
      <UpcomingEventsContainer>
        <h3> Your upcoming events</h3>
      </UpcomingEventsContainer>
      <PastEventsContainer>
        <h3>Your past events</h3>
      </PastEventsContainer>
      <EditProfileContainer>Edit your profile</EditProfileContainer>
    </MyPageComponentContainer>
  );
};
