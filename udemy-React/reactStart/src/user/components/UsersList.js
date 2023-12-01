import React from "react";

import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";
import "./UserList.css";

//사용자가 없다는 메시지를 띄우거나, 사용자가 한 명이라도 있다면 사용자 목록 파일을 보여줘야 한다.
//props를 통해 외부에서 가져오는 데이터에 따라 달라진다.
const UserList = (props) => {
  if (props.items.lenght === 0) {
    return (
      <div className="center">
        <Card>
          <h2>NO Users found.</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className="user-list">
      {props.items.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        );
      })}
    </ul>
  );
};

export default UserList;
