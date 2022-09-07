import "./styles.css";
import { EventContainer } from "../styled/Container";
import { Button } from "../styled/Button";

export const EventCard = ({ id, imageUrl, title, description }) => {
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
          <h3>{title}</h3> <p>{description}</p>
        </div>
        <div style={{ display: "flex" }}>
          {" "}
          <Button> Accept</Button>
          <Button> Decline</Button>
        </div>
        <div>
          {" "}
          <Button> View details</Button>
        </div>
      </div>
    </EventContainer>
  );
};
