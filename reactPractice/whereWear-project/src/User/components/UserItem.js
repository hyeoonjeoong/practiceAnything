import React from "react";
import { Link } from "react-router-dom";

import ProfileImage from "../../Shared/components/UIElements/ProfileImage";
import Card from "../../Shared/components/UIElements/Card";
import Button from "../../Shared/components/UIElements/Button";

import "./UserItem.css";

const UserItem = (props) => {
  return (
    <>
      <li className="user-item">
        <Card>
          <Link to={`/${props.id}/feed`}>
            <h2>{props.name}</h2>
            <div className="user-item-image">
              <ProfileImage image={props.image} alt={props.name} />
            </div>
            <div className="user-item-feeds">{props.feedCount} posts</div>
            <Button>
              <button className="user-item-btn">Go!</button>
            </Button>
          </Link>
        </Card>
      </li>
    </>
  );
};

export default UserItem;
