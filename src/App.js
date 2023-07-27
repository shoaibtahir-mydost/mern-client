import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
// import EditProfile from "./pages/Edit";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admin" element={<Home />} />
      <Route path="/user" element={<Profile />} />
      {/* <Route path="/edit/:id" element={<EditProfile />} />
      <Route path="/profile/:id" element={<Profile />} /> */}
    </Routes>
  );
}

export default App;
