import { fetchAllUsers } from '../store/user/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectAllUsers } from '../store/user/selectors';
import { UserCard } from './UserCard';
import { AllUsersPageContainer, AllUsersContainer, Title } from '../styled';
import Spinner from './Spinner';

export const AllUsersComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllUsers);
  }, [dispatch]);

  const allUsers = useSelector(selectAllUsers);
  console.log('allUsers', allUsers);

  if (!allUsers)
    return (
      <>
        <Spinner />
      </>
    );

  return (
    <AllUsersPageContainer>
      <Title> Our members</Title>
      <AllUsersContainer>
        {allUsers.map((user) => {
          const { id, imageUrl, firstName, lastName } = user;
          return (
            <UserCard
              id={id}
              imageUrl={imageUrl}
              firstName={firstName}
              lastName={lastName}
              showLink={true}
            />
          );
        })}
      </AllUsersContainer>
    </AllUsersPageContainer>
  );
};
