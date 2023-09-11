import styled from 'styled-components';
import {
  AuthContainer,
  Button,
  EditField,
  EditFieldsContainer,
  Input,
  MainContainer,
  Title,
} from '../styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../store/auth/thunks';
import { selectToken } from '../store/auth/selectors';

export const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');
  const [education, setEducation] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken);

  useEffect(() => {
    if (token !== null) {
      navigate('/');
    }
  }, [token, navigate]);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);

    data.append('upload_preset', 'lbazsi6x');

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/df03t7txo/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );

    const file = await res.json();
    console.log('file', file);
    setImageUrl(file.url);
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(
      'submit works',
      firstName,
      lastName,
      email,
      password,
      city,
      birthDate,
      gender,
      nationality,
      education,
      imageUrl
    );
    dispatch(
      signUp(
        firstName,
        lastName,
        email,
        password,
        city,
        birthDate,
        gender,
        nationality,
        education,
        imageUrl
      )
    );
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setCity('');
    setBirthDate('');
    setGender('');
    setNationality('');
    setEducation('');
    setImageUrl('');
  };

  return (
    <MainContainer>
      <AuthContainer>
        <Title>Register</Title>
        <form onSubmit={submitForm}>
          <EditFieldsContainer>
            <EditField>
              <label>First Name:</label>
              <Input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </EditField>
            <EditField>
              <label>Last Name:</label>
              <Input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </EditField>
          </EditFieldsContainer>
          <EditFieldsContainer>
            <EditField>
              <label>Email:</label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="autofill-bg-fix"
              />
            </EditField>
            <EditField>
              <label>Password:</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="autofill-bg-fix"
              />
            </EditField>
          </EditFieldsContainer>
          <EditFieldsContainer>
            <EditField>
              <label>Gender:</label>
              <Input
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </EditField>
            <EditField>
              <label>Nationality:</label>
              <Input
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
              />
            </EditField>
          </EditFieldsContainer>
          <div style={{ padding: '1rem' }}>
            <div>
              <label>Date of birth:</label>
            </div>
            <div>
              <Input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                style={{ width: '90%' }}
              />
            </div>
          </div>
          <EditFieldsContainer>
            <EditField>
              <label>City:</label>
              <Input value={city} onChange={(e) => setCity(e.target.value)} />
            </EditField>
            <EditField>
              <label>Education:</label>
              <Input
                value={education}
                onChange={(e) => setEducation(e.target.value)}
              />
            </EditField>
          </EditFieldsContainer>
          <div style={{ padding: '1rem' }}>
            <div>
              <label>Upload photo:</label>
            </div>
            <div>
              <Input
                type="file"
                onChange={uploadImage}
                style={{ width: '90%' }}
              />
            </div>
            <div>
              <img alt="" width={200} src={imageUrl ? imageUrl : ''} />
              {imageUrl ? (
                <Title style={{ fontSize: 15 }}>Succesfully uploaded!</Title>
              ) : (
                ''
              )}
            </div>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </AuthContainer>
    </MainContainer>
  );
};
