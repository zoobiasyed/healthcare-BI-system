import React, { useState } from "react";
import "../css/ChangeProfilePicture.css";
import profilePic from "../assets/dp.jpg";

const ChangeProfilePicture = () => {
  const [image, setImage] = useState(profilePic);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="change-profile-picture">
      <img src={image} alt="Profile" className="profile-image" />
      <input type="file" onChange={handleImageChange} />
    </div>
  );
};

export default ChangeProfilePicture;
