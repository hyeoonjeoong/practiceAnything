import React from "react";
import UserItem from "./UserItem";
import "./UserList.css";

const UserList = (props) => {
  return (
    <>
      <ul className="user-list">
        {props.items.map((user) => {
          return (
            <UserItem
              key={user.id}
              id={user.id}
              name={user.name}
              image={user.image}
              feedCount={user.feeds}
            />
          );
        })}
      </ul>
    </>
  );
};

export default UserList;
