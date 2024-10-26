import React from 'react';
import Card from './mycard'; 
import './App.css'; 
import cardsData from './cards.json'; // Import the JSON data

const App = () => {
  return (
    <div className="card-container">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default App;
