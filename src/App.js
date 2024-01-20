import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header"; // Import Header component
import Home from "./Home.js";
import Checkout from "./Checkout";
import Login from "./Login.js"

function App() {
  return (
    <Router>
      <Header /> {/* Place Header outside of the .App div */}
      <div className="App">
        <Routes>
          <Route
            path="/checkout"
            element={<Checkout/>}
          />

          <Route 
            path="/login" 
      element={<Login/>} 
          />

          <Route
            path="/"
            element={<Home/>} /* Home component for the root route */
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
