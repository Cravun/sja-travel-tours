import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.scss";
// === Components ===
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Manage from "./Components/Manage/Manage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Manage" element={<Manage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
