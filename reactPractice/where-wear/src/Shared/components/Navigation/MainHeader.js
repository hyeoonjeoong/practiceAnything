import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import NavLinks from "./NavLink";

import "./MainHeader.css";

const MainHeader = () => {
  return (
    <>
      <header className="main-header nav-link">
        <NavLink to="/">
          <h2>WhereWear</h2>
        </NavLink>
        <NavLinks />
      </header>
    </>
  );
};

export default MainHeader;
