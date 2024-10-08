import React, { useState } from "react";
import Drsidebar from "./Drsidebar";
import ProfileSection from "./ProfileSection";
import "../css/Profile.css";
import HeaderAim from "./HeaderAim";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => setIsEditing(true);
  const handleDone = () => setIsEditing(false);

  return (
    <div className="container-New">
      <Drsidebar />
      <main className="main-content-New">
        <HeaderAim></HeaderAim>
        <ProfileSection
          isEditing={isEditing}
          onEdit={handleEdit}
          onDone={handleDone}
        />
      </main>
    </div>
  );
}

export default Profile;
