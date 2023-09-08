import moment from 'moment';
import { EventCard } from './EventCard';
import { AllEventsContainer, Button, EventCardContainer } from '../styled';
import { filteredPastEvents, sortedEventByDate } from '../helper';

export const FilterEvents = ({ events, search, searchDate }) => {
  const filteredAndSortedEvents = sortedEventByDate(filteredPastEvents(events));

  const eventData = filteredAndSortedEvents
    .filter((event) => event.title.toLowerCase().includes(search.toLowerCase()))
    .filter((event) =>
      searchDate ? moment(searchDate).isSame(moment(event.date), 'day') : true
    );

  const eventToAttendeesList = (event) => {
    return event.going.map((user) => ({
      userId: user.id,
      status: user.attendees.status,
    }));
  };

  return (
    <>
      {eventData.length > 0 ? (
        <AllEventsContainer>
          {eventData.map((event) => {
            return (
              <div key={event.id}>
                <EventCardContainer>
                  <EventCard
                    {...event}
                    showDetails={false}
                    showLink={true}
                    attendees={eventToAttendeesList(event)}
                  />
                </EventCardContainer>
              </div>
            );
          })}
        </AllEventsContainer>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <h2>Oops... no event found!</h2>
          <p>
            <strong>Please try different keywords or filters.</strong>
          </p>
          <Button onClick={() => window.location.reload()}>
            Go Back to All Events
          </Button>
        </div>
      )}
    </>
  );
};
