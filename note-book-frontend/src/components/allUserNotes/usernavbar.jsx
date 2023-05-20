import React from "react";
import "./UserNavbar.css"; // Import the CSS file for styling
import { Link } from "react-router-dom";

class UserNavbar extends React.Component {
  render() {
    return (
      <nav className="user-navbar">
        <ul className="user-navbar__list">
          <li className="user-navbar__item">
            <button
              className="user-navbar__button"
              onClick={this.props.onCreateNote}
            >
              Create Note
            </button>
          </li>
          <li className="user-navbar__item">
            <button
              className="user-navbar__button"
              onClick={this.props.onShowAccount}
            >
              Show Account
            </button>
          </li>
          <li className="user-navbar__item">
            <Link className="logoutlink" to={"/"}>
              Log out
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default UserNavbar;
