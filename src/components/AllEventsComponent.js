import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterEvents } from './FilteredEvents';
import { Input } from '../styled';
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
    <div style={{ textAlign: 'center' }}>
      <Input
        type="text"
        placeholder="Search event.."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        <h2>Pick a date: </h2>
        <Input
          type="date"
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
        />
      </div>
      <FilterEvents
        events={allEvents}
        search={search}
        searchDate={searchDate}
      />
    </div>
  );
};
