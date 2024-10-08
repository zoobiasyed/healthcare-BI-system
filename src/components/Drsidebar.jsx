import React from "react";
import "../css/NewSidebar.css";
import { NavLink } from "react-router-dom";

const Drsidebar = () => {
  return (
    <nav className="sidebar-New">
      <h1 className="sideLogo">AHC+</h1>
      <ul>
        <li>
          <NavLink to="/drdashboard">Overview</NavLink>
        </li>
        <li>
          {/* id="lab-results"
          onClick={() => (window.location.href = "labresults.html")}
        > */}
          <NavLink to="/drlabresults">Lab Results</NavLink>
        </li>
        <li>
          {/* id="previous-consultation"
          onClick={() => (window.location.href = "previousConsultations.html")}
        > */}
          <NavLink to="/docconsult">Consultation</NavLink>
        </li>
        {/* <li> */}
        {/* id="new-consultation"
          onClick={() => (window.location.href = "newbooking.html")}
        > */}
        {/* <NavLink to="book">Book new consultation</NavLink> */}
        {/* </li> */}
        <li>
          {/* id="profile"
          onClick={() => (window.location.href = "userdashboard-profile.html")}
        > */}
          <NavLink to="/drprofile">Profile</NavLink>
        </li>
        {/* <li
          id="support"
          onClick={() => (window.location.href = "support.html")}
        >
          Support
        </li> */}
        <li>
          <NavLink to="/logoutdr">Logout</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Drsidebar;
