import styled from 'styled-components';
import {
  Button,
  Input,
  Title,
  LinkWord,
  MainContainer,
  AuthContainer,
} from '../styled';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/auth/thunks';
import { selectToken } from '../store/auth/selectors';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken);

  useEffect(() => {
    if (token !== null) {
      navigate('/');
    }
  }, [token, navigate]);

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <MainContainer style={{ justifyContent: 'flex-start' }}>
      <AuthContainer>
        <Title>Login</Title>
        <form onSubmit={submitForm} style={{ textAlign: 'center' }}>
          <Input
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="autofill-bg-fix"
          />
          <Input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="autofill-bg-fix"
          />
          <Button type="submit">Login</Button>
        </form>
        <SubText>
          Don't have an account yet? Click{' '}
          <Link to="/signup" style={LinkWord}>
            here
          </Link>{' '}
          to sign up
        </SubText>
      </AuthContainer>
    </MainContainer>
  );
};

const SubText = styled.p`
  text-align: center;
  color: #1e3163;
  padding: 20px 0px 5px 0px;
`;
