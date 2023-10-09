import {
  Button,
  Title,
  Select,
  MainContainer,
  EventCreateContainer,
  Input,
  Form,
} from '../styled';
import { useState } from 'react';
import { newEventThunk } from '../store/event/thunks';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const AddEventPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [spots, setSpots] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('submit event:', title, date, spots, categoryId);
    dispatch(
      newEventThunk(
        title,
        description,
        date,
        city,
        address,
        spots,
        imageUrl,
        categoryId,
      ),
    );

    setTitle('');
    setDescription('');
    setDate('');
    setCity('');
    setAddress('');
    setSpots('');
    setCategoryId('');
    setImageUrl('');

    navigate('/MyPage');
  };
  return (
    <MainContainer>
      <EventCreateContainer>
        <Title>Add Event</Title>
        <Form onSubmit={handleSubmit}>
          <div>
            <label>Category:</label>
            <div style={{ width: '22rem', marginBottom: '1rem' }}>
              <Select
                value={categoryId}
                onChange={(e) => setCategoryId(parseInt(e.target.value))}
                required
              >
                <option value="">Please choose an option</option>
                <option value="1">Leisure and entertainment</option>
                <option value="2">Food and drink</option>
                <option value="3">Sport and nature</option>
                <option value="4">Culture and art</option>
              </Select>
            </div>
          </div>
          <div>
            <label>Title: </label>{' '}
            <div>
              <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label>Description: </label>
            <div>
              <Input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label>Date: </label>
            <div>
              <Input
                type="datetime-local"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label>City: </label>{' '}
            <div>
              <Input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label>Number of spots: </label>{' '}
            <div>
              <Input
                value={spots}
                type="number"
                onChange={(e) => setSpots(parseInt(e.target.value))}
                required
              />
            </div>
          </div>
          <div>
            <label>Address: </label>{' '}
            <div>
              <Input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label>Add image URL: </label>
          </div>
          <div>
            <Input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </div>
          <Button type="submit" style={{ width: '10rem', margin: 'auto' }}>
            Post
          </Button>
        </Form>
      </EventCreateContainer>
    </MainContainer>
  );
};
