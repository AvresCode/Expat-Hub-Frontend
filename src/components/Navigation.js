import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from '../store/auth/selectors';
import { logOut } from '../store/auth/slice';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  return (
    <Nav>
      <Logo href="/">
        Expat<span>Hub</span>
      </Logo>
      <Hamburger onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu open={open}>
        <MenuLink to="/users">Members</MenuLink>
        {token && <MenuLink to="/MyPage">My Page</MenuLink>}
        {token ? (
          <StyledDiv
            onClick={() => {
              dispatch(logOut());
              navigate('/');
            }}
          >
            Logout
          </StyledDiv>
        ) : (
          <MenuLink to="/login">Login</MenuLink>
        )}
      </Menu>
    </Nav>
  );
};

const MenuLink = styled(Link)`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  font-weight: 400;
  transition: all 0.3s ease-in;
  &:hover {
    color: #9cc094;
  }
`;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  //background: #faf5ee;
  background: #725f36;
  /* position: absolute; */
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: white;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background-color: white;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 780px) {
    display: flex;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 780px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ open }) => (open ? '300px' : '0')};
    transition: max-height 0.3s ease-in;
  }
`;

const StyledDiv = styled.div`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  font-weight: 400;
  transition: all 0.3s ease-in;
  &:hover {
    color: #9cc094;
  }
`;
