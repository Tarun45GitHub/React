import { useState } from 'react'

import './App.css'

function App() {
  let [count, setCount] = useState(0)
const addvalue = ()=>{
  if(count<20){
    // count=count+1;

  // setCount(count+1);
  // setCount(count+1);
  // setCount(count+1);
  // setCount(count+1);
  //increment 1 by one click

  setCount(count=>count+1);
  setCount(count=>count+1);
  setCount(count=>count+1);
  setCount(count=>count+1);
  //increment 4 by one click
  }

}
const deletevalue=()=>{
  if(count>0) {
    count=count-1;
  setCount(count);
  }
}

  return (

    <>
      <h2>Tarun Dalbera</h2>
      <h4>value:{count}</h4>
      <button onClick={addvalue}>add:</button>
      <br />
      <button onClick={deletevalue}>delete:</button>
    </>
  )
}

export default App
