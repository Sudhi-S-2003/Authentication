import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Product from './pages/Product.jsx';
import Profile from './pages/Profile.jsx';
import {  Routes, Route } from 'react-router-dom';
import { userlink } from './links/link.js';

function UserApp() {
  return (
    <>
      <Navbar links={userlink} />
      <div style={{ minHeight: "72vh" }}>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Product" element={<Product />} />
        </Routes>
      </div>
      <Footer links={userlink} />
    </>
  );
}

export default UserApp;
