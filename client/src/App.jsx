import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
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
    </Routes>
  );
};

export default App;
