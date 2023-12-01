import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "user1",
      name: "username1",
      image:
        "https://blog.kakaocdn.net/dn/eiDQ9b/btqSX8e2k9C/Wa0ktOPY5LSJTF5LCakoZK/img.png",
      feeds: 2,
    },
  ];
  return <UserList items={USERS} />;
};

export default Users;
