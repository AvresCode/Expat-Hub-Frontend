import moment from "moment";
import { ProfileEventCardContainer } from "../styled";

export const MyPageEventCard = ({ id, imageUrl, title, date, city }) => {
  return (
    <ProfileEventCardContainer key={id}>
      <img
        src={imageUrl}
        alt=""
        style={{
          maxHeight: "20vh",
          borderRadius: "1vw",
        }}
      />
      <div>
        {" "}
        <h3>{title}</h3>
        <p>
          {" "}
          On {moment(date).format("dddd, D MMM YYYY, h:mm a")} in {city}
        </p>{" "}
      </div>
    </ProfileEventCardContainer>
  );
};
