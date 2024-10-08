import React from "react";

function BookingForm() {
  return (
    <div className="form-container">
      <h2>Book New Consultation</h2>
      <form className="form">
        <div className="form-row">
          <div className="form-group1">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div className="form-group1">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group1">
            <label htmlFor="cardNumber">AHC+ Card Number</label>
            <input type="text" id="cardNumber" name="cardNumber" />
          </div>
          <div className="form-group1">
            <label htmlFor="department">Department</label>
            <input type="text" id="department" name="department" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group1">
            <label htmlFor="doctor">Doctor</label>
            <select id="doctor" name="doctor">
              <option value="">Select</option>
              {/* Options can be added here */}
              <option value="Dr. Yousuf">Dr. Yousuf</option>
              <option value="Dr. Aiman">Dr. Aiman</option>
              <option value="Dr. Fazal">Dr. Fazal</option>
            </select>
          </div>
          <div className="form-group1">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date" />
          </div>
        </div>
        <button className="buttonChange" type="submit">Confirm</button>
      </form>
    </div>
  );
}

export default BookingForm;
