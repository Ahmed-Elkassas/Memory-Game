import React from "react";

import "./Card.css";

export const Card = ({ card, choiceHandler, flipped }) => {
  const clickCardHandler = () => {
    choiceHandler(card);
  };

  return (
    <div className="card__grid--item">
      <div className={flipped ? "flipped" : ""}>
        <img className="card__grid--front" src={card.src} alt="card front" />
        <img
          className="card__grid--back"
          src="/img/cover.png"
          onClick={clickCardHandler}
          alt="card back"
        />
      </div>
    </div>
  );
};
