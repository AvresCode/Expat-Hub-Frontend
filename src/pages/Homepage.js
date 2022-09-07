import { AllEventsComponent } from "../components/AllEventsComponent";
import { HomeContainer } from "../styled/Container";
import { HomeSidebar } from "../components/HomeSidebar";

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
