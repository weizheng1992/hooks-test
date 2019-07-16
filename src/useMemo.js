import React, { useState, useMemo } from "react";
import "./App.css";

function Time() {
	return <p>{Date.now()}</p>;
}

function App() {
  const [count, setCount] = useState(0);
  
  const memoizedChildComponent = useMemo(() => {
    return <Time count={count}/>;
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <div>{memoizedChildComponent}</div>
    </div>
  );
}

export default App;
