import React,{useState} from 'react'

function HookCounter2() {
  const initialcount = 0;
  const[count,setcount] = useState(0)
  
  const incrementnumbyten=()=>{
    // for(let i=0;i<5;i++){
    //   setcount(previous =>previous+1)
    // }
      setcount(previous =>previous+10)
    
  }

  return (
    <div>


      count: {count}
      <button onClick={()=>setcount(initialcount)}>Reset</button>
      <button onClick={()=> setcount(previous => previous+1)}>Increment</button>
      <button onClick={()=> setcount(previous => previous-1)} >Decrement</button>
      <button onClick={incrementnumbyten}>DecremenIncrement by 10</button>


    </div>
  )
}

export default HookCounter2