import React from "react";
import "../Styles/ContactUs.css";
import placeImage from "../Images/kashmirImage.jpg";

const ContactUs = () => {
  return (
    <div className="contactContainer">
      <h1>Contact Us</h1>

      <div className="contactContent">
        {/* Place Image */}
        <img
          src={placeImage}
          alt="Our Location"
          className="contactImage"
        />

        {/* Contact Details */}
        <div className="contactDetails">
          <p>
            <strong>Contact:</strong>{" "}
            <a href="tel:7006142603">7006-142-603</a>
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:support@b2btourportal.com">
              support@b2btourportal.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
