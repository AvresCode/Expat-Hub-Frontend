import { Button } from "../styled";
import { Link } from "react-router-dom";

export const UserCard = ({
  id,
  imageUrl,
  firstName,
  lastName,
  city,

  showDetails,
  showLink,
}) => {
  return (
    <div key={id}>
      {" "}
      <img src={imageUrl} alt="" />
      <div></div>
      <div>
        {" "}
        {showLink && (
          <Link to={`/users/${id}`}>
            <Button> View details</Button>
          </Link>
        )}
      </div>
      <div>{showDetails && <div></div>}</div>
    </div>
  );
};
