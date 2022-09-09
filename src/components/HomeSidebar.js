import { Button } from "../styled/Button";
import { selectToken } from "../store/user/selectors";
import { selectUser } from "../store/user/selectors";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const HomeSidebar = () => {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  return (
    <div>
      {token && user?.isAmbassador && (
        <div>
          {" "}
          <Link to="/events/addEvent">
            {" "}
            <Button> Create an event!</Button>
          </Link>
        </div>
      )}

      <div> Search event/ category</div>
      <div>Search event/ city </div>
    </div>
  );
};
