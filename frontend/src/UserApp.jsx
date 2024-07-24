import Navbar from './components/Navbar';
import Footer from './components/Footer';
import User from './pages/User.jsx';
import Profile from './pages/Profile.jsx';
import Update from './pages/Update.jsx';
import {  Routes, Route } from 'react-router-dom';
import { userlink } from './links/link.js';
import LeftTabs from './components/LeftBar.jsx'
import NotFound from './pages/404';



function UserApp() {
  return (
    <>
      <Navbar links={userlink} />
      <div style={{ minHeight: "72vh" }}>
        <Routes>
          <Route path="/" element={  <LeftTabs tabs={{ Profile: <Profile />, Users: <User /> }} />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/users" element={<User />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer links={userlink} />
    </>
  );
}

export default UserApp;
