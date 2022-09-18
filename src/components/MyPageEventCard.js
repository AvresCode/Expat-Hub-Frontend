import moment from "moment";

export const MyPageEventCard = ({ id, imageUrl, title, date, city }) => {
  return (
    <div key={id}>
      <img
        src={imageUrl}
        alt=""
        style={{
          maxWidth: "100%",
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
    </div>
  );
};
