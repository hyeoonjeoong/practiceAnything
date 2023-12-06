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
            <li>대시 보드</li>
          </NavLink>
          <NavLink to="/admin/products">
            <li>상품 관리</li>
          </NavLink>
          <NavLink to="/admin/orders">
            <li>거래내역 관리</li>
          </NavLink>
          <NavLink to="/admin/users">
            <li>회원 관리</li>
          </NavLink>
        </ul>
        <ul className="nav-link">
          {/* <NavLink to=""> */}
          <li>나가기</li>
          <ListItem icon="/sidebar/out.svg" arrow="/sidebar/out.svg">
            리스트테스트
          </ListItem>
          {/* </NavLink> */}
        </ul>
      </div>
    </>
  );
};

export default SideBar;
