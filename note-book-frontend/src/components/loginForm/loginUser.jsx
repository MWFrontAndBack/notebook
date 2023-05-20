import React, { useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import "./login.css";
const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/public/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(email + ":" + password),
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Invalid credentials");
        }
      })
      .then((data) => {
        console.log("Login successful", data);
        // Save email and password to local storage
        // localStorage.removeItem("email");
        // localStorage.removeItem("password");

        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        // Redirect to the user's page after successful login
        navigate("/user-page", { state: data }); // Pass the user data as state
      })
      .catch((error) => {
        console.error("Login failed", error);
        setError("Invalid credentials");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      {error && <p>{error}</p>}

      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
      <button type="submit" className="login-button">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
