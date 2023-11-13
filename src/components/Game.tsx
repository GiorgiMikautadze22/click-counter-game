import React, { useEffect } from "react";
import { timeProps } from "../Interfaces/Interfaces";

const Game = ({ time, setTime, count, setCount }: timeProps) => {
  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const countDown = setInterval(() => {
      if (time === 0) {
        clearInterval(countDown);
      } else if (time) {
        setTime(time - 1);
      }
    }, 1000);

    return () => clearInterval(countDown);
  }, [time]);

  return (
    <div className="game">
      <h1>Click Counter Game</h1>
      <p>Click button as many times as you can within 10 seconds!</p>
      {time !== 0 ? (
        <button onClick={handleClick}>Click me</button>
      ) : (
        <button style={{ opacity: 0.5 }}>Click me</button>
      )}
      <p>Time left: {time} seconds</p>
      <p>Click count: {count}</p>
    </div>
  );
};

export default Game;
