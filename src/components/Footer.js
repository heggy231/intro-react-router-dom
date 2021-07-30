import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css"
import ContactUs from "./ContactUs";

const Footer = () => {
  return (
    <div id="footerMenu">
      <span>Copyright</span> - <NavLink to="/contactUs" className="contactus">Contact Us</NavLink>
    </div>
  );
};

export default Footer;
