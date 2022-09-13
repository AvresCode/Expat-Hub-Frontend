import { Button } from "../styled/Button";
import { selectToken } from "../store/auth/selectors";
import { selectUser } from "../store/auth/selectors";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SidebarContainer } from "../styled";

export const HomeSidebar = () => {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  return (
    <SidebarContainer>
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
    </SidebarContainer>
  );
};
