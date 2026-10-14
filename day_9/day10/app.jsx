import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
  const [count,setCount] =useState(0);
  const increament = () =>{
    setCount(count+1);
    console.log("UseState Called.")
  }

  useEffect(()=>{
    document.title = `count:-${count}`;
    console.log("Component Rerendered.");
  },[count]);

  return (
    <div><h1><center>Counter</center></h1>
    <div>{count}</div>
    <button onClick={increament}>Increament</button></div>
  )
}

export default App