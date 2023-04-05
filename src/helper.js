import moment from 'moment';

export const filteredPastEvents = (events) => {
  return events.filter((event) => moment(event.date).isAfter());
};

export const sortedEventByDate = (events) => {
  return events.sort((a, b) => moment(a.date).diff(b.date));
};
