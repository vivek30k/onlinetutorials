import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useReducer } from "react";
//import { useState } from 'react'
import "./App.css";

const App = () => {

  const reducer = (state, action) => {
    if (action.type === "Inc") {
      return (state = state + 1);
    }
    if (action.type === "Dec") {
      return (state = state - 1);
    }
    return state;
  };

  //const [count , setCount] =   useState(0);
  const intialval = 0;
  const [state, dispatch] = useReducer(reducer, intialval);

  useEffect (() => {
    console.log("this is redered everytime component is called")
    document.title=`count ${state}` ;
    } ,[state] ); 

  return (
    <div className="App App-header">
      {state} <br />
      <button onClick={() => dispatch({ type: "Inc" })}> Increment</button>
      <button onClick={() => dispatch({ type: "Dec" })}> Decrement</button>
    </div>
  );
};

export default App;
