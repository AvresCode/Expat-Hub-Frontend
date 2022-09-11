import styled from "styled-components";

export const EventCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 0.1vw #ece0d2 solid;
  box-shadow: #ece0d2 2.4px 2.4px 8px;
  border-radius: 3vw;
  background-color: #fcf9f5;
  padding: 1vh 1vw;
  margin: 2vh 2vw;
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  justify-content: center;
  align-items: center;
  border: 0.1vw #ebe9f0 solid;
  border-radius: 3vw;
  margin: 1vh 3vw;
`;

export const AllEventsContainer = styled.div`
  display: flex;
  flex: 40%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 750px) {
    flex: 85%;
  }
`;
export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 35%;
  justify-content: space-between;
  align-items: center;
  border: 0.1vw #ebe9f0 solid;
`;
export const EventDetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 1vh 3vw;
  border: 0.1vw #ebe9f0 solid;
  border-radius: 3vw;
`;

export const EventDetailsLeftContainer = styled.div`
  display: flex;
  flex: 55%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 750px) {
    flex: 85%;
  }
`;
export const EventDetailsRightContainer = styled.div`
  display: flex;
  flex: 40%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 750px) {
    flex: 85%;
  }
`;
export const CommentSectionContainer = styled.div`
  display: flex;
  flex: 60%;
  justify-content: center;
  align-items: center;
  @media (max-width: 750px) {
    flex: 80%;
  }
`;
