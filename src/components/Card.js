import React from "react";

import "./Card.css";

export const Card = ({ card }) => {
  return (
    <div className="card__grid--item">
      <img className="card__grid--front" src={card.src} alt="card front" />
      <img className="card__grid--back" src="/img/cover.png" alt="card front" />
    </div>
  );
};
