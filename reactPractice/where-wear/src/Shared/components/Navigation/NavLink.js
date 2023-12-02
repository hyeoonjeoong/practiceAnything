import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLink.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-link">
      <NavLink to="/" exact>
        <li>All</li>
      </NavLink>
      <NavLink to="/login">
        <li>Login</li>
      </NavLink>
      <NavLink to="/feed/new">
        <li>New</li>
      </NavLink>
    </ul>
  );
};

export default NavLinks;
