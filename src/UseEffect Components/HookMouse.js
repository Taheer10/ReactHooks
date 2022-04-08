import React,{useState,useEffect} from 'react'

function HookMouse() {
    const[X,setX]=useState(0)
    const[Y,setY]=useState(0)

    const logMousePosition =(e)=>{
      console.log('useeffect called')

         setX(e.clientX)
         setY(e.clientY)

    } 

    useEffect(()=>{
      console.log('useeffect called')
      window.addEventListener('mousemove', logMousePosition);

      return ()=>{
          window.removeEventListener('mousemove', logMousePosition);
      }
    },[])

  return (
    <div>Hooks x-{X} y-{Y} </div>
  )
}

export default HookMouse