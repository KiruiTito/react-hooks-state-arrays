import React, { useState } from 'react';

function App() {
  const [foods, setFoods] = useState(['Pizza', 'Burger', 'Fries']);

  const handleLiClick = (index) => {
    const newFoods = [...foods];
    newFoods.splice(index, 1);
    setFoods(newFoods);
  };

  return (
    <div>
      <h1>My favorite foods</h1>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleLiClick(index)}>
            {food}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
