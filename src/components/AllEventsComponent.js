import { fetchAllEvents } from "../store/event/thunks";
import { useEffect, useState } from "react";
import { selectAllEvents } from "../store/event/selectors";
import { useDispatch, useSelector } from "react-redux";
import { EventCard } from "./EventCard";
import { AllEventsContainer, Input } from "../styled";

export const AllEventsComponent = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllEvents);
  }, [dispatch]);

  const allEvents = useSelector(selectAllEvents);
  // console.log("allEvents", allEvents);

  if (!allEvents)
    return (
      <div>
        {" "}
        <p> Loading ...</p>
      </div>
    );
  const filteredPastEvents = [...allEvents].filter(
    (event) => new Date(event.date) > new Date()
  );
  // console.log("filtered event", filteredPastEvents);

  const sortedEventDate = filteredPastEvents.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const eventToAttendeesList = (event) => {
    return event.going.map((user) => ({
      userId: user.id,
      status: user.attendees.status,
    }));
  };
  const filteredPastEvents = [...allEvents].filter(
    (event) => new Date(event.date) > new Date()
  );
  // console.log("filtered event", filteredPastEvents);

  const sortedEventDate = filteredPastEvents.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <AllEventsContainer>
      <Input
        type="text"
        placeholder="Search for event.."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "70vw" }}
      />{" "}
      {sortedEventDate
        .filter((event) =>
          event.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((event) => {
          const { id, imageUrl, title, city, date, description, spots, going } =
            event;
          return (
            <div key={id}>
              <EventCard
                id={id}
                imageUrl={imageUrl}
                title={title}
                city={city}
                date={date}
                description={description}
                spots={spots}
                going={going}
                showDetails={false}
                showLink={true}
                attendees={eventToAttendeesList(event)}
              />
            </div>
          );
        })}
    </AllEventsContainer>
  );
};
