import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./login.css";
const CreateAccountForm = () => {
  const [loginName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/public/create-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ loginName, password, email }),
    })
      .then((response) => response.json())
      .then((data) => {
        setRedirectToLogin(true);
        // Handle the create account response
      })
      .catch((error) => {});
    if (redirectToLogin) {
      return <Navigate to="/login" replace />;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <label>
        Username:
        <input
          type="text"
          value={loginName}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <button type="submit" className=" login-button">
        Create Account
      </button>
    </form>
  );
};

export default CreateAccountForm;
