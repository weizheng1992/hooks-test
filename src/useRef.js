import React, { useEffect, useRef } from "react";
import "./App.css";

const App = () => {
  let inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });
  return <input type="text" ref={inputRef} />;
};

export default App;
