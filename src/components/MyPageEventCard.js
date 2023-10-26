import moment from 'moment';
import {
  ProfileEventCardContainer,
  EventDetailsField,
  EventMoreDetails,
  EventTextContainer,
  EventImage,
  EventTextBottomContainer,
  EventImageContainer,
} from '../styled';
import { MdDateRange, MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FiInfo } from 'react-icons/fi';
import { FaEdit, FaTrash } from 'react-icons/fa';

export const MyPageEventCard = ({
  id,
  imageUrl,
  title,
  date,
  city,
  deleteEvent,
  showIcons,
}) => {
  return (
    <ProfileEventCardContainer key={id}>
      <EventImageContainer>
        <EventImage src={imageUrl} alt="" />
      </EventImageContainer>
      <EventTextContainer>
        <h3>{title}</h3>
        <EventTextBottomContainer>
          <EventDetailsField>
            <MdDateRange size={20} />{' '}
            {moment(date).format('dddd, D MMM YYYY, h:mm a')}
          </EventDetailsField>
          <EventDetailsField>
            <MdLocationOn size={20} /> {city}
          </EventDetailsField>
          <EventMoreDetails>
            <Link to={`/events/${id}`}>
              <FiInfo size={20} style={{ color: 'black' }} />
            </Link>
            {showIcons &&
              (new Date(date) > new Date() ? (
                <EventMoreDetails>
                  <div
                    onClick={() => deleteEvent(id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <FaTrash style={{ color: '#bc3608' }} size={18} />
                  </div>
                  <div>
                    <Link to={`/events/editEvent/${id}`}>
                      <FaEdit style={{ color: 'black' }} size={20} />
                    </Link>
                  </div>
                </EventMoreDetails>
              ) : (
                <p> Closed!</p>
              ))}
          </EventMoreDetails>
        </EventTextBottomContainer>
      </EventTextContainer>
    </ProfileEventCardContainer>
  );
};
