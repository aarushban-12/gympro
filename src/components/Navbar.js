import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">🏋️ GymPro</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/bmi">BMI Calculator</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/trivia">Trivia</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/tracker">Fitness Tracker</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
