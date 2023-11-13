import React, { Ref, useImperativeHandle } from "react";
import { forwardRef } from "react";
import { timeProps } from "../Interfaces/Interfaces";

export type CounterRef = {
  handleRefresh: () => void;
};

const Result = (
  { count, setCount, setTime }: timeProps,
  ref: Ref<CounterRef>
) => {
  const handleRefresh = () => {
    setCount(0);
    setTime(10);
  };

  useImperativeHandle(ref, () => ({ handleRefresh }));

  return (
    <div className="result">
      <h2>Game over</h2>
      <p>Your final score : {count}</p>
    </div>
  );
};

export default forwardRef(Result);
