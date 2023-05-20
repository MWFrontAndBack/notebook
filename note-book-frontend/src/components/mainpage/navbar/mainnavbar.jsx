import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/paper.svg";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/create-acc" className="nav-link">
            Create Account
          </Link>
        </li>
      </ul>
      <div className="logo">
        <Logo />
      </div>
    </div>
  );
};

export default Navbar;
