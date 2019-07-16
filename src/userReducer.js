import React, { useState, useEffect, useReducer } from "react";
import "./App.css";

const initialState = { count: 0, step: 1 };
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  return <h1>{count}</h1>;
}
function reducer(state, action) {
  switch (action.type) {
    case "tick":
      return {
        ...state,
        count: state.count + state.step
      };
    default:
      return state;
  }
}
export default App;
