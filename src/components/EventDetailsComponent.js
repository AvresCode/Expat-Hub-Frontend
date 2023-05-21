import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchOneEvent } from '../store/event/thunks';
import { useParams } from 'react-router-dom';
import { selectEventDetails } from '../store/event/selectors';
import { EventCard } from './EventCard';
import { selectToken } from '../store/auth/selectors';
import { selectUser } from '../store/auth/selectors';
import { Link } from 'react-router-dom';
import { CommentCard } from './CommentCard';
import { PostComment } from './PostComment';
import { ImageCard } from './ImageCard';
import { PostImage } from './PostImage';
import {
  Button,
  EventDetailsContainer,
  EventDetailsLeftContainer,
  EventDetailsRightContainer,
  CommentSectionContainer,
  AttendeesContainer,
  AttendeesMainContainer,
  ImageSectionContainer,
  AllPhotosContainer,
  EvenDetailsPageContainer,
} from '../styled';

export const EventDetailsComponent = () => {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const { id } = useParams();
  const [showForm, setShowForm] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOneEvent(id));
  }, [dispatch, id]);

  const oneEvent = useSelector(selectEventDetails);

  if (!oneEvent) return <p> Loading ...</p>;

  // const eventToAttendeesList = (event) => {
  //   return event.going.map((user) => ({
  //     userId: user.id,
  //     status: user.attendees.status,
  //   }));
  // };

  const eventToAttendeesList = oneEvent.going?.map((user) => ({
    userId: user.id,
    status: user.attendees.status,
  }));

  return (
    <EvenDetailsPageContainer>
      <EventDetailsContainer>
        <EventDetailsLeftContainer>
          {oneEvent && (
            <div
              style={{
                fontFamily: '"Open Sans",sans-serif',
                lineHeight: '1.7',
                backgroundColor: '#f9f6f2',
                borderRadius: '2vw',
                padding: '2rem',
              }}
            >
              <EventCard
                id={id}
                imageUrl={oneEvent.imageUrl}
                title={oneEvent.title}
                city={oneEvent.city}
                date={oneEvent.date}
                description={oneEvent.description}
                spots={oneEvent.spots}
                going={oneEvent.going}
                comments={oneEvent.comments}
                showDetails={true}
                showLink={false}
                attendees={eventToAttendeesList}
              />
            </div>
          )}
        </EventDetailsLeftContainer>
        <EventDetailsRightContainer>
          {' '}
          <h3> Attendees:</h3>
          <AttendeesMainContainer>
            {' '}
            {oneEvent &&
              // oneEvent.going?.map((person) => {
              oneEvent.going
                ?.filter((e) => e.attendees.status)
                .map((person) => {
                  return (
                    <AttendeesContainer key={person.id}>
                      <div>
                        <Link to={`/users/${person.id}`}>
                          <img
                            src={person.imageUrl}
                            alt=""
                            style={{
                              maxWidth: '100%',
                              borderRadius: '1vw',
                            }}
                          />
                        </Link>
                      </div>{' '}
                      {person.firstName} {person.lastName}
                      <div></div>
                    </AttendeesContainer>
                  );
                })}
          </AttendeesMainContainer>
        </EventDetailsRightContainer>

        <CommentSectionContainer>
          <div>
            <h3> Comments</h3>
          </div>
          {token && (
            <div>
              <PostComment
                imageUrl={user?.imageUrl}
                firstName={user?.firstName}
              />
            </div>
          )}
          {oneEvent &&
            oneEvent.comments?.map((comment) => {
              return (
                <CommentCard
                  key={comment.id}
                  text={comment.text}
                  user={comment.user}
                />
              );
            })}{' '}
        </CommentSectionContainer>
        <ImageSectionContainer>
          {' '}
          <div style={{ width: '100%', textAlign: 'center' }}>
            <h3> Photos</h3>
          </div>{' '}
          <AllPhotosContainer>
            {' '}
            {oneEvent &&
              oneEvent.images?.map((image) => {
                return (
                  <ImageCard
                    key={image.id}
                    id={image.id}
                    imageUrl={image.imageUrl}
                    user={image.user}
                  />
                );
              })}{' '}
          </AllPhotosContainer>
          {token && (
            <div>
              {' '}
              <Button onClick={() => setShowForm(true)}>Post a photo </Button>
              {showForm && <PostImage />}
            </div>
          )}
        </ImageSectionContainer>
      </EventDetailsContainer>
    </EvenDetailsPageContainer>
  );
};
