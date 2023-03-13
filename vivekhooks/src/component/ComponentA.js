import React, { createContext } from "react";
import ComponentB from "./ComponentB";

const Fname = createContext();
const Lname = createContext();

const ComponentA = () => {
  return (
    <>
      <Fname.Provider value={"Vivek"}>
        <Lname.Provider value={"kumar"}>
          <ComponentB />
        </Lname.Provider>
      </Fname.Provider>
    </>
  );
};

export default ComponentA;
export { Fname,Lname };
