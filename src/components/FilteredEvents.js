import moment from 'moment';
import { EventCard } from './EventCard';
import { AllEventsContainer, EventCardContainer } from '../styled';
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
    <div>
      {eventData.length > 0 ? (
        <AllEventsContainer>
          {' '}
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
        <h2> Oops... no event found! </h2>
      )}
    </div>
  );
};
