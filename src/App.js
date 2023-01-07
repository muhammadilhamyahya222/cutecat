import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import Cart from "./components/Cart";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Cart />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
