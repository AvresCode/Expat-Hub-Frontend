import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchOneEvent } from "../store/event/thunks";
import { selectEventDetails } from "../store/event/selectors";
import styled from "styled-components";
import { Button, Input, Title, Select } from "../styled";
import { editEventThunk } from "../store/event/thunks";
import { useNavigate } from "react-router-dom";

export const EditEventPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchOneEvent(id));
  }, [dispatch, id]);

  const oneEvent = useSelector(selectEventDetails);

  const [title, setTitle] = useState(oneEvent?.title);
  const [description, setDescription] = useState(oneEvent?.description);
  const [date, setDate] = useState(oneEvent?.date);
  const [city, setCity] = useState(oneEvent?.city);
  const [address, setAddress] = useState(oneEvent?.address);
  const [spots, setSpots] = useState(oneEvent?.spots);
  const [categoryId, setCategoryId] = useState(oneEvent?.categoryId);
  const [imageUrl, setImageUrl] = useState(oneEvent?.imageUrl);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      "submit event:",
      categoryId,
      title,
      description,
      date,
      city,
      spots,
      address,
      imageUrl
    );
    //  const eventParameters = { title,  description, date, city, address, spots, imageUrl,categoryId, };
    dispatch(
      editEventThunk(
        id,
        title,
        description,
        date,
        city,
        address,
        spots,
        imageUrl,
        categoryId
      )
    );

    navigate("/");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Container>
        <Title>Edit Your Event: </Title>
        <form onSubmit={handleSubmit}>
          <div>
            {" "}
            <label>Category:</label>
          </div>
          <div>
            {" "}
            <Select
              defaultValue={oneEvent?.categoryId}
              onChange={(e) => setCategoryId(parseInt(e.target.value))}
            >
              {" "}
              <option value="">Please choose an option</option>
              <option value="1">Leisure and entertainment</option>
              <option value="2">Food and drink</option>
              <option value="3">Sport and nature</option>
              <option value="4">Culture and art</option>
            </Select>
          </div>
          <div>
            {" "}
            <label>Title: </label>{" "}
          </div>
          <div>
            <Input
              type="text"
              defaultValue={oneEvent?.title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <label>Description: </label>
          <div>
            {" "}
            <Input
              defaultValue={oneEvent?.description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            {" "}
            <label>Date: </label>{" "}
          </div>
          <div>
            {" "}
            <Input
              type="datetime-local"
              defaultValue={oneEvent?.date}
              onChange={(e) => setDate(e.target.value)}
            />{" "}
          </div>
          <div>
            {" "}
            <label>City: </label>{" "}
          </div>
          <div>
            {" "}
            <Input
              defaultValue={oneEvent?.city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div>
            {" "}
            <label>Number of spots: </label>{" "}
          </div>
          <div>
            {" "}
            <Input
              defaultValue={oneEvent?.spots}
              type="number"
              onChange={(e) => setSpots(parseInt(e.target.value))}
            />
          </div>{" "}
          <div>
            {" "}
            <label>Address: </label>{" "}
          </div>
          <div>
            {" "}
            <Input
              defaultValue={oneEvent?.address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            {" "}
            <label>Add image URL: </label>{" "}
          </div>
          <div>
            {" "}
            <Input
              type="text"
              defaultValue={oneEvent?.imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <Button type="submit">Post</Button>
        </form>
      </Container>
    </div>
  );
};
const Container = styled.div`
  display: "flex";
  flex-direction: "column";
  margin: 15%;
  color: #34495e;
`;
