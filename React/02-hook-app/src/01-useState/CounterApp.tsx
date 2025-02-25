import { useState } from "react"


export const CounterApp = () => {
    // const [counter, setCounter] = useState(10)
    const [{counter1, counter2, counter3}, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    })

    console.log(setState)
  return (
    <>
        <h1>Counter: { counter1 }</h1>
        <h1>Counter: { counter2 }</h1>
        <h1>Counter: { counter3 }</h1>
        <hr />

        <button className="btn" onClick={() => setState(prevState => ({
            ...prevState,
            counter1: prevState.counter1 + 1
        }))}>+1</button>
    </>
  )
}
