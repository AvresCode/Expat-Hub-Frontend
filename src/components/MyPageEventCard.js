import moment from 'moment';
import { ProfileEventCardContainer } from '../styled';

export const MyPageEventCard = ({ id, imageUrl, title, date, city }) => {
  return (
    <ProfileEventCardContainer key={id}>
      <div
        style={{
          height: '12em',
          width: '80%',
          overflow: 'hidden',
          marginRight: '2vw',
        }}
      >
        <img
          src={imageUrl}
          alt=""
          style={{
            width: '100%',
            minHeight: '80%',
            borderRadius: '3vw',
            objectFit: 'cover',
          }}
        />
      </div>
      <div>
        <h3>{title}</h3>
        <p>
          On {moment(date).format('dddd, D MMM YYYY, h:mm a')} in {city}
        </p>
      </div>
    </ProfileEventCardContainer>
  );
};
