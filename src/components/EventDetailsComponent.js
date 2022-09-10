import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchOneEvent, deleteOneEvent } from "../store/event/thunks";
import { useParams } from "react-router-dom";
import { selectEventDetails } from "../store/event/selectors";
import { EventCard } from "./EventCard";
import { selectToken } from "../store/user/selectors";
import { selectUser } from "../store/user/selectors";
import { Button } from "../styled/Button";
import { Link } from "react-router-dom";
import { EventDetailsContainer } from "../styled/MainContainer";

export const EventDetailsComponent = () => {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOneEvent(id));
  }, [dispatch, id]);

  const oneEvent = useSelector(selectEventDetails);

  if (!oneEvent) return <p> Loading ...</p>;

  return (
    <EventDetailsContainer>
      <div style={{ maxWidth: "50vw" }}>
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
        )}
        {token && user?.isAmbassador && oneEvent.userId === user.id && (
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
        )}{" "}
      </div>
    </EventDetailsContainer>
  );
};
