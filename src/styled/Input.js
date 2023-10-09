import styled from 'styled-components';

export const Input = styled.input`
  width: 80%;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 1vw;
  background-color: white;
  color: #1e3163;
  ::placeholder {
    color: #1e3163;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  // justify-content: space-between;
`;

export const Textarea = styled.textarea`
  width: 90%;
  height: 8vh;
  border-radius: 1vw;
  padding: 0.5rem;
`;
