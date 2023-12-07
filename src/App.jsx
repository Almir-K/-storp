import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage"; // Import the LandingPage component
import Quran from "./components/Quran"; // Import the LandingPage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quran" element={<Quran />} />
      </Routes>
    </Router>
  );
}

export default App;
