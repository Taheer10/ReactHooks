import React,{useState} from 'react'
import useCounter from './useCounter'

function CounterOne() {
    const [count,Increment,Decrement,Reset] = useCounter(0,1)


  return (
    <div>
        <h1>count {count}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset}>Reset</button>

    </div>
  )
}

export default CounterOne