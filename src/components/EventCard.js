import "./styles.css";
import { EventContainer } from "../styled/Container";
import { Button } from "../styled/Button";
import { Link } from "react-router-dom";
import moment from "moment";
import { selectToken, selectUser } from "../store/user/selectors";
import { editStatusThunk } from "../store/event/thunks";
import { useDispatch, useSelector } from "react-redux";

export const EventCard = ({
  id,
  imageUrl,
  title,
  date,
  city,
  description,
  spots,
  going,
  showDetails,
  showLink,
  attendees,
}) => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const profile = useSelector(selectUser);
  const updateStatusIfLoggedIn = (status) => {
    if (token) {
      dispatch(editStatusThunk(id, status));
    } else {
      console.log("Please sign in");
      return <p> Please sign in </p>;
    }
  };
  const userResponse = () => {
    if (!profile) {
      return null;
    }
    const response = attendees.find(
      (attendee) => attendee.userId === profile.id
    );
    if (!response) {
      return null;
    } else {
      return response.status;
    }
  };

  console.log("USERREPOSNE", userResponse());
  return (
    <EventContainer>
      <div key={id}>
        {" "}
        <img
          src={imageUrl}
          alt=""
          style={{
            maxWidth: "100%",
            borderRadius: "1vw",
          }}
        />{" "}
        <div>
          {" "}
          <h3>{title}</h3>
          <p>
            {" "}
            On {moment(date).format("dddd D MMM YYYY")} in {city}
          </p>
          <div>{showDetails && <p>{description}</p>}</div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {" "}
            <div> {going && going.length} attendees! </div>{" "}
            <div> {spots - going.length} spots left!</div>
          </div>
        </div>
        {userResponse() === null ? (
          <div style={{ display: "flex" }}>
            {" "}
            <Button onClick={() => updateStatusIfLoggedIn(true)}>
              {" "}
              Accept
            </Button>
            <Button onClick={() => updateStatusIfLoggedIn(false)}>
              {" "}
              Decline
            </Button>
          </div>
        ) : userResponse() ? (
          <p>going!</p>
        ) : (
          <p>not going!</p>
        )}
        <div>
          {" "}
          {showLink && (
            <Link to={`/events/${id}`}>
              <Button> View details</Button>
            </Link>
          )}
        </div>
      </div>
    </EventContainer>
  );
};
