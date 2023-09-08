import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import { ImageNameContainer, Image } from '../styled';
export const ImageCard = ({ id, imageUrl, user }) => {
  return (
    <ImageNameContainer key={id}>
      <div>
        <Zoom>
          <Image src={imageUrl} alt="" />
        </Zoom>
      </div>
      <div style={{ fontSize: '1rem' }}>
        Posted by {user.firstName} {user.lastName}
      </div>
    </ImageNameContainer>
  );
};
