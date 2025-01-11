import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/wallet");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button onClick={handleNavigate}>Visit wallet</button>
    </div>
  );
}

export default App;
