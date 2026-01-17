import React from "react";
import "../Styles/Header.css"
import timeIcon from "../Images/time.jpg";
import phoneIcon from "../Images/phone.png";
import companyLogo from "../Images/travellogo.png";

const Header = () => {
  return (
    <header className="mainHeader">
         <div className="headerRight">
        <img src={companyLogo} alt="Company Logo" className="companyLogo" />
        <span className="companyName">Finna Travel</span>
      </div>
      {/* Left Side */}
      <div className="headerLeft">
        <div className="headerItem">
          <img src={timeIcon} alt="Time" className="headerIcon" />
          <span>09:00AM — 05:00PM</span>
        </div>

        <div className="headerItem">
          <img src={phoneIcon} alt="Phone" className="headerIcon" />
          <span>+91 98765 43210</span>
        </div>
      </div>

     
    </header>
  );
};

export default Header;
