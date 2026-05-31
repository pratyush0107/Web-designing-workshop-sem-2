import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Card from "./Components/Card.jsx";
import Home from "./Components/home.jsx";
import Secondpage from "./Components/secondpage.jsx";

function App() {

  const Styles = {
    textDecoration: "none",
    color: "black",
    fontSize: "25px",
    marginBottom: "30px",
    padding: "10px",
    backgroundColor: "lightgray"
  };

  return (
    <BrowserRouter>

      {/* NAVIGATION */}
      <header>
        <nav>
          <Link to="/" style={Styles}>Home</Link> {" | "}
          <Link to="/second" style={Styles}>Second Page</Link>
        </nav>
      </header>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/second" element={<Secondpage />} />
      </Routes>

    </BrowserRouter>
  );
  

}

export default App;