import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import SignupPage from "./pages/Signup";
import { useState } from "react";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated")
      ? localStorage.getItem("isAuthenticated")
      : false
  );
  return (
      <Routes>
        <Route path="/" element={<MainPage isAuthenticated={isAuthenticated} />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
  );
};

export default App;
