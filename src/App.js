import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Register from './pages/Register';
import EditProfile from './pages/Edit';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/edit/:id' element={<EditProfile />} />
      <Route path='/profile/:id' element={<Profile />} />
    </Routes>
  );
}

export default App;
