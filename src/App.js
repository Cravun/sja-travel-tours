import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
// === Components ===
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Service from "./Pages/Service/Service";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

// Styled

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Service" element={<Service />} />
        <Route exact path="/AboutUs" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
