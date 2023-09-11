import styled from 'styled-components';

export const EventCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  height: 480px;
  justify-content: center;
  border: 0.1vw #34495e solid;
  box-shadow: #ece0d2 2.4px 2.4px 8px;
  border-radius: 2vw;
  background-color: #fcf9f5;
`;

export const AllEventsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  width: 70%;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin: 4rem auto;
  @media (max-width: 750px) {
    width: 80%;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8rem auto;
  min-height: 100vh;
`;

export const SearchContainer = styled.div`
  background-color: #c0ad83;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem;
  width: 60%;
  margin: 2rem auto;
  border-radius: 1vw;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  @media (max-width: 750px) {
    width: 80%;
  }
`;

export const EventDetailsContainer = styled.div`
  width: 70%;
  padding: 1rem;
  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const EventDetailsTopContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;
  justify-content: center;
`;

export const EventDetailsLeftContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 50%;
  padding: 1rem;
  font-family: 'Open Sans', sans-serif;
  border-radius: 2vw;
  background: #fcf9f5;
  @media (max-width: 750px) {
    flex: 80%;
  }
`;

export const EventDetailsRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 40%;
  border-radius: 2vw;
  background: #fcf9f5;
  padding: 0.5rem;
  @media (max-width: 750px) {
    flex: 80%;
  }
`;

export const AttendeesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

export const OneAttendee = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CommentSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 85%;
  min-height: 300px;
  padding: 1rem;
  padding-bottom: 4rem;
  margin: 8rem auto;
  padding-bottom: 10rem;
  border-radius: 1vw;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  // background-color: #5f7285;
  background-color: #c0ad83;
  background-image: url('/flower.svg');
  background-size: 100px auto;
  background-repeat: no-repeat;
  // background-position: calc(100% - 20px) calc(100% - 20px);
  background-position: right 10px bottom 10px; /* Position with space */
  @media (max-width: 750px) {
    width: 95%;
    background-size: 70px auto;
  }
`;

export const CommentContainer = styled.div`
  // background: #ede7db;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background: #ede7db;
  color: #34495e;
  border-radius: 1vw;
  margin: 2vh auto;
  font-size: 1.2rem;
  padding: 0.5rem;
  width: 95%;
  border-radius: 1vw;
`;
export const PhotoNameContainer = styled.div`
  display: flex;
  width: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  font-size: 1rem;
  margin-right: 1rem;
`;

// export const CommentTextContainer = styled.div`
//   width: 40vw;
//   height: 5vh;
//   background-color: #fcf9f5;
//   color: #34495e;
//   border-radius: 1vw;
//   padding: 1vh 1vw;
//   //margin: 2vh 2vw;
//   @media (max-width: 750px) {
//     width: 60vw;
//   }
// `;

export const ImageSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 85%;
  min-height: 300px;
  padding: 1rem;
  border-radius: 1vw;
  margin: 2rem auto;
  //  background-color: #5f7285;
  background-color: #c0ad83;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  @media (max-width: 750px) {
    width: 95%;
  }
`;

export const ImageNameContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1vh 1vw;
`;

export const AllPhotosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const UserCardContainer = styled.div`
  display: flex;
  width: 70vw;
  align-items: center;
  margin: 2vh 1vw;
  padding: 1vh 1vw;
  border-radius: 2vw;
  background-color: #fcf9f5;
  @media (max-width: 750px) {
    width: 80vw;
  }
`;
export const AllUsersPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.5rem;
  margin-bottom: 6rem;
`;

export const AllUsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.5rem;
  margin-bottom: 8rem;
`;

export const OneUserPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 7vh 5vw;
`;

export const UserDetailsContainer = styled.div`
  display: flex;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const UserEventContainer = styled.div`
  display: flex;
  width: 40vw;
  // justify-content: center;
  // align-items: center;
  border: 0.1vw #34495e solid;
  border-radius: 3vw;
  background-color: #fcf9f5;
  padding: 1vh 1vw;
  margin: 2vh 2vw;
  @media (max-width: 750px) {
    width: 80vw;
  }
`;

export const UserAllEventsContainer = styled.div`
   display: flex;
  flex-direction: column";
  width: 80vw;
  justify-content: center;
  align-items: center;
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

// export const EditProfileContainer = styled.div`
//   display: flex;
//   flex: 40%;
// `;

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

export const FooterContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  background: #725f36;
  color: white;
  position: absolute;
  width: 100%;
  height: 24rem;
  padding-top: 6rem;
  margin-top: 2rem;
  // box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.2);
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  gap: 0.7rem;
  background: #d2c4a7;
  padding: 0.5rem;
  border-radius: 2vw;
  margin: 1rem;
`;
export const SubscriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ede7db;
  font-size: 1.1rem;
  padding: 0.5rem;
  width: 75%;
  border-radius: 1vw;
  margin: auto;
  @media (max-width: 750px) {
    width: 85%;
  }
`;
export const EditProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #c0ad83;
`;
export const EditFieldsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const EditField = styled.div`
  flex: 1;
`;
export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
`;
