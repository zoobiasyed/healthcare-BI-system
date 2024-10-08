import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "../css/Signup.css";
import ahc from "../assets/ahc.jpg";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignup = (event) => {
    event.preventDefault();

    if (email === "" || password === "" || retypePassword === "") {
      alert("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password !== retypePassword) {
      alert("Passwords do not match. Please retype your password.");
      return;
    }

    alert("Signup successful! Redirecting to login...");
    navigate("/userLogin"); // Redirect to the login page
  };

  return (
    <div className="full-screen">
      <header>
        <div className="navbar-New">
          <div className="logo-New">
            <h1>
              AHC<span>+</span>
            </h1>
            <p>Empowering Better Care</p>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <a href="#">Doctor</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main-content-New">
        <div className="content-New">
          <div className="register-section">
            <h2>Register</h2>
            <form onSubmit={handleSignup}>
              <div className="form-group-New">
                <input
                  className="form-group-New_input"
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group-New">
                <input

                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  className="form-group-New_input"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group-New">
                <input
                  type="password"
                  className="form-group-New_input"
                  id="retype-password"
                  placeholder="Retype Password"
                  value={retypePassword}
                  onChange={(e) => setRetypePassword(e.target.value)}
                />
              </div>
              <button type="submit" className="signup-button">
                SIGNUP
              </button>
              <p>Or signup using OTP</p>
            </form>
            <p className="login-link">
              Already have an account? <NavLink to="/userLogin">LOGIN</NavLink>
            </p>
          </div>
          <div className="image-section">
            <img src={ahc} alt="Healthcare" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Signup;
