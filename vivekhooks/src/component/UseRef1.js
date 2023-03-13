import React, { useRef, useState } from "react";

const UseRef1 = () => {

    const name = useRef(null);
    const [flag,setFlag] = useState(false);

    const handlesubmit = (e) =>{
        e.preventDefault();
    console.log("Form submitted"+ name.current.value)
    const namevalue = name.current.value
    if(namevalue === "" ){
    setFlag(false)    
    alert("Please enter name") 
    }else{
        setFlag(true)
    }

    }

  return (
    <div>
      <label htmlFor="name"> Please enter your name </label>
      <form action=""  onSubmit={handlesubmit}>
        <div>
        <input type="text" id="name" ref={name}/>
        </div>
        <br/>
        <button>Submit</button>
        <p> {flag  ? `My name is ${name.current.value}` :  "" }</p>
      </form>
    </div>
  );
};

export default UseRef1;
