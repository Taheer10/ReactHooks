import React, {useState} from 'react'

function HookCounterObject() {
    //A state variable can be any data types
    //use state will not merge the state like setstate -- 
    //it needs to be done manually merge using spread Operator and pass a value to the setter function
    const[name,setName]=useState({firstName:'',lastName:''})
  return (
    <div>

   <form >
       
       <input type="text" value={name.firstName} 
       onChange={e=>setName({...name, firstName: e.target.value})}/>
       <input type="text" value={name.lastName} 
       onChange={e=>setName({...name,lastName: e.target.value})}/>

        
        <h2>Your FirstName is- {name.firstName}</h2>
        <h2>Your LastName is - {name.lastName}</h2>

            <p>{JSON.stringify(name)}</p>

   </form>



    </div>
  )
}

export default HookCounterObject