import { fetchAllEvents } from "../store/event/thunks";
import { useEffect, useState } from "react";
import { selectAllEvents } from "../store/event/selectors";
import { useDispatch, useSelector } from "react-redux";
import { EventCard } from "./EventCard";
import { AllEventsContainer, Input, Button } from "../styled";
import moment from "moment";

export const AllEventsComponent = () => {
  const [search, setSearch] = useState("");
  const [searchDate, setSearchDate] = useState("");
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

  return (
    <div style={{ width: "85vw" }}>
      <Input
        type="text"
        placeholder="Search for event.."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "70vw" }}
      />
      <div>
        {" "}
        <h3>Pick a date: </h3>
        <div>
          {" "}
          <form>
            <Input
              style={{ width: "15vw" }}
              type="date"
              value={searchDate}
              onChange={(e) => setSearchDate(e.target.value)}
            />
          </form>
        </div>
      </div>
      <AllEventsContainer>
        {" "}
        {sortedEventDate
          .filter((event) =>
            event.title.toLowerCase().includes(search.toLowerCase())
          )
          .filter((event) =>
            searchDate
              ? moment(searchDate).isSame(moment(event.date), "day")
              : true
          )
          .map((event) => {
            const {
              id,
              imageUrl,
              title,
              city,
              date,
              description,
              spots,
              going,
            } = event;
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
    </div>
  );
};
