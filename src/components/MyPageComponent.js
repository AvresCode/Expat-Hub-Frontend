import {
  MyPageComponentContainer,
  Button,
  TopLinksContainer,
  ProfileEventsContainer,
  ProfileAllEventsContainer,
  Title,
  ProfilePageButton,
} from '../styled';
import { useSelector } from 'react-redux';
import { selectAllEvents } from '../store/event/selectors';
import { selectUser } from '../store/auth/selectors';
import { MyPageEventCard } from './MyPageEventCard';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteOneEvent, fetchAllEvents } from '../store/event/thunks';
import { useEffect } from 'react';
import { getUserWithStoredToken } from '../store/auth/thunks';
import Spinner from './Spinner';
import { useState } from 'react';

export const MyPageComponent = () => {
  const [showIcons, setShowIcons] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllEvents);
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  const user = useSelector(selectUser);
  const allEvents = useSelector(selectAllEvents);

  if (!allEvents || !user)
    return (
      <>
        <Spinner />
      </>
    );

  // const eventsCreatedByUser = [...allEvents]
  //   .filter((event) => event.userId === user.id)
  //   .sort((a, b) => new Date(b.date) - new Date(a.date));

  const eventsCreatedByUser =
    user.events &&
    [...user.events].sort((a, b) => new Date(b.date) - new Date(a.date));

  console.log('eventsCreated', eventsCreatedByUser);

  // const eventsUserGoes = [...allEvents].filter((event) =>
  //   event.going?.find(
  //     (e) => e.attendees.userId === user.id && e.attendees.status === true
  //   )
  // );
  const eventsUserGoes = user.going?.filter((e) => e.attendees.status);

  const upcomingEvents = eventsUserGoes
    .filter((event) => new Date(event.date) > new Date())
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const pastEvents = eventsUserGoes
    .filter((event) => new Date(event.date) < new Date())
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const deleteEvent = (id) => dispatch(deleteOneEvent(id));

  return (
    <MyPageComponentContainer>
      <TopLinksContainer>
        {user?.isAmbassador && (
          <div>
            <Link to="/events/addEvent">
              <ProfilePageButton>Create an event!</ProfilePageButton>
            </Link>
          </div>
        )}
        <div>
          <Link to="/me/editProfile">
            <ProfilePageButton ProfilePageButton>
              Edit Your Profile!
            </ProfilePageButton>
          </Link>
        </div>
      </TopLinksContainer>
      <ProfileEventsContainer>
        <Title>Events You Created </Title>
        <ProfileAllEventsContainer>
          {eventsCreatedByUser?.map((event) => {
            const { id, imageUrl, title, date, city } = event;
            return (
              <MyPageEventCard
                id={id}
                imageUrl={imageUrl}
                title={title}
                city={city}
                date={date}
                deleteEvent={deleteEvent}
                showIcons={true}
              />
            );
          })}
        </ProfileAllEventsContainer>
      </ProfileEventsContainer>
      <ProfileEventsContainer>
        <Title> Your Upcoming Events</Title>
        <ProfileAllEventsContainer>
          {upcomingEvents.map((event) => {
            const { id, imageUrl, title, date, city } = event;
            return (
              <MyPageEventCard
                id={id}
                imageUrl={imageUrl}
                title={title}
                city={city}
                date={date}
                deleteEvent={deleteEvent}
                showIcons={false}
              />
            );
          })}
        </ProfileAllEventsContainer>
      </ProfileEventsContainer>
      <ProfileEventsContainer>
        <Title>Your Past Events</Title>
        <ProfileAllEventsContainer>
          {pastEvents.map((event) => {
            const { id, imageUrl, title, date, city } = event;
            return (
              <MyPageEventCard
                id={id}
                imageUrl={imageUrl}
                title={title}
                city={city}
                date={date}
                deleteEvent={deleteEvent}
                showIcons={false}
              />
            );
          })}
        </ProfileAllEventsContainer>
      </ProfileEventsContainer>
    </MyPageComponentContainer>
  );
};
