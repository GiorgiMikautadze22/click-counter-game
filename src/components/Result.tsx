import React, { Ref, useImperativeHandle } from "react";
import { forwardRef } from "react";

interface Count {
  count: number;
}

export type CounterRef = {
  handleRefresh: () => void;
};

const Result = ({ count }: Count, ref: Ref<CounterRef>) => {
  const handleRefresh = () => {
    window.location.reload();
  };

  useImperativeHandle(ref, () => ({ handleRefresh }));

  return (
    <div className="result">
      <h2>Game over</h2>
      <p>Your final score : {count}</p>
      {/* <button onClick={handleRefresh}>Restart</button> */}
    </div>
  );
};

export default forwardRef(Result);
