import {
  CommentContainer,
  PhotoNameContainer,
  CommentTextContainer,
} from '../styled';

export const CommentCard = ({ id, text, user }) => {
  return (
    <CommentContainer key={id}>
      <PhotoNameContainer>
        <img
          src={user.imageUrl}
          alt=""
          style={{
            width: '100%',
            borderRadius: '5vw',
          }}
        />
        <p>{user.firstName}</p>
      </PhotoNameContainer>
      <p>{text}</p>
    </CommentContainer>
  );
};
