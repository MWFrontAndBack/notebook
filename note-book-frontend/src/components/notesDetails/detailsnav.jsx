import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/paper.svg";
import "./details.css";
const DetailsNavbar = () => {
  return (
  
      <div className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/user-page" className="nav-link">
              back
            </Link>
          </li>
        </ul>
        <div className="logo">
          <Logo />
        </div>
      </div>
  );
};

export default DetailsNavbar;
