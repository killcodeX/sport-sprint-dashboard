import React from 'react';
import { useState } from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    const newCount = count + 1
    setCount(newCount)
  }

  const handleDecrement = () => {
    const newCount = count - 1
    setCount(newCount)
  }

  return (
    <div className="App">
      <header className="App-header">
      <button className="btn btn-danger" data-cy="decrement" onClick={handleDecrement}>
        -
      </button>
      <span className='mx-5' data-cy="counter">{count}</span>
      <button className="btn btn-primary" data-cy="increment" onClick={handleIncrement}>
        +
      </button>
      </header>
    </div>
  );
}

export default App;
