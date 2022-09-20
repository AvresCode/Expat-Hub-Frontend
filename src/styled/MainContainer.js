import styled from "styled-components";

export const EventCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 270px;
  justify-content: center;
  align-items: center;
  border: 0.1vw #34495e solid;
  box-shadow: #ece0d2 2.4px 2.4px 8px;
  border-radius: 3vw;
  background-color: #fcf9f5;
  padding: 1vh 1vw;
  margin: 2vh 2vw;
  @media (max-width: 750px) {
    max-width: 70vw;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  background-color: #f2e4cd;
  justify-content: center;
  align-items: center;
  border: 0.1vw #ebe9f0 solid;
  border-radius: 3vw;
  margin: 1vh 3vw;
`;

export const AllEventsContainer = styled.div`
  display: flex;
  flex: 40%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 750px) {
    flex: 75%;
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
  justify-content: center;
  margin: 3vh 5vw;
  border: 0.1vw #ebe9f0 solid;
  border-radius: 3vw;
`;

export const EventDetailsLeftContainer = styled.div`
  display: flex;
  flex: 50%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 750px) {
    flex: 80%;
  }
`;

export const CommentSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  // flex: 60%;
  justify-content: center;
  align-items: center;
  border-radius: 2vw;
  background-color: #5f7285;
  color: white;
  padding: 1vh 1vw;
  margin: 2vh 2vw;
  @media (max-width: 750px) {
    // flex: 70%;
    width: 80vw;
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 60vw;
  height: 8vh;
  color: #34495e;
  border-radius: 1vw;
  padding: 1vh 1vw;
  margin: 2vh 2vw;
`;
export const PhotoNameContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 12vw;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 1.5vw;
  color: white;
`;
export const CommentTextContainer = styled.div`
  width: 50vw;
  height: 5vh;
  background-color: #fcf9f5;
  color: #34495e;
  border-radius: 1vw;
  padding: 1vh 1vw;
  //margin: 2vh 2vw;
`;

export const EventDetailsRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25vw;
  //flex: 20%;
  justify-content: center;
  align-items: center;
  border: 0.1vw #34495e solid;
  border-radius: 3vw;
  background-color: #fcf9f5;
  padding: 2vh 1vw;
  @media (max-width: 750px) {
    flex: 30%;
  }
`;

export const AttendeesMainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
export const AttendeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10vw;
  margin: 3vh 1vw;
`;
export const ImageSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  justify-content: flex-start;
  align-items: flex-start;
  border: 0.1vw #34495e solid;
  border-radius: 3vw;
  background-color: #fcf9f5;
  padding: 2vh 1vw;
`;

export const ImageNameContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 12vw;
  height: 20vh;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 1.5vw;
  color: #34495e;
  border: 0.1vw #34495e solid;
  border-radius: 3vw;
  margin: 2vh 1vw;
  padding: 1vh 1vw;
`;

export const AllPhotosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const UserCardContainer = styled.div`
  display: flex;
  width: 70vw;
`;

export const MessageBoxContainer = styled.div`
  background-color: #fdebd0;
  border: 0.1vw #34495e solid;
  padding: 0.5vw;
  border-radius: 1em;
  position: absolute;
  width: 250px;
  text-align: center;
`;

export const MyPageComponentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2vh 3vw;
  gap: 1rem;
`;

export const CreatedEventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  fex-wrap: wrap;
  flex: 40%;
  border-radius: 1em;
  @media (max-width: 750px) {
    flex: 75%;
  }
`;
export const UpcomingEventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  fex-wrap: wrap;
  flex: 40%;
  border-radius: 1em;
  @media (max-width: 750px) {
    flex: 75%;
  }
`;
export const PastEventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  fex-wrap: wrap;
  flex: 40%;
  max-width: 700px;
  border-radius: 1em;
  @media (max-width: 750px) {
    flex: 75%;
  }
`;

export const EditProfileContainer = styled.div`
  display: flex;
  flex: 40%;
`;

export const TopLinksContainer = styled.div`
  display: flex;
  flex: 70%;
  // border: 0.1vw #34495e solid;
  // box-shadow: #ece0d2 2.4px 2.4px 8px;
  // border-radius: 3vw;
  // background-color: #fcf9f5;
  // border-radius: 3vw;
  justify-content: space-around;
`;

export const ProfileEventCardContainer = styled.div`
  display: flex;
  border-radius: 1em;
`;

export const ProfileEventContainer = styled.div`
  display: flex;
  border: 0.1vw #34495e solid;
  box-shadow: #ece0d2 2.4px 2.4px 8px;
  border-radius: 3vw;
  background-color: #fcf9f5;
  min-height: 200px;
  margin: 1vh 1vw;
  padding: 1vh 1vw;
  border-radius: 1em;
`;

export const EventLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
