import Home from "./Components/Home/Home"
import About from "./Components/About"
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      {/* <Home /> */}
    </div>
  );
}

export default App;
