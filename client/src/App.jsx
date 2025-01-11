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
      <button
        className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
        onClick={handleNavigate}
      >
        Visit wallet
      </button>
    </div>
  );
}

export default App;
