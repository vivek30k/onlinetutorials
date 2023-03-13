import React from 'react'
import { useContext } from 'react'
import { Fname, Lname } from './ComponentA';
import ComponentC from './ComponentC'

const ComponentB = () => {
  const fname = useContext(Fname);
  const lname = useContext(Lname);

  return (
    <>
    <p>hi {fname} {lname}</p>
    <ComponentC />
    </>
  )
}

export default ComponentB
