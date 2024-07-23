import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home';
import Login from './pages/Login';
import Register from './pages/Register';
import {  Routes, Route } from 'react-router-dom';
import { homelink } from './links/link.js';
import NotFound from './pages/404';


function HomeApp() {
  return (
 <>
      <Navbar links={homelink} />
      <div style={{minHeight:"72vh"}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
      <Footer links={homelink} />
      </>

  );
}

export default HomeApp;
