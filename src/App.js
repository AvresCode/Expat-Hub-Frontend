import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserWithStoredToken } from './store/auth/thunks';
import { Routes, Route } from 'react-router-dom';
import { Navigation, MessageBox, FooterComponent } from './components';
import {
  Homepage,
  Login,
  SignUp,
  EventDetailsPage,
  AddEventPage,
  EditEventPage,
  AllUsersPage,
  MyPage,
  EditProfilePage,
  OneUserPage,
} from './pages';
import Chat from './pages/Chat';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <MessageBox />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/events/:id" element={<EventDetailsPage />} />
        <Route path="/events/addEvent" element={<AddEventPage />} />
        <Route path="/events/editEvent/:id" element={<EditEventPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/users" element={<AllUsersPage />} />
        <Route path="/users/:id" element={<OneUserPage />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/me/editProfile" element={<EditProfilePage />} />
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
