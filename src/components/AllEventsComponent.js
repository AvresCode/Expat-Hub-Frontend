import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterEvents } from './FilteredEvents';
import { Input, SearchContainer, SearchDateContainer } from '../styled';
import { fetchAllEvents } from '../store/event/thunks';
import { selectAllEvents } from '../store/event/selectors';

export const AllEventsComponent = () => {
  const [search, setSearch] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllEvents);
  }, [dispatch]);

  const allEvents = useSelector(selectAllEvents);

  if (!allEvents) return <div>Loading ...</div>;

  return (
    <>
      <SearchContainer>
        <h1>Search Events</h1>
        <Input
          type="text"
          placeholder="Search by event name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Input
          type="date"
          value={searchDate}
          placeholder="Pick a date"
          onChange={(e) => setSearchDate(e.target.value)}
        />
      </SearchContainer>
      <FilterEvents
        events={allEvents}
        search={search}
        searchDate={searchDate}
      />
    </>
  );
};
