import React, { useState } from "react";
import "../styles/Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <h1 className="counter-heading">COUNTER</h1>
      <h2 className="counter-number">{count}</h2>
      <button className="increment-button" onClick={increment}>
        INCREMENT
      </button>
      <button className="reset-button" onClick={reset}>
        RESET
      </button>
      <button className="decrement-button" onClick={decrement}>
        DECREMENT
      </button>
    </div>
  );
};

export default Counter;
