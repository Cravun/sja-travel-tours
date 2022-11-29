import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
// === Components ===
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Manage from "./Components/Manage/Manage";
import Book from "./Components/Book/Book";
import Login from "./Components/Login/Login";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Manage" element={<Manage />} />
        <Route exact path="/Book" element={<Book />} />
        <Route exact path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
