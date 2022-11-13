import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.scss";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="container">
        <div className="left">
          <Link to="/">
            <h3>
              <span className="fit"> Fit</span>zzy
            </h3>
          </Link>
        </div>
        <div className="right">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/exercise">Exercise</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
