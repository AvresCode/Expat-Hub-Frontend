import {
  MyPageComponentContainer,
  CreatedEventsContainer,
  UpcomingEventsContainer,
  PastEventsContainer,
  Button,
  TopLinksContainer,
  ProfileEventContainer,
  EventLinkContainer,
} from '../styled';
import { useSelector } from 'react-redux';
import { selectAllEvents } from '../store/event/selectors';
import { selectUser } from '../store/auth/selectors';
import { MyPageEventCard } from './MyPageEventCard';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteOneEvent } from '../store/event/thunks';

export const MyPageComponent = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const allEvents = useSelector(selectAllEvents);

  if (!allEvents)
    return (
      <div>
        {' '}
        <p> Loading ...</p>
      </div>
    );

  if (!user)
    return (
      <div>
        {' '}
        <p> Loading ...</p>
      </div>
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

  console.log('eventsUserGoes', eventsUserGoes);

  const upcomingEvents = eventsUserGoes
    .filter((event) => new Date(event.date) > new Date())
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  // console.log("upcomingEvents", upcomingEvents);

  const pastEvents = eventsUserGoes
    .filter((event) => new Date(event.date) < new Date())
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  console.log('pastEvents', pastEvents);

  return (
    <MyPageComponentContainer>
      <TopLinksContainer>
        {' '}
        {user?.isAmbassador && (
          <div>
            {' '}
            <Link to="/events/addEvent">
              {' '}
              <Button style={{ width: '25vw', height: '7vh' }}>
                {' '}
                Create an event!
              </Button>
            </Link>
          </div>
        )}
        <div>
          {' '}
          <Link to="/me/editProfile">
            {' '}
            <Button style={{ width: '25vw', height: '7vh' }}>
              {' '}
              Edit profile!
            </Button>
          </Link>
        </div>
      </TopLinksContainer>
      <CreatedEventsContainer>
        <h2 style={{ textAlign: 'center' }}>Events you created </h2>

        {eventsCreatedByUser?.map((event) => {
          const { id, imageUrl, title, date, city } = event;
          return (
            <ProfileEventContainer key={id}>
              <MyPageEventCard
                imageUrl={imageUrl}
                title={title}
                city={city}
                date={date}
              />
              <EventLinkContainer>
                {new Date(event.date) > new Date() ? (
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {' '}
                    <div>
                      {' '}
                      <Link to={`/events/editEvent/${id}`}>
                        {' '}
                        <Button> Edit event</Button>{' '}
                      </Link>
                    </div>
                    <div>
                      {' '}
                      <Button onClick={() => dispatch(deleteOneEvent(id))}>
                        {' '}
                        Delete event
                      </Button>
                    </div>
                  </div>
                ) : (
                  <h4> Closed!</h4>
                )}

                <Link to={`/events/${id}`}>
                  <Button> View details</Button>
                </Link>
              </EventLinkContainer>
            </ProfileEventContainer>
          );
        })}
      </CreatedEventsContainer>
      <UpcomingEventsContainer>
        <h2 style={{ textAlign: 'center' }}> Your upcoming events</h2>
        {upcomingEvents.map((event) => {
          const { id, imageUrl, title, date, city } = event;
          return (
            <ProfileEventContainer key={id}>
              <MyPageEventCard
                imageUrl={imageUrl}
                title={title}
                city={city}
                date={date}
              />
              <EventLinkContainer>
                <Link to={`/events/${id}`}>
                  <Button> View details</Button>
                </Link>
              </EventLinkContainer>
            </ProfileEventContainer>
          );
        })}
      </UpcomingEventsContainer>
      <PastEventsContainer>
        <h2 style={{ textAlign: 'center' }}>Your past events</h2>
        {pastEvents.map((event) => {
          const { id, imageUrl, title, date, city } = event;
          return (
            <ProfileEventContainer key={id}>
              <MyPageEventCard
                imageUrl={imageUrl}
                title={title}
                city={city}
                date={date}
              />
              <EventLinkContainer>
                <Link to={`/events/${id}`}>
                  <Button> View details</Button>
                </Link>
              </EventLinkContainer>
            </ProfileEventContainer>
          );
        })}
      </PastEventsContainer>
    </MyPageComponentContainer>
  );
};
