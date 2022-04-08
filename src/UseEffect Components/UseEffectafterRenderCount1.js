import React, { useState, useEffect } from "react";

function UseEffectafterRenderCount1() {
  const [count, setCount] = useState(0);
  const [name, setName] = useEffect('');

  //UseEffect runs after the render

  useEffect(() => {
    console.log("Usefeect - Updating document title");
    document.title = `you clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
}

export default UseEffectafterRenderCount1;
