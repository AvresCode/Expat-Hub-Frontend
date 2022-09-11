import {
  CommentContainer,
  PhotoNameContainer,
  CommentTextContainer,
} from "../styled";

export const CommentCard = ({ id, text, user }) => {
  return (
    <CommentContainer key={id}>
      <PhotoNameContainer>
        {" "}
        <div>
          <img
            src={user.imageUrl}
            alt=""
            style={{
              width: "60%",
              borderRadius: "5vw",
            }}
          />
        </div>
        <div>{user.firstName}</div>
      </PhotoNameContainer>
      <CommentTextContainer>{text}</CommentTextContainer>
    </CommentContainer>
  );
};
