import moment from 'moment';
import { EventCard } from './EventCard';
import { AllEventsContainer } from '../styled';

export const FilteredEvents = ({ events, search, searchDate }) => {
  const filteredPastEvents = events.filter((event) =>
    moment(event.date).isAfter()
  );

  const sortedEventDate = filteredPastEvents.sort((a, b) =>
    moment(a.date).diff(b.date)
  );

  const eventData = sortedEventDate
    .filter((event) => event.title.toLowerCase().includes(search.toLowerCase()))
    .filter((event) =>
      searchDate ? moment(searchDate).isSame(moment(event.date), 'day') : true
    );

  // const eventData = sortedEventDate.filter(
  //   (event) =>
  //     event.title.toLowerCase().includes(search.toLowerCase()) &&
  //     (searchDate ? moment(searchDate).isSame(moment(event.date), 'day') : true)
  // );

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
                <EventCard
                  {...event}
                  showDetails={false}
                  showLink={true}
                  attendees={eventToAttendeesList(event)}
                />
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
