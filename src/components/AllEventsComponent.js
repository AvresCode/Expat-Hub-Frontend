import { fetchAllEvents } from "../store/event/thunks";
import { useEffect, useState } from "react";
import { selectAllEvents } from "../store/event/selectors";
import { useDispatch, useSelector } from "react-redux";
import { EventCard } from "./EventCard";
import { MainContainer } from "../styled/Container";

export const AllEventsComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllEvents);
  }, [dispatch]);

  const allEvents = useSelector(selectAllEvents);
  console.log("allEvents", allEvents);

  if (!allEvents)
    return (
      <div>
        {" "}
        <p> Loading ...</p>
      </div>
    );

  return (
    <MainContainer>
      {" "}
      {allEvents.map((event) => {
        const { id, imageUrl, title, city, date, description, spots, going } =
          event;
        return (
          <div key={id} className="col-md-6 col-lg-4">
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
            />
          </div>
        );
      })}
    </MainContainer>
  );
};
