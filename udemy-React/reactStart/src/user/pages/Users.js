import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "dana",
      image:
        "https://blog.kakaocdn.net/dn/eiDQ9b/btqSX8e2k9C/Wa0ktOPY5LSJTF5LCakoZK/img.png",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
