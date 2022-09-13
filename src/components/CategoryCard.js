import "./styles.css";
import { Button } from "../styled";
import { Link } from "react-router-dom";

export const CategoryCard = ({
  id,
  imageUrl,
  name,
  events,
  showDetails,
  showLink,
}) => {
  return (
    <div key={id}>
      {" "}
      <div>
        {" "}
        <img
          src={imageUrl}
          alt=""
          style={{
            maxWidth: "100%",
            borderRadius: "1vw",
          }}
        />
      </div>
      <div>{name}</div>
      <div>
        {" "}
        {showLink && (
          <Link to={`/categories/${id}`}>
            <Button> View details</Button>
          </Link>
        )}
      </div>
      <div>
        {showDetails &&
          events &&
          events.map((event) => {
            return (
              <div key={event.id}>
                <div>
                  {" "}
                  <img
                    src={event.imageUrl}
                    alt=""
                    style={{
                      maxWidth: "100%",
                      borderRadius: "1vw",
                    }}
                  />
                </div>{" "}
                <div>{event.name} </div>
                <div>
                  <Link to={`/events/${id}`}>
                    <Button> View details</Button>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
