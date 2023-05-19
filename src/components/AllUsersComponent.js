import { fetchAllUsers } from '../store/user/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectAllUsers } from '../store/user/selectors';
import { UserCard } from './UserCard';
import { AllUsersPageContainer, AllUsersContainer } from '../styled';

export const AllUsersComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllUsers);
  }, [dispatch]);

  const allUsers = useSelector(selectAllUsers);
  console.log('allUsers', allUsers);

  if (!allUsers)
    return (
      <div>
        {' '}
        <p> Loading ...</p>
      </div>
    );

  return (
    <AllUsersPageContainer>
      <h2> Our members</h2>
      <AllUsersContainer>
        {allUsers.map((user) => {
          const { id, imageUrl, firstName, lastName } = user;
          return (
            <div key={id}>
              <UserCard
                id={id}
                imageUrl={imageUrl}
                firstName={firstName}
                lastName={lastName}
                showLink={true}
              />
            </div>
          );
        })}
      </AllUsersContainer>
    </AllUsersPageContainer>
  );
};
