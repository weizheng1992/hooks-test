import React, { useState, useEffect, useCallback } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  const [other, setOther] = useState(0);
  const fetch = useFetch(count, step);
  useEffect(() => {
    fetch();
  }, [fetch]);
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>setCount {count}</button>
      <button onClick={() => setStep(c => c + 1)}>setStep {step}</button>
      <button onClick={() => setOther(c => c + 1)}>setOther {other}</button>
    </div>
  );
}

function useFetch(count, step) {
  return useCallback(() => {
    const url = "https://v/search?query=" + count + "&step=" + step;
    console.log(url)
  }, [count, step]);
}

export default App;
