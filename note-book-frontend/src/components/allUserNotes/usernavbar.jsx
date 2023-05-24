import React from "react";
import "./UserNavbar.css";
import { Link } from "react-router-dom";

class UserNavbar extends React.Component {
  handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  };
  render() {
    return (
      <nav className="user-navbar">
        <ul className="user-navbar__list">
          <li className="user-navbar__item">
            <Link className="logoutlink" to={"/user-page/add-note"}>
              Create Note
            </Link>
          </li>
          <li className="user-navbar__item">
            <Link className="logoutlink" to={"/user-page/account"}>
              Show Account
            </Link>
          </li>
          <li className="user-navbar__item">
            <Link className="logoutlink" to={"/"} onClick={this.handleLogout}>
              Log out
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default UserNavbar;
