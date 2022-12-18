import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
// === Components ===
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Book from "./Pages/Book/Book";
import Login from "./Pages/Login/Login";
import Manage from "./Pages/Manage/Manage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Book" element={<Book />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Login" element={<Manage />} />
      </Routes>
    </Router>
  );
};

export default App;
