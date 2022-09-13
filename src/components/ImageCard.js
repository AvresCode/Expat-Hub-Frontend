import { ImageNameContainer } from "../styled";
export const ImageCard = ({ id, imageUrl, user }) => {
  return (
    <ImageNameContainer key={id}>
      {" "}
      <div>
        {" "}
        <img
          src={imageUrl}
          alt=""
          style={{
            maxWidth: "100%",

            borderRadius: "3vw",
          }}
        />
      </div>
      <div>
        Posted by {user.firstName} {user.lastName}
      </div>
    </ImageNameContainer>
  );
};