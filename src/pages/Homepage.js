import { AllEventsComponent } from "../components/AllEventsComponent";
import { HomeContainer } from "../styled";
import { HomeSidebar } from "../components/HomeSidebar";
//import { SignInModal } from "../components/ModalSignin";

export const Homepage = () => {
  return (
    <HomeContainer>
      <HomeSidebar />
      <AllEventsComponent />
    </HomeContainer>
  );
};

// const Container = styled.div`
//   margin: 20px;
// `;
