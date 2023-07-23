import { FooterContainer, SocialIconsContainer } from '../styled';
import { SocialIcon } from 'react-social-icons';

export const FooterComponent = () => {
  return (
    <FooterContainer>
      <SocialIconsContainer>
        <SocialIcon
          style={{ height: 35, width: 35 }}
          url=""
          network="twitter"
        />
        <SocialIcon
          style={{ height: 35, width: 35 }}
          url=""
          network="facebook"
        />
        <SocialIcon
          style={{ height: 35, width: 35 }}
          url=""
          network="pinterest"
        />
        <SocialIcon style={{ height: 35, width: 35 }} url="" network="tumblr" />
      </SocialIconsContainer>
      <div> Copyright@2022 </div>
    </FooterContainer>
  );
};
