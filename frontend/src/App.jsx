import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashBoard from './pages/UserDashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { homelink } from './links/link.js';

function App() {
  return (
    <BrowserRouter>
      <Navbar links={homelink} />
      <div style={{minHeight:"72vh"}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-dashboard" element={<UserDashBoard />} />
      </Routes>
      </div>
      <Footer links={homelink} />
    </BrowserRouter>
  );
}

export default App;
