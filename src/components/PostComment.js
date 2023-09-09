import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { newCommentThunk } from '../store/event/thunks';
import {
  CommentContainer,
  PhotoNameContainer,
  Button,
  Form,
  Textarea,
} from '../styled';

export const PostComment = ({ imageUrl, firstName }) => {
  const { id } = useParams();
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(newCommentThunk(id, comment));
    setComment('');
  };
  return (
    <CommentContainer>
      <PhotoNameContainer>
        <img
          src={imageUrl}
          alt=""
          style={{
            width: '100%',
            borderRadius: '5vw',
          }}
        />
        <div> {firstName}</div>
      </PhotoNameContainer>
      <Form onSubmit={submitForm}>
        <Textarea
          placeholder="Write your comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button type="submit"> Post</Button>
      </Form>
    </CommentContainer>
  );
};
