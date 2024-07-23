import HomeApp from './HomeApp';
import UserApp from './UserApp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/404';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HomeApp/>} />
        <Route path="/user/*" element={<UserApp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
