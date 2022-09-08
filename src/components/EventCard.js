import "./styles.css";
import { EventContainer } from "../styled/Container";
import { Button } from "../styled/Button";
import { Link } from "react-router-dom";
import moment from "moment";

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
}) => {
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
          {/* <p>At: {date.}</p> */}
          <div>{showDetails && <p>{description}</p>}</div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {" "}
            <div> {going && going.length} attendees! </div>{" "}
            <div> {spots - going.length} spots left!</div>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          {" "}
          <Button> Accept</Button>
          <Button> Decline</Button>
        </div>
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
