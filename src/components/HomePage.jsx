import React from "react";
import { NavLink } from "react-router-dom";
import "../css/HomePage.css"; // Import the CSS for styling
import logo from "../assets/logo.png"; // Import the logo image
import userIcon from "../assets/user-icon.png"; // Import the user icon image
import hospitalImage from "../assets/hospital.png"; // Import the hospital image
import doctorsImage from "../assets/doctors.png"; // Import the doctors image

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Header Section */}
      <header>
        <div className="logo">
          <img src={logo} alt="AHC+ Logo" />
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li><NavLink to="/doctorlogin">Doctor</NavLink></li>
            <li>
              <NavLink to="/adminLogin">Admin</NavLink>
            </li>
            <li>
              <NavLink to="/userLogin">
                <img src={userIcon} alt="User Icon" className="user-icon" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Section */}
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-text">
            <h2>Health Powered by AHC+</h2>
            <p>
              Supporting better health outcomes and clinical excellence with
              intelligent technology.
            </p>
            <button>🪪 Get Your AHC+ Card Now</button>
            <div className="hero-buttons">
              <button>👨‍⚕️ Book an Appointment</button>
              <button>✉️ Check Your Results</button>
            </div>
          </div>
          <div className="hero-image">
            <img src={hospitalImage} alt="Hospital" />
          </div>
        </section>

        {/* DNA Section */}
        <section className="dna">
          <h3>Medical quality is in our DNA</h3>
          <p>
            There are no shortcuts to becoming a qualified doctor, and there are
            no shortcuts to developing an AI that raises the bar for clinical
            accuracy, user accessibility, and industry regulation.
          </p>
          <div className="doctors">
            <img src={doctorsImage} alt="Dr. Asif Raza" />
            <p>
              Dr. Asif Raza
              <br />
              Head Cardio
            </p>
          </div>
        </section>

        {/* Awareness Section */}
        <section className="awareness">
          <h4>NATIONAL IMMUNIZATION AWARENESS MONTH</h4>
          <p>
            Staying up to date on your vaccines can protect you and your loved
            ones from preventable diseases.
          </p>
          <p>
            Check the immunization schedule for guidance on recommended routine
            vaccinations.
          </p>
        </section>
      </main>

      {/* Footer Section */}
      <footer>
        <div className="newsletter">
          <p>Signup for the Newsletter</p>
          <input type="email" placeholder="Email" />
          <button>Signup</button>
        </div>
        <div className="footer-info">
          <div>
            <h5>CUSTOMER SERVICE</h5>
            <p>Contact us</p>
          </div>
          <div>
            <h5>INFORMATION</h5>
            <p>About</p>
            <p>Administrator</p>
          </div>
          <div>
            <h5>FOLLOW US</h5>
            <p>
              <a href="#">Instagram</a>
            </p>
            <p>
              <a href="#">Facebook</a>
            </p>
            <p>
              <a href="#">LinkedIn</a>
            </p>
          </div>
          <div>
            <h5>CONTACT US</h5>
            <p>
              <a href="tel:+9233165XX8910">(+92) 331-65XX8910</a>
            </p>
            <p>
              <a href="mailto:info@ahc.com">info@ahc.com</a>
            </p>
            <p>24 hrs</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
