import {useState} from 'react'

function useCounter(initialvalue = 0, value) {
    const [count, setcount] = useState(initialvalue)

    const Increment= () =>{
        setcount(prevCount => prevCount+ value)
    }
    
    const Decrement= () =>{
        setcount(prevCount => prevCount- value)
    }

    const Reset= () =>{
        setcount(0)
    }

  return [count,Increment,Decrement,Reset]
   
}

export default useCounter