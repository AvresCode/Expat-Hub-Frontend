import "./styles.css";
import {
  EventCardContainer,
  Button,
  MessageBoxContainer,
  ClosingButton,
} from "../styled";
import { Link } from "react-router-dom";
import moment from "moment";
import { selectToken, selectUser } from "../store/auth/selectors";
import { editStatusThunk } from "../store/event/thunks";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
//import Modal from "react-bootstrap/Modal";
import { IoCloseCircle } from "react-icons/io5";

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

  const [message, setMessage] = useState("");
  //const [show, setShow] = useState(false);

  const updateStatusIfLoggedIn = (status) => {
    if (token) {
      console.log("here status", status);
      dispatch(editStatusThunk(id, status));
    } else {
      console.log("Please sign in");
    }
  };

  const userResponse = () => {
    if (!profile) {
      return null;
    }
    const response = attendees?.find(
      (attendee) => attendee.userId === profile.id
    );
    if (!response) {
      return null;
    } else {
      return response.status;
    }
  };

  console.log("USERREPOSNE", userResponse());

  const eventParticipants = going && going.filter((e) => e.attendees.status);
  console.log("participants", eventParticipants);

  return (
    <EventCardContainer key={id}>
      {" "}
      <img
        src={imageUrl}
        alt=""
        style={{
          maxWidth: "100%",
          borderRadius: "1vw",
        }}
      />
      <div>
        {" "}
        <h3>{title}</h3>
        <p>
          {" "}
          On {moment(date).format("dddd, D MMM YYYY, h:mm a")} in {city}
        </p>
        <div>{showDetails && <p>{description}</p>}</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {" "}
          <div> {going && eventParticipants.length} attendees! </div>{" "}
          <div> {spots - eventParticipants.length} spots left!</div>
        </div>
        {userResponse() === null ? (
          <div style={{ display: "flex" }}>
            {" "}
            <Button
              onClick={() => {
                token
                  ? updateStatusIfLoggedIn(true)
                  : setMessage("Please login to respond!");
                // setShow(true);
              }}
            >
              {" "}
              Accept
            </Button>
            <Button
              onClick={() => {
                token
                  ? updateStatusIfLoggedIn(false)
                  : setMessage("Please login to respond!");
                //setShow(true);
              }}
            >
              {" "}
              Decline
            </Button>
            {message && (
              <MessageBoxContainer>
                <p>{message}</p>
                <ClosingButton onClick={() => setMessage("")}>
                  <IoCloseCircle />
                </ClosingButton>
              </MessageBoxContainer>
            )}
            {/* <Modal show={show} onHide={setShow(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Woohoo, you're reading this text in a modal!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={setShow(false)}>
                  Close
                </Button>
                <Button variant="primary" onClick={setShow(false)}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal> */}
          </div>
        ) : userResponse() ? (
          <div>
            <p>You're attending!</p>{" "}
            <Button onClick={() => updateStatusIfLoggedIn(false)}>
              {" "}
              Change status{" "}
            </Button>
          </div>
        ) : (
          <div>
            <p>You've declined.</p>
            <Button onClick={() => updateStatusIfLoggedIn(true)}>
              {" "}
              Change status{" "}
            </Button>
          </div>
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
      {/* <div>
        {showDetails && (
          <div>
            {" "}
            <p>{description} </p>{" "}
          </div>
        )}
      </div> */}
    </EventCardContainer>
  );
};
