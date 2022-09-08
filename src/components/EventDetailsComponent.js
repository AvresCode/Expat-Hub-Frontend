import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchOneEvent } from "../store/event/thunks";
import { useParams } from "react-router-dom";
import { selectEventDetails } from "../store/event/selectors";
import { EventCard } from "./EventCard";

export const EventDetailsComponent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOneEvent(id));
  }, [dispatch, id]);

  const oneEvent = useSelector(selectEventDetails);

  if (!oneEvent) return <p> Loading ...</p>;

  return (
    <div>
      {oneEvent && (
        <EventCard
          imageUrl={oneEvent.imageUrl}
          title={oneEvent.title}
          city={oneEvent.city}
          date={oneEvent.date}
          description={oneEvent.description}
          spots={oneEvent.spots}
          going={oneEvent.going}
          showDetails={true}
          showLink={false}
        />
      )}{" "}
    </div>
  );
};
