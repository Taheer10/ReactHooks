import React,{useState} from 'react'
import useCounter from './useCounter'

function CounterTwo() {
  const [count,Increment,Decrement,Reset] = useCounter(10,5)


  return (
    <div>
        <h1>count {count}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset}>Reset</button>

    </div>
  )
}

export default CounterTwo