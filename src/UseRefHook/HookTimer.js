import React, { useState, useEffect, useRef } from "react";

function HookTimer() {
  const [timer, settimer] = useState(0);

  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      settimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      Hook Timer - {timer}
      <button onClick={() => clearInterval(intervalRef.current)}>Clear</button>
    </div>
  );
}

export default HookTimer;
