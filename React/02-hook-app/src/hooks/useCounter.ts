import { useState } from "react";

export const useCounter = (initialValue: number = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value: number) => setCounter(counter + value);
  const decrement = (value: number) => {
    if (counter === 1) return;
    setCounter(counter - value);
  };
  const reset = () => setCounter(initialValue);

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
