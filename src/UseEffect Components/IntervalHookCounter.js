import React,{useState,useEffect} from 'react'

function IntervalHookCounter() {
    const[count,setCount]= useState(0)


     
    const tick= ()=>{
        // setCount(count+1)  way 1st to do
        setCount(prevCount => prevCount+1) //way 2nd to do
    }
   
    useEffect(()=>{
        const interval = setInterval(tick,1000) //Works as componentDidMount in Hooks

        return ()=>{  //Works as componentWillUnMount in Hooks
            clearInterval(interval);
        }
    },[count])  //},[])  way 1st to do
    //},[])  way 2nd to do

  return (
    <div>
        {count}
    </div>
  )
}

export default IntervalHookCounter