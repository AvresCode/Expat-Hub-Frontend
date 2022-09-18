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

  const eventsCreatedByUser = [...allEvents]
    .filter((event) => event.userId === user.id)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  // console.log("eventsCreated", eventsCreatedByUser);

  const eventsUserGoes = [...allEvents].filter((event) =>
    event.going.find(
      (e) => e.attendees.userId === user.id && e.attendees.status === true
    )
  );

  // console.log("eventsUserGoes", eventsUserGoes);

  const upcomingEvents = eventsUserGoes
    .filter((event) => new Date(event.date) > new Date())
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  // console.log("upcomingEvents", upcomingEvents);

  const pastEvents = eventsUserGoes
    .filter((event) => new Date(event.date) < new Date())
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  console.log("pastEvents", pastEvents);

  return (
    <MyPageComponentContainer>
      <CreatedEventsContainer>
        <h3>Events you created </h3>
        {eventsCreatedByUser.map((event) => {
          const { id, imageUrl, title, date, city } = event;
          return (
            <div key={id}>
              <MyPageEventCard
                imageUrl={imageUrl}
                title={title}
                city={city}
                date={date}
              />
              <Link to={`/events/${id}`}>
                <Button> View details</Button>
              </Link>
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
                <h4> Closed!</h4>
              )}
            </div>
          );
        })}
      </CreatedEventsContainer>
      <UpcomingEventsContainer>
        <h3> Your upcoming events</h3>
        {upcomingEvents.map((event) => {
          const { id, imageUrl, title, date, city } = event;
          return (
            <div key={id}>
              <MyPageEventCard
                imageUrl={imageUrl}
                title={title}
                city={city}
                date={date}
              />
              <Link to={`/events/${id}`}>
                <Button> View details</Button>
              </Link>
            </div>
          );
        })}
      </UpcomingEventsContainer>
      <PastEventsContainer>
        <h3>Your past events</h3>
        {pastEvents.map((event) => {
          const { id, imageUrl, title, date, city } = event;
          return (
            <div key={id}>
              <MyPageEventCard
                imageUrl={imageUrl}
                title={title}
                city={city}
                date={date}
              />
              <Link to={`/events/${id}`}>
                <Button> View details</Button>
              </Link>
            </div>
          );
        })}
      </PastEventsContainer>
      <EditProfileContainer>Edit your profile</EditProfileContainer>
    </MyPageComponentContainer>
  );
};
