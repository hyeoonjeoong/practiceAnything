import React from "react";
import UserItem from "./UserItem";

const UserList = (props) => {
  return (
    <>
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
    </>
  );
};

export default UserList;
