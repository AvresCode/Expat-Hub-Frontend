import { Button, UserCardContainer } from "../styled";
import { Link } from "react-router-dom";
import { selectToken } from "../store/auth/selectors";
import { useSelector } from "react-redux";

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
  const token = useSelector(selectToken);
  return (
    <UserCardContainer key={id}>
      {" "}
      <img
        src={imageUrl}
        alt=""
        style={{
          width: "10vw",
          borderRadius: "1vw",
          marginRight: "1rem",
        }}
      />
      <div style={{ fontWeight: "600" }}>
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
        {token && showLink && (
          <Link to={`/chat`}>
            <Button> Message</Button>
          </Link>
        )}
      </div>
      <div>{showDetails && <div>{nationality}</div>}</div>
    </UserCardContainer>
  );
};
