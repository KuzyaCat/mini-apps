import { useState } from 'react';
import './App.css';

function App() {
  const [cardList, setCardList] = useState([
    { id: 1, order: 3, text: 'Card 3' },
    { id: 2, order: 1, text: 'Card 1' },
    { id: 3, order: 2, text: 'Card 2' },
    { id: 4, order: 4, text: 'Card 4' },
  ]);
  const [currentCard, setCurrentCard] = useState(null);

  function dragStartHandler(e, card) {
    setCurrentCard(card);
  }

  function dragLeaveHandler(e, card) {
  }

  function dragEndHandler(e, card) {
    e.target.style.background = '#fff';
  }

  function dragOverHandler(e, card) {
    e.preventDefault();
    e.target.style.background = 'lightgray';
  }

  function dropHandler(e, card) {
    e.preventDefault();

    setCardList(cardList.sort(sortCards).map((c) => {
      if (c.id === card.id) {
        return { ...c, order: currentCard.order };
      }

      if (c.id === currentCard.id) {
        return { ...c, order: card.order };
      }

      return c;
    }));

    e.target.style.background = '#fff';
  }

  const sortCards = (a, b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <div className="app">
      {cardList.map((card) => (
        <div
          onDragStart={(e) => dragStartHandler(e, card)}
          onDragLeave={(e) => dragLeaveHandler(e, card)}
          onDragEnd={(e) => dragEndHandler(e, card)}
          onDragOver={(e) => dragOverHandler(e, card)}
          onDrop={(e) => dropHandler(e, card)}
          className="card"
          draggable={true}
        >
          {card.text}
        </div>
      ))}
    </div>
  );
}

export default App;
