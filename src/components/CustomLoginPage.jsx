

/////////////////////////////////////////////////////////////////////////////////////////////////

import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import ahc from "../assets/ahc.jpg";
import "../css/Login.css";

const CustomLoginPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = (event) => {
    event.preventDefault();
    const username = event.target.customUsername.value.trim();
    const password = event.target.customPassword.value.trim();

    // Validation
    if (!username || !password) {
      alert("Username and password are required!");
      return;
    }

    if (username === "user" && password === "pass") {
      alert("Login successful!");
      // Redirect to the dashboard page
      navigate("/userdashboard");
    } else {
      alert("Invalid username or password!");
    }
  };

  const handleSendOtp = () => {
    const mobile = document.getElementById("customMobile").value.trim();

    // Mobile number validation
    if (!mobile) {
      alert("Please enter your mobile number.");
      return;
    }

    if (mobile.length === 11 && /^[0-9]+$/.test(mobile)) {
      alert(`OTP sent to ${mobile}`);
      navigate("/otp-verify"); // Redirect to OTP verification page (ensure this route exists)
    } else {
      alert("Incorrect number. Please enter an 11-digit mobile number.");
    }
  };

  // const handleSignup = () => {
  //   navigate("/signup");
  // };

  const handleRememberMe = (event) => {
    if (event.target.checked) {
      alert("You will be remembered!");
    }
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    alert("Redirecting to forgot password page.");
    navigate("/forgot-password"); // Redirect to forgot password page (ensure this route exists)
  };

  return (
    <div className="customLoginPage">
      <header>
        <div className="customNavbar">
          <div className="customLogo">
            <h1>
              AHC<span>+</span>
            </h1>
            <p>Empowering Better Care</p>
          </div>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/doctorlogin">Doctor</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="customContent">
          <div className="customQuoteSection">
            <blockquote>
              <p>“An apple a day keeps the doctor away”</p>- Benjamin Franklin.
            </blockquote>
            <img src={ahc} alt="Healthcare" />
          </div>
          <div className="customLoginSection">
            <h2>
              AHC<span>+</span>
            </h2>
            <p>Welcome user! Please Login to your Account</p>
            <form onSubmit={handleLogin}>
              <div className="customFormGroup">
                <input
                  type="text"
                  id="customUsername"
                  name="customUsername"
                  placeholder="ACH Card No"
                />
              </div>
              <div className="customFormGroup">
                <input
                  type="password"
                  id="customPassword"
                  name="customPassword"
                  placeholder="Password"
                />
              </div>
              <p>Or Login with OTP</p>
              <div className="customFormGroup customOtpGroup">
                <input type="text" id="customMobile" placeholder="Mobile" />
                <button
                  type="button"
                  className="customSendOtp"
                  onClick={handleSendOtp}
                >
                  Send OTP
                </button>
              </div>
              <div className="customFormGroup customRememberMe">
                <input
                  type="checkbox"
                  id="customRemember"
                  onChange={handleRememberMe}
                />
                <label htmlFor="customRemember">Remember Me</label>
                <a
                  href="#"
                  className="customForgotPassword"
                  onClick={handleForgotPassword}
                >
                  Forgot Password
                </a>
              </div>
              <div className="customFormButtons">
                <button type="submit" className="customLoginButton">
                  LOGIN
                </button>
                {/* <button
                  type="button"
                  className="customSignupButton"
                  onClick={handleSignup}
                >
                  SIGNUP
                </button> */}
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CustomLoginPage;
