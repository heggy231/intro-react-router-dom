import React from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div id="menu">
      <div>
        <NavLink to="/" className="navlink">
          Home
        </NavLink>
      </div>
      <div>
        <NavLink to="/movies" className="navlink">
          Add Movie
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
