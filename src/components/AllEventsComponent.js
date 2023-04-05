import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilteredEvents } from './FilteredEvents';
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
      <FilteredEvents
        events={allEvents}
        search={search}
        searchDate={searchDate}
      />
    </div>
  );
};
