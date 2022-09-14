import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { newCommentThunk } from "../store/event/thunks";
import { CommentContainer, PhotoNameContainer, Button } from "../styled";

export const PostComment = ({ imageUrl, firstName }) => {
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(newCommentThunk(id, comment));
    setComment("");
  };
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
        <form style={{ display: "flex" }} onSubmit={submitForm}>
          <textarea
            placeholder="Write your comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            style={{ width: "30vw", height: "6vh", borderRadius: "1VW" }}
          />

          <Button type="submit"> Post</Button>
        </form>{" "}
      </CommentContainer>
    </div>
  );
};
