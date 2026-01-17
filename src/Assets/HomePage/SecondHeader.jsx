import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/SecondHeader.css";
import registerIcon from "../Images/register.jpg";
import loginIcon from "../Images/lock.jpg";

const SecondHeader = () => {
  return (
    <nav className="secondHeader">
      {/* Left Menu */}
      <ul className="navLeft">
        <li>
          <NavLink to="/" end>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/mission">Our Mission</NavLink>
        </li>
      </ul>

      {/* Right Menu */}
      <div className="navRight">
        <div className="navAction">
          <img src={registerIcon} alt="Register" />
          <span>B2B Registration</span>
        </div>

        <div className="navAction">
          <img src={loginIcon} alt="Login" />
          <span>B2B Login</span>
        </div>
      </div>
    </nav>
  );
};

export default SecondHeader;
