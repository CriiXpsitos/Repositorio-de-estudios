"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  addOne,
  initCounterState,
  substractOne,
} from "@/store/counter/counterSlicer";
import { useEffect } from "react";
// import { useState } from "react";

interface Props {
  number?: number;
}

const getApiCounter = async () => {
  const data = await fetch("api/counter", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return data as { count: number };
};

export const CartCounter = ({ number = 10 }: Props) => {
  // const [count, setCount] = useState(number);

  const count = useAppSelector((state) => state.counter.count);
  const isReady = useAppSelector((state) => state.counter.isReady);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isReady) return;
    getApiCounter().then((data) => dispatch(initCounterState(data.count ?? number)));
  }, [dispatch, isReady, number]);

  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          onClick={() => dispatch(addOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] cursor-pointer  mr-2"
        >
          +1
        </button>
        <button
          onClick={() => dispatch(substractOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] cursor-pointer  mr-2"
        >
          -1
        </button>
      </div>
    </>
  );
};
