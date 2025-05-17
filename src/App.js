import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import BMICalculator from "./pages/BMICalculator";
import Trivia from "./pages/Trivia";
import FitnessTracker from "./pages/FitnessTracker";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/bmi" element={<BMICalculator />} />
        <Route path="/trivia" element={<Trivia />} />
        <Route path="/tracker" element={<FitnessTracker />} />
      </Routes>
    </Router>
  );
}

export default App;
