import styled from 'styled-components';

export const Button = styled.button`
  background: ${(props) => (props.primary ? 'white' : ' #34495e ')};
  color: ${(props) => (props.primary ? '#34495e' : 'white')};
  font-size: 1em;
  font-family: 'EB Garamond', serif;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 2px solid #34495e;
  border-radius: 3vw;
  cursor: pointer;

  &:hover {
    border: 2px solid #1e3163;
  }
`;

export const ClosingButton = styled.button`
  background-color: #fdebd0;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
`;
