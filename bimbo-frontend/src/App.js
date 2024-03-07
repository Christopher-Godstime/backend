import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageRender from "./customRouter/PageRender";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  const [show, setShow] = useState(false);
  return (
    <Router>
      <div className="font-sans">
        {" "}
        <Navbar show={show} setShow={setShow} />
      </div>

      <div className="font-sans">
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/:page" element={<PageRender />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
