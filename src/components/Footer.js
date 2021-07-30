import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
  return (
    <div id="footerMenu">
      <span>Copyright</span> - <NavLink to="/contactUs"></NavLink>
    </div>
  );
};

export default Footer;
