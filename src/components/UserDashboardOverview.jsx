import React, { useState, useEffect } from "react";
import "../css/UserDashboardOverview.css";
import dp from "../assets/dp.jpg";

const UserDashboardOverview = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentDate(now.toLocaleDateString());
      setCurrentTime(now.toLocaleTimeString());
    };
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const generateCalendar = (month, year) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    const calendarDays = [];

    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="empty"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      calendarDays.push(<div key={i}>{i}</div>);
    }

    return calendarDays;
  };

  return (
    <>
      {/* // <div className="container-New">
    //   <Sidebar />
    //   <main className="main-content-New">
    //     <HeaderAim></HeaderAim> */}
      <section className="dashboard">
        <div className="visits">
          <h2>Your Total Visits</h2>
          <div className="bar-chart">
            <div className="bar" style={{ height: "60px" }}>
              Jan
            </div>
            <div className="bar" style={{ height: "80px" }}>
              Feb
            </div>
            <div className="bar" style={{ height: "100px" }}>
              Mar
            </div>
            <div className="bar" style={{ height: "120px" }}>
              Apr
            </div>
            <div className="bar" style={{ height: "140px" }}>
              May
            </div>
            <div className="bar" style={{ height: "120px" }}>
              Jun
            </div>
            <div className="bar" style={{ height: "100px" }}>
              Jul
            </div>
            <div className="bar" style={{ height: "80px" }}>
              Aug
            </div>
            <div className="bar" style={{ height: "100px" }}>
              Sep
            </div>
            <div className="bar" style={{ height: "60px" }}>
              Oct
            </div>
            <div className="bar" style={{ height: "40px" }}>
              Nov
            </div>
            <div className="bar" style={{ height: "20px" }}>
              Dec
            </div>
          </div>
        </div>
        <div className="calendar">
          <h2>August 2024</h2>
          <div className="calendar-widget">
            <div className="month-year">AUGUST 2024</div>
            <div className="days">
              <div>Sun</div>
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
              {generateCalendar(7, 2024)}
            </div>
          </div>
        </div>
        <div className="notes">
          <h2>Notes</h2>
          <textarea></textarea>
        </div>
      </section>
      <section className="consultations">
        <h2>Previous Consultations</h2>
        <div className="consultation-item">
          <img src={dp} alt="Dr Yousuf" />
          <div>
            <p>Dr Yousuf</p>
            <p>Department: ENT</p>
            <p>Date: 02-03-2024</p>
            <p>Next Consultation: 01-10-2024</p>
          </div>
        </div>
        <div className="consultation-item">
          <img src={dp} alt="Dr Shahid" />
          <div>
            <p>Dr Shahid</p>
            <p>Department: Physician</p>
            <p>Date: 03-04-2024</p>
            <p>Next Consultation: 02-08-2024</p>
          </div>
        </div>
      </section>
      {/* //   </main>
    // </div> */}
    </>
  );
};

export default UserDashboardOverview;
