import React from "react";
import ChangeProfilePicture from "./ChangeProfilePicture";
import "../css/ProfileSection.css";

function ProfileSection({ isEditing, onEdit, onDone }) {
  return (
    <section className="profile-section">
      <div className="profile-picture">
        <img src="#" alt="Profile" />
        <ChangeProfilePicture />
      </div>
      <div className="profile-details">
        <div className="row">
          <div className="col">
            <label htmlFor="first-name">First Name*</label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              disabled={!isEditing}
            />
          </div>
          <div className="col">
            <label htmlFor="last-name">Last Name*</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              disabled={!isEditing}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="address">House Name/No*</label>
            <input
              type="text"
              id="address"
              name="address"
              disabled={!isEditing}
            />
          </div>
          <div className="col">
            <label htmlFor="city">City*</label>
            <input type="text" id="city" name="city" disabled={!isEditing} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="district">District*</label>
            <select id="district" name="district" disabled={!isEditing}>
              <option value="">Select District</option>
              {/* Options here */}
            </select>
          </div>
          <div className="col">
            <label htmlFor="state">State*</label>
            <select id="state" name="state" disabled={!isEditing}>
              <option value="">Select State</option>
              {/* Options here */}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="postal-code">Postal Code*</label>
            <input
              type="text"
              id="postal-code"
              name="postal-code"
              disabled={!isEditing}
            />
          </div>
          <div className="col">
            <label htmlFor="country">Country*</label>
            <input
              type="text"
              id="country"
              name="country"
              disabled={!isEditing}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="mobile">Mobile*</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              disabled={!isEditing}
            />
          </div>
          <div className="col">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" name="phone" disabled={!isEditing} />
          </div>
        </div>
        <div className="buttons">
          {isEditing ? (
            <button className="done-btn" onClick={onDone}>
              Done
            </button>
          ) : (
            <button className="edit-btn" onClick={onEdit}>
              Edit
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
