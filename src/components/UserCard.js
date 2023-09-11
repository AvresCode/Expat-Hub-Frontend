import { Button, UserCardContainer, UserDetailsContainer } from '../styled';
import { Link } from 'react-router-dom';
import { selectToken } from '../store/auth/selectors';
import { useSelector } from 'react-redux';
import moment from 'moment';

export const UserCard = ({
  id,
  imageUrl,
  firstName,
  lastName,
  city,
  nationality,
  education,
  birthDate,
  showDetails,
  showLink,
}) => {
  const token = useSelector(selectToken);
  return (
    <UserCardContainer key={id}>
      <img
        src={imageUrl}
        alt=""
        style={{
          width: '120px',
          borderRadius: '1vw',
          marginRight: '1rem',
        }}
      />
      <div style={{ fontWeight: '600', marginRight: '3rem' }}>
        {firstName} {lastName}
      </div>
      <div>
        {showLink && (
          <Link to={`/users/${id}`}>
            <Button> View details</Button>
          </Link>
        )}
      </div>
      <UserDetailsContainer>
        {showDetails && (
          <div style={{ fontWeight: '600', marginRight: '4vw' }}>
            <div> Nationality: {nationality}</div> <div>Lives in : {city}</div>{' '}
            <div>Education: {education}</div>
            <div>Birthdate: {moment(birthDate).format(' MMM YYYY')}</div>
          </div>
        )}
        <div>
          {' '}
          {token && (
            <Link to={`/chat`}>
              <Button> Message</Button>
            </Link>
          )}
        </div>{' '}
      </UserDetailsContainer>
    </UserCardContainer>
  );
};
