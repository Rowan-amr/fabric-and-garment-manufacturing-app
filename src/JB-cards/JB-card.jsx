import React from "react";
import "./JB-card.css";
import CardComponent from "./JB-cardComponent";

const Card = () => {
  return (
    <div className="card-container">
      <h2>JUST BRANDS-PME LEGEND</h2>
      <div className="cards">
        <CardComponent />
      </div>
    </div>
  );
};

export default Card;
