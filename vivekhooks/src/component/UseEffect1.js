import React, { useEffect, useState } from "react";
import "../App.css";
const UseEffect1 = () => {
  const initialvalue = 0;
  const initialscreensize = window.screen.width ;
  const [count, setCount] = useState(initialvalue);
  const [screensize, setScreensize] = useState(initialscreensize);

  useEffect ( () =>{
    document.title= `chat (${count})`
  },[count]);

  const handlewindowresize = () =>{
    setScreensize(window.innerWidth);
  }

  
  useEffect ( () =>{
    console.log("addEventListener");
    window.addEventListener("resize" , handlewindowresize) ;

    return () =>{
      console.log("removeEventListener");
      window.removeEventListener("resize" , handlewindowresize) ;

    }

  },[screensize]);

  const handleclick = () => {
    setCount(count + 1);

  };

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={handleclick}> Click Me</button>

      <p>The screen size is {screensize}</p>
    </div>
  );
};

export default UseEffect1;
