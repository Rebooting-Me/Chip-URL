import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage isAuthenticated={false} />} />
    </Routes>
  );
};

export default App;
