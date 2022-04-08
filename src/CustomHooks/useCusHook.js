import {useEffect} from 'react'

function useCusHook(count) {
    useEffect(()=>{
        document.title = `count ${count}`
    },[count])
    
    // const incrementCount=()=>{
    //     setcount(count+1)
    // }
}

export default useCusHook