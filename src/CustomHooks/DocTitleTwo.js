import React,{useState} from 'react'
import useCusHook from './useCusHook'
    


function DocTitleTwo() {
    const [count, setcount] = useState(0)
    
    useCusHook(count)

  return (
    <div>

        <button onClick={()=>setcount(count +1)}>Count {count}</button>
    </div>
  )
}

export default DocTitleTwo