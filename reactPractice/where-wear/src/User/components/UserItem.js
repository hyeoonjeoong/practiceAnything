import React from "react";

import ProfileImage from "../../Shared/components/UIElements/ProfileImage";
import Card from "../../Shared/components/UIElements/Card";

import "./UserItem.css";

const UserItem = (props) => {
  return (
    <>
      <li className="user-item">
        <Card>
          {props.id}
          <h2>{props.name}</h2>
          <div className="user-item-image">
            <ProfileImage image={props.image} alt={props.name} />
          </div>
          {props.feedCount}
          <button>Go!</button>
        </Card>
      </li>
    </>
  );
};

export default UserItem;
