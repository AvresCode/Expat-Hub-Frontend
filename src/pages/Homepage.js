import { Title } from "../styled";
import { Link } from "react-router-dom";
import { LinkWord } from "../styled";
import styled from "styled-components";
import { EventCard } from "../components/EventCard";

export const Homepage = () => {
  return (
    <Container>
      <h3>Hello there 👋</h3>
      <EventCard />
    </Container>
  );
};

const Container = styled.div`
  margin: 20px;
`;
