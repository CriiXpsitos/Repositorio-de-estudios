import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";

const heavyStuff = (iterationNumber: number = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Ahí vamos...");
  }

  return `${iterationNumber} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true);

  const memoHeavyStuff = useMemo(() => heavyStuff(counter), [counter]);
  return (
    <>
      <h1>
        Counter <small>{counter}</small>
      </h1>

      <hr />

      <p>{memoHeavyStuff}</p>

      <button className="btn btn-primary" onClick={() => increment(1)}>
        +1
      </button>
      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        {" "}
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
