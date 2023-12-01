import React from "react";

import "./ProfileImage.css";

const ProfileImage = (props) => {
  return (
    <div className={`ProfileImage ${props.className}`} style={props.style}>
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>
  );
};

export default ProfileImage;
