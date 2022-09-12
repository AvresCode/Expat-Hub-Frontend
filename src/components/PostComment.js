import { useState } from "react";
import {
  CommentContainer,
  PhotoNameContainer,
  CommentTextContainer,
  Button,
} from "../styled";

export const PostComment = ({ imageUrl, firstName }) => {
  const [comment, setComment] = useState("");
  return (
    <div>
      {" "}
      <CommentContainer>
        <PhotoNameContainer>
          {" "}
          <div>
            {" "}
            <img
              src={imageUrl}
              alt=""
              style={{
                width: "60%",
                borderRadius: "5vw",
              }}
            />
          </div>{" "}
          <div> {firstName}</div>
        </PhotoNameContainer>
        <form style={{ display: "flex" }}>
          <input
            placeholder="Write your comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            style={{ width: "30vw", height: "6vh", borderRadius: "1VW" }}
          />
          <Button> Post</Button>
        </form>{" "}
      </CommentContainer>
    </div>
  );
};
