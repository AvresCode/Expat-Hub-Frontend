import { Button, UserCardContainer } from "../styled";
import { Link } from "react-router-dom";

export const UserCard = ({
  id,
  imageUrl,
  firstName,
  lastName,
  city,
  nationality,
  showDetails,
  showLink,
}) => {
  return (
    <UserCardContainer key={id}>
      {" "}
      <img
        src={imageUrl}
        alt=""
        style={{
          width: "10vw",
          borderRadius: "1vw",
        }}
      />
      <div>
        {" "}
        {firstName} {lastName}
      </div>
      <div>
        {" "}
        {showLink && (
          <Link to={`/users/${id}`}>
            <Button> View details</Button>
          </Link>
        )}
      </div>
      <div>
        {" "}
        {showLink && (
          <Link to={``}>
            <Button> Message</Button>
          </Link>
        )}
      </div>
      <div>{showDetails && <div>{nationality}</div>}</div>
    </UserCardContainer>
  );
};
