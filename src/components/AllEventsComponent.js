import { fetchAllEvents } from '../store/event/thunks';
import { useEffect, useState } from 'react';
import { selectAllEvents } from '../store/event/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { EventCard } from './EventCard';
import { AllEventsContainer, Input } from '../styled';
import moment from 'moment';

export const AllEventsComponent = () => {
  const [search, setSearch] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllEvents);
  }, [dispatch]);

  const allEvents = useSelector(selectAllEvents);

  if (!allEvents) return <div>Loading ...</div>;

  const filteredPastEvents = [...allEvents].filter((event) =>
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

  const eventToAttendeesList = (event) => {
    return event.going.map((user) => ({
      userId: user.id,
      status: user.attendees.status,
    }));
  };

  return (
    <div style={{ width: '85vw' }}>
      <Input
        type="text"
        placeholder="Search for event.."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: '70vw' }}
      />
      <div>
        {' '}
        <h2>Pick a date: </h2>
        <Input
          style={{ width: '15vw' }}
          type="date"
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
        />
      </div>
      <AllEventsContainer>
        {' '}
        {eventData.map((event) => {
          const { id, imageUrl, title, city, date, description, spots, going } =
            event;
          return (
            <div key={id}>
              <EventCard
                id={id}
                imageUrl={imageUrl}
                title={title}
                city={city}
                date={date}
                description={description}
                spots={spots}
                going={going}
                showDetails={false}
                showLink={true}
                attendees={eventToAttendeesList(event)}
              />
            </div>
          );
        })}
      </AllEventsContainer>
    </div>
  );
};
