import React, { useRef, useState } from "react";
import "./App.css";
import Game from "./components/Game";
import Result, { CounterRef } from "./components/Result";

function App() {
  const [time, setTime] = useState(10);
  const [count, setCount] = useState(0);

  const counterRef = useRef<CounterRef>(null);

  console.log(time);

  return (
    <div className="App">
      <Game time={time} setTime={setTime} count={count} setCount={setCount} />
      {time === 0 ? (
        <>
          <Result
            count={count}
            setCount={setCount}
            setTime={setTime}
            ref={counterRef}
          />
          <button onClick={() => counterRef.current?.handleRefresh()}>
            Restart
          </button>
        </>
      ) : null}
    </div>
  );
}

export default App;
