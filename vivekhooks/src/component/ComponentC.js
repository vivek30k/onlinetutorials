import React from "react";
import { Fname, Lname } from "./ComponentA";

const ComponentC = () => {
  return (
    <>
      <Fname.Consumer>
        {(fname) => {
          return (
            <Lname.Consumer>
              {(lname) => {
                return (
                  <div>
                    <h1>
                      Hello {fname} {lname}
                    </h1>
                  </div>
                );
              }}
            </Lname.Consumer>
          );
        }}
      </Fname.Consumer>
    </>
  );
};

export default ComponentC;
