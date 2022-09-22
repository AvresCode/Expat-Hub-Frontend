import { FooterContainer } from "../styled";
import { SocialIcon } from "react-social-icons";

export const FooterComponent = () => {
  return (
    <FooterContainer>
      <div>
        {" "}
        <SocialIcon url="" network="twitter" />
        <SocialIcon url="" network="facebook" />
        <SocialIcon url="" network="pinterest" />
        <SocialIcon url="" network="tumblr" />
      </div>
      <div> Copyright@2022 </div>
    </FooterContainer>
  );
};
