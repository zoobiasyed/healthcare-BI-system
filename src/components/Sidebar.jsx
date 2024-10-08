import React from "react";
import "../css/NewSidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="sidebar-New">
      <h1 className="sideLogo">AHC+</h1>
      <ul>
        <li id="overview" className="overview.html">
          <NavLink to="/userdashboard">Overview</NavLink>
        </li>
        <li>
          {/* id="lab-results"
          onClick={() => (window.location.href = "labresults.html")}
        > */}
          <NavLink to="labresults">Lab Results</NavLink>
        </li>
        <li>
          {/* id="previous-consultation"
          onClick={() => (window.location.href = "previousConsultations.html")}
        > */}
          <NavLink to="previousconsultation">Previous consultation</NavLink>
        </li>
        <li>
          {/* id="new-consultation"
          onClick={() => (window.location.href = "newbooking.html")}
        > */}
          <NavLink to="book">Book new consultation</NavLink>
        </li>
        <li>
          {/* id="profile"
          onClick={() => (window.location.href = "userdashboard-profile.html")}
        > */}
          <NavLink to="profile">Profile</NavLink>
        </li>
        {/* <li
          id="support"
          onClick={() => (window.location.href = "support.html")}
        >
          Support
        </li> */}
        <li>
          <NavLink to="userLogin">Logout</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
