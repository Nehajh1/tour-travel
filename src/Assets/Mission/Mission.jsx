import React from "react";
import "../Styles/Mission.css";
import img1 from "../Images/innovation.png";
import img2 from "../Images/travel.png";
import img3 from "../Images/globalreach.png";
import img4 from "../Images/strongteam.png";

const Mission = () => {
  const missionPoints = [
    { img: img1, title: "Innovation", subtitle: "Revolutionizing the travel industry with smart digital tools." },
    { img: img2, title: "Future Of Travel", subtitle: "Creating seamless and unforgettable journeys worldwide." },
    { img: img3, title: "Global Reach", subtitle: "Trusted B2B platform serving partners across the globe." },
    { img: img4, title: "Strong Teams", subtitle: "Energetic staff dedicated to supporting partners and clients." },
  ];

 const visionPoints = [
    "Craft unique travel experiences, not just manage trips.",
    "Simplify quotation generation with easy tools.",
    "Offer attractive deals and promotions for bookings.",
  ];

  const whatSetsApartPoints = [
    "Customization at its Core: Packages crafted to match unique visions.",
    "Technology + Expertise: Blending digital tools with human insight.",
    "Supportive Team: Personalized partner assistance at every step.",
    "Ethics & Efficiency: Transparent, ethical, and cost-effective.",
  ];

  return (
    <div className="missionContainer">
      {/* Mission Heading */}
      <h1>Our Mission</h1>
      <p>
        To bring a <strong>"new revolution"</strong> to the travel industry by 
        providing professional, efficient, and ethical travel management services.
      </p>

      {/* Circular images section */}
      <div className="missionPoints">
        {missionPoints.map((point, index) => (
          <div className="missionCard" key={index}>
            <img src={point.img} alt={point.title} className="missionImage" />
            <h3>{point.title}</h3>
            <p>{point.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Vision Section */}
      <div className="section">
        <h2>Our Vision</h2>
        <div className="sectionPoints">
          {visionPoints.map((point, index) => (
            <p key={index}>{point}</p>
          ))}
        </div>
      </div>

      {/* Who We Serve Section */}
      <div className="section">
        <h2>🎯 Who We Serve</h2>
        <p className="singlePoint">
          We work exclusively with travel business partners globally, offering flexible 
          and innovative solutions that empower them to serve their clients better.
        </p>
      </div>

      {/* What Sets Us Apart Section */}
      <div className="section">
        <h2>✨ What Sets Us Apart</h2>
        <div className="sectionPoints">
          {whatSetsApartPoints.map((point, index) => (
            <p key={index}>{point}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mission;