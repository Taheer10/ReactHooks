import React, { useState } from "react";

function UseStateHookCounter() {
  //Here count stores the intial state
  //setCount is used to update the state of the count
  //inside usestate default value is passed
  //Default value is never used on re-render
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count} times</button>
    </div>
  );
}

export default UseStateHookCounter;
