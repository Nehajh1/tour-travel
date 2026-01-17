import React from "react";
import "../Styles/AboutUs.css";
import Logo from "../Images/travellogo.png";

const AboutUs = () => {
  return (
    <div className="aboutContainer">
      <h1>About Finna Travel Portal</h1>

      <img src={Logo} alt="DMC Logo" className="aboutLogo" />

      <p>
        At Finna Travel Portal, we are more than just a travel solutions provider — 
        we are a community of passionate explorers and innovators committed to 
        reshaping the way the travel industry operates.
      </p>

      <p>
        As a dedicated B2B platform, we serve travel agencies, tour operators, 
        and business partners worldwide, delivering custom-tailored travel 
        solutions that turn ordinary trips into extraordinary experiences.
      </p>

      <p>
        From adventure-packed expeditions to laid-back leisure escapes, our 
        strength lies in customization — tailoring every detail to match your 
        clients’ unique needs.
      </p>

      <p>
        We manage every element of your clients' travel with a focus on efficiency,
        cost-effectiveness, and ethical practices.
      </p>

      <h2>Benefits of Key Points</h2>

      <h3>Business Model</h3>
      <p>
        Finna Travel Portal is a B2B (business-to-business) platform for travel agencies
        and partners worldwide.
      </p>

      <h3>Target Audience</h3>
      <p>Associated Travel Business Partners.</p>

      <h3>Eliminate Mail Process</h3>
      <p>
        We eliminate email delays by offering B2B travel agents instant responses.
      </p>

      <h2>How Does Finna Travel Portal Work?</h2>
      <p>
        “Plan your travel” is an essential tool to work out quotes for various
        destinations. All quotes are saved with an auto-generated Booking ID.
      </p>

      <p>
        The dashboard provides options like Query, Compose Package, Hotel List,
        My Booking, My Offer Package, Promotional List, and more.
      </p>

      <h2>How It Works</h2>
    </div>
  );
};

export default AboutUs;
