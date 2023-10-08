import './styles.css';
import {
  Button,
  MessageBoxContainer,
  ClosingButton,
  EventDetailsField,
} from '../styled';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { selectToken, selectUser } from '../store/auth/selectors';
import { editStatusThunk } from '../store/event/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
//import Modal from "react-bootstrap/Modal";
import { IoCloseCircle } from 'react-icons/io5';
import { MdDateRange, MdLocationOn } from 'react-icons/md';

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

  const [message, setMessage] = useState('');
  //const [show, setShow] = useState(false);

  const updateStatusIfLoggedIn = (status) => {
    if (token) {
      console.log('here status', status);
      dispatch(editStatusThunk(id, status));
    } else {
      console.log('Please sign in');
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

  //  console.log("USERREPOSNE", userResponse());

  const eventParticipants = going && going.filter((e) => e.attendees.status);
  // console.log("participants", eventParticipants);

  return (
    <div key={id}>
      <img
        src={imageUrl}
        alt=""
        style={{
          width: '300px',
          borderRadius: '2vw',
          height: '180px',
        }}
      />
      <div style={{ padding: '0.5em' }}>
        <h3>{title}</h3>
        <EventDetailsField>
          <MdDateRange size={20} />{' '}
          {moment(date).format('dddd, D MMM YYYY, h:mm a')}
        </EventDetailsField>
        <EventDetailsField>
          <MdLocationOn size={20} /> {city}
        </EventDetailsField>
        <div>{showDetails && <p>{description}</p>}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {moment(date).isAfter() ? (
            <div>
              <div> {going && eventParticipants?.length} attendees! </div>
              <div> {spots - eventParticipants?.length} spots left!</div>
            </div>
          ) : (
            <div> {going && eventParticipants?.length} people attended! </div>
          )}
          {/* <div> {going && eventParticipants?.length} attendees! </div>{" "}
          <div> {spots - eventParticipants?.length} spots left!</div> */}
        </div>
        {moment(date).isAfter() &&
          (userResponse() === null ? (
            <div style={{ display: 'flex' }}>
              <Button
                onClick={() => {
                  token
                    ? updateStatusIfLoggedIn(true)
                    : setMessage('Please login to respond!');
                  // setShow(true);
                }}
              >
                Accept
              </Button>
              <Button
                onClick={() => {
                  token
                    ? updateStatusIfLoggedIn(false)
                    : setMessage('Please login to respond!');
                  //setShow(true);
                }}
              >
                Decline
              </Button>
              {message && (
                <MessageBoxContainer>
                  <p>{message}</p>
                  <ClosingButton onClick={() => setMessage('')}>
                    <IoCloseCircle />
                  </ClosingButton>
                </MessageBoxContainer>
              )}
            </div>
          ) : moment(date).isAfter() && userResponse() ? (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>You're attending!</p>
              <Button onClick={() => updateStatusIfLoggedIn(false)}>
                Change status
              </Button>
            </div>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>You've declined.</p>
              <Button onClick={() => updateStatusIfLoggedIn(true)}>
                Change status
              </Button>
            </div>
          ))}
        <div>
          {showLink && (
            <Link to={`/events/${id}`}>
              <Button> View details</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
