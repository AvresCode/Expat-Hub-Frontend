import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import { ImageNameContainer } from "../styled";
export const ImageCard = ({ id, imageUrl, user }) => {
  return (
    <ImageNameContainer key={id}>
      {" "}
      <div>
        {" "}
        <Zoom>
          <img
            src={imageUrl}
            alt=""
            style={{
              maxWidth: "100%",

              borderRadius: "3vw",
            }}
          />
        </Zoom>
      </div>
      <div>
        Posted by {user.firstName} {user.lastName}
      </div>
    </ImageNameContainer>
  );
};
