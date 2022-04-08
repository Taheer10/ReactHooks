import React,{useState,useEffect} from 'react'
import axios from 'axios'

 
function DataFetching1() {
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState('')
    const [post, setpost] = useState({})

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>{
            setloading (false)
            setpost(response.data)
            seterror('')
        })
        .catch(error =>{
            setloading(false)
            setpost({})
            seterror('Something Went Wrong')
        })
    },[]) //[] -- it is empty dependency array that helps to call api once or load data once
  return (
    <div>
         {loading ? 'loading' : post.title}
         {error ? error : null}


    </div>
  )
}

export default DataFetching1