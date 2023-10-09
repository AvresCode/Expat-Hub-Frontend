import styled from 'styled-components';

export const Input = styled.input`
  width: 80%;
  padding: 0.75rem 1.2rem;
  margin: 0.3rem 0 1.3rem 0;
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
