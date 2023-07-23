import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import { ImageNameContainer } from '../styled';
export const ImageCard = ({ id, imageUrl, user }) => {
  return (
    <ImageNameContainer key={id}>
      <div>
        <Zoom>
          <img
            src={imageUrl}
            alt=""
            style={{
              width: '100px',
              height: '100px',
              objectFit: 'cover',
              borderRadius: '1vw',
            }}
          />
        </Zoom>
      </div>
      <div style={{ fontSize: '1rem' }}>
        Posted by {user.firstName} {user.lastName}
      </div>
    </ImageNameContainer>
  );
};
