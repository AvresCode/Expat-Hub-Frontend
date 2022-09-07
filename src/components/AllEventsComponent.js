import { fetchAllEvents } from "../store/event/thunks";
import { useEffect, useState } from "react";
import { selectAllEvents } from "../store/event/selectors";
import { useDispatch, useSelector } from "react-redux";
import { EventCard } from "./EventCard";
import { MainContainer } from "../styled/Container";

export const AllEventsComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchAllEvents), []);

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
        const { id, imageUrl, title, description } = event;
        return (
          <div className="col-md-6 col-lg-4">
            <EventCard
              key={id}
              id={id}
              imageUrl={imageUrl}
              title={title}
              description={description}
            />
          </div>
        );
      })}
    </MainContainer>
  );
};
