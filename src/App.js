import React, { useReducer } from "react";
import Counter from "./UseMemoHook/Counter";
import ComponentA from "./UseReducer/ComponentA"
import ComponentC from "./UseContext/ComponentC";
import CounterThree from "./UseReducer/CounterThree";
import SimpleCounterState1 from "./UseReducer/SimpleCounterState1";
import ComponentB from "./UseReducer/ComponentB";
import DataFetching1 from "./UseReducer/DataFetching1";
import DataFetching2 from "./UseReducer/DataFetching2";
import ParentComponent from "./callbackHook/ParentComponent";
import FocusInput from "./UseRefHook/FocusInput";
import ClassTimer from "./UseRefHook/ClassTimer";
import HookTimer from "./UseRefHook/HookTimer";
import DocTitleOne from "./CustomHooks/DocTitleOne";
import DocTitleTwo from "./CustomHooks/DocTitleTwo";
import CounterOne from "./CustomHooks/CounterOne";
import CounterTwo from "./CustomHooks/CounterTwo";
import UserForm from "./CustomHooks/UserForm";

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();


// export const CountContext = React.createContext()

// const initialState = 0;

// const reducer=(state,action)=>{
   
//     switch(action){
//         case 'increment':
//             return state+1

//         case 'decrement':
//             return state-1
         
//          case 'reset':
//              return initialState
             
//          default:
//              return state    
//     }
// }



function App() {
//   const[count,dispatch] = useReducer(reducer,initialState)
  return (

    <div> 

      

      {/* <CounterOne/>
      <CounterTwo/> */}
      {/* <DocTitleOne/>
      <DocTitleTwo/> */}
      {/* <ClassTimer/>
      <HookTimer/> */}
      {/* <FocusInput/> */}
      {/* <Counter/> */}
     {/* <ParentComponent/> */}



    </div>
  
//   <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
  
//     <div className="App">
//        Count-{count}
//        <ComponentA/>
//        <ComponentB/>
//        <ComponentC/>     
//     </div>
//     </CountContext.Provider>
  );
}

export default App;
