"use client"
import { useState } from "react";


interface Props {
    number?: number;
}

export const CartCounter = ({number = 10} : Props) => {
  const [count, setCount] = useState(number);
  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          onClick={() => setCount((prevState) => prevState + 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] cursor-pointer  mr-2"
        >
          +1
        </button>
        <button
          onClick={() => setCount((prevState) => prevState - 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] cursor-pointer  mr-2"
        >
          -1
        </button>
      </div>
    </>
  );
};
