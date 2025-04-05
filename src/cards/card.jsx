import React from "react";
import "./card.css";
import CardComponent from "./cardComponent";

const Card = () => {
  return (
    <div className="card-container">
      <h2>VF-NAPAPIJRI</h2>
      <div className="cards">
        <CardComponent />
      </div>
    </div>
  );
};

export default Card;
