import React from "react";

interface Count {
  count: number;
}

const Result = ({ count }: Count) => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="result">
      <h2>Game over</h2>
      <p>Your final score : {count}</p>
      <button onClick={handleRefresh}>Restart</button>
    </div>
  );
};

export default Result;
