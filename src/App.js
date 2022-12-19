import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
// === Components ===
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Manage from "./Pages/Manage/Manage";
import Service from "./Pages/Service/Service";
import About from "./Pages/About us/AboutUs";

// Styled

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Manage />} />
        <Route exact path="/Service" element={<Service />} />
        <Route exact path="/About Us" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
