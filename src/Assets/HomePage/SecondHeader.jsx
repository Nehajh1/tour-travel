import React from "react";
import "../Styles/SecondHeader.css";
import registerIcon from "../Images/register.jpg";
import loginIcon from "../Images/lock.jpg";

const SecondHeader = () => {
  return (
    <nav className="secondHeader">
      
      <ul className="navLeft">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Our Mission</li>
      </ul>

      
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
