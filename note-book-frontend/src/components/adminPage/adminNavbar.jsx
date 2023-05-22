import React from "react";
import "./AdminNavbar.css";
import { Link } from "react-router-dom";
const AdminNavbar = () => {
  return (
    <nav className="user-navbar">
      <ul className="user-navbar__list">
        <li className="user-navbar__item">
          <Link className="logoutlink" to={"/"}>
            Log out
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
