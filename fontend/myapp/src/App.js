import "./App.css";
import { Router, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import MyNotices from "./components/MyNotices";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/my-notices" element={<MyNotices />} />
      <Route path="/" element={<Home />} />
    </Router>
  );
}

export default App;
