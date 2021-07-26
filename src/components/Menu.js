import React from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div id="menu">
        <div>
          <NavLink to="/">Home</NavLink>
        </div>
        <div>
          <NavLink to="/add-movie">Add Movie</NavLink>
        </div>
      </div>
    </>
  );
};

export default Menu;
