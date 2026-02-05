import "./App.css";
import AuthPage from "./assets/components/AuthPage/AuthPage.jsx";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signup" />} />
      <Route path="/signup" element={<AuthPage />} />
    </Routes>
  );
}

export default App;
