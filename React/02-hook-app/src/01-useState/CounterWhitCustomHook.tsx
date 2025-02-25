import { useCounter } from "../hooks/useCounter"

export const CounterWhitCustomHook = () => {

  const {counter, increment, decrement, reset} = useCounter(2)


  return (
    <>
        <h1>Counter with Hook: {counter}</h1>

        <hr />

        <button onClick={() => increment(10)} className="btn btn-primary">+1</button>
        <button onClick={reset} className="btn btn-primary">Reset</button>
        <button onClick={() => decrement(3)} className="btn btn-primary">-1</button>
    </>
)
}
