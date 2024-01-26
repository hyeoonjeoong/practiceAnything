import React from "react";
import { NavLink } from "react-router-dom";

import ListItem from "../shared/components/ListItem";

import "../components/SideBar.css";

const SideBar = () => {
  return (
    <>
      <div className="side-bar">
        <ul className="nav-link">
          <NavLink to="/admin" exact>
            <ListItem icon="/sidebar/dashboard.svg" arrow="/sidebar/arrow.svg">
              대시 보드
            </ListItem>
          </NavLink>
          <NavLink to="/admin/products">
            <ListItem icon="/sidebar/products.svg" arrow="/sidebar/arrow.svg">
              상품 관리
            </ListItem>
          </NavLink>
          <NavLink to="/admin/orders">
            <ListItem icon="/sidebar/orders.svg" arrow="/sidebar/arrow.svg">
              거래 내역 관리
            </ListItem>
          </NavLink>
          <NavLink to="/admin/users">
            <ListItem icon="/sidebar/users.svg" arrow="/sidebar/arrow.svg">
              회원관리
            </ListItem>
          </NavLink>
        </ul>
        <ul className="nav-link">
          {/* <NavLink to=""> */}
          <ListItem icon="/sidebar/out.svg" arrow="/sidebar/arrow.svg">
            나가기
          </ListItem>
          {/* </NavLink> */}
        </ul>
      </div>
    </>
  );
};

export default SideBar;
