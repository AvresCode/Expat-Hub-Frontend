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
  CommentSectionContainer,
  AttendeesContainer,
  AllPhotosContainer,
  OneAttendee,
  Heading,
  EventDetailsTopContainer,
  EventDetailsRightContainer,
  ImageSectionContainer,
  Image,
  SubscriptionContainer,
  CustomText,
} from '../styled';
import { useNavigate } from 'react-router-dom';
import Spinner from './Spinner';

export const EventDetailsComponent = () => {
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const { id } = useParams();
  const [showForm, setShowForm] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOneEvent(id));
  }, [dispatch, id]);

  const oneEvent = useSelector(selectEventDetails);

  if (!oneEvent)
    return (
      <>
        <Spinner />
      </>
    );

  const eventToAttendeesList = oneEvent.going?.map((user) => ({
    userId: user.id,
    status: user.attendees.status,
  }));

  return (
    <EventDetailsContainer>
      <EventDetailsTopContainer>
        <EventDetailsLeftContainer>
          {oneEvent && (
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
          )}
        </EventDetailsLeftContainer>
        <EventDetailsRightContainer>
          <Heading> Attendees</Heading>
          <AttendeesContainer>
            {oneEvent &&
              // oneEvent.going?.map((person) => {
              oneEvent.going
                ?.filter((e) => e.attendees.status)
                .map((person) => {
                  return (
                    <OneAttendee key={person.id}>
                      <Link to={`/users/${person.id}`}>
                        <Image src={person.imageUrl} alt="" />
                      </Link>
                      {person.firstName} {person.lastName}
                    </OneAttendee>
                  );
                })}
          </AttendeesContainer>
        </EventDetailsRightContainer>
      </EventDetailsTopContainer>
      <CommentSectionContainer>
        <Heading> Comments</Heading>
        {token && (
          <PostComment imageUrl={user?.imageUrl} firstName={user?.firstName} />
        )}
        {oneEvent &&
          (oneEvent.comments.length > 0 ? (
            oneEvent.comments.map((comment) => {
              return (
                <CommentCard
                  key={comment.id}
                  text={comment.text}
                  user={comment.user}
                />
              );
            })
          ) : (
            <CustomText>No comments available for this event.</CustomText>
          ))}
        {!token && (
          <SubscriptionContainer>
            <p>Join the community to comment</p>
            <Link to="/signup">
              <Button onClick={() => navigate}> Sign Up</Button>
            </Link>
          </SubscriptionContainer>
        )}
      </CommentSectionContainer>
      <ImageSectionContainer>
        <Heading> Photos</Heading>
        <AllPhotosContainer>
          {oneEvent &&
            (oneEvent.images.length > 0 ? (
              oneEvent.images.map((image) => {
                return (
                  <ImageCard
                    key={image.id}
                    id={image.id}
                    imageUrl={image.imageUrl}
                    user={image.user}
                  />
                );
              })
            ) : (
              <CustomText>
                No photos have been posted for this event.
              </CustomText>
            ))}
        </AllPhotosContainer>
        {token && (
          <>
            <Button
              style={{ width: '10rem', margin: 'auto' }}
              onClick={() => setShowForm(true)}
            >
              Post a photo
            </Button>
            {showForm && <PostImage />}
          </>
        )}
      </ImageSectionContainer>
    </EventDetailsContainer>
  );
};
