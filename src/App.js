import { useState, useEffect } from "react";
import "./App.css";
import { Card } from "./components/Card";

const cardImages = [
  { src: "/img/helmet-1.png" },
  { src: "/img/potion-1.png" },
  { src: "/img/ring-1.png" },
  { src: "/img/scroll-1.png" },
  { src: "/img/shield-1.png" },
  { src: "/img/sword-1.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceCardOne, setChoiceCardOne] = useState(null);
  const [choiceCardTwo, setChoiceCardTwo] = useState(null);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages];
    shuffledCards
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
  };

  const choiceHandler = (card) => {
    choiceCardOne ? setChoiceCardTwo(card) : setChoiceCardOne(card);
  };

  // Comparing two cards
  useEffect(() => {
    if (choiceCardOne && choiceCardTwo) {
      if (choiceCardOne.src === choiceCardTwo.src) {
        console.log("those cards match");
        resetTurn();
      } else {
        console.log("those cards do not match");
        resetTurn();
      }
    }
  }, [choiceCardOne, choiceCardTwo]);

  // Reset Turn && Count Turns
  const resetTurn = () => {
    setChoiceCardOne(null);
    setChoiceCardTwo(null);
    setTurns((prevTurn) => prevTurn + 1);
  };

  console.log(true);

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card__grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} choiceHandler={choiceHandler} />
        ))}
      </div>
    </div>
  );
}

export default App;
