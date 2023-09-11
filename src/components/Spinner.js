import loading from '../assets/loading.svg';
import { SpinnerContainer } from '../styled/MainContainer';

export default function Spinner() {
  return (
    <SpinnerContainer>
      <div>
        <img src={loading} alt="" />
      </div>
    </SpinnerContainer>
  );
}
