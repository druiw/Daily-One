import "./App.css";
import AuthPage from "./assets/components/AuthPage/AuthPage.jsx";
import HomePage from "./assets/components/HomePage/HomePage.jsx";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signup" />} />
      <Route path="/signup" element={<AuthPage />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
