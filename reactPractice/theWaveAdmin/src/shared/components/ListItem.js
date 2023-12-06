import React from "react";
import "./ListItem.css";

const ListItem = (props) => {
  return (
    <li className="list-item">
      <img src={props.icon} alt="Icon" className="list-icon" />
      {props.children}
      <img src={props.arrow} alt="arrow" className="list-arrow" />
    </li>
  );
};

export default ListItem;
