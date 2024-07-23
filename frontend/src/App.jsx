import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashBoard from './pages/UserDashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{minHeight:"72vh"}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-dashboard" element={<UserDashBoard />} />
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
