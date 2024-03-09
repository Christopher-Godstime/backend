import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageRender from "./customRouter/PageRender";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  const [show, setShow] = useState(false);
  const [showAssessment, setShowAssessment] = useState(false);
  return (
    <Router>
      <div className="font-sans">
        {" "}
        <Navbar
          show={show}
          setShow={setShow}
          showAssessment={showAssessment}
          setShowAssessment={setShowAssessment}
        />
      </div>

      <div className="font-sans">
        <div>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home
                  showAssessment={showAssessment}
                  setShowAssessment={setShowAssessment}
                />
              }
            />
            <Route
              exact
              path="/:page"
              element={
                <PageRender
                  showAssessment={showAssessment}
                  setShowAssessment={setShowAssessment}
                />
              }
            />
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
