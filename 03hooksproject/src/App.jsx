import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {

 let [counter,setCounter]=useState(5)

  // let counter=5;
  /*
  const addvalue=()=>{
    if(counter<20) counter=counter+1;
    // console.log("clicked",counter);
    setCounter(counter)
  }
*/
const addvalue=()=>{
  // console.log("clicked",counter);
  // it increment counter 5 times
  setCounter(counter=>counter+1)
  setCounter(counter=>counter+1)
  setCounter(counter=>counter+1)
  setCounter(counter=>counter+1)
  setCounter(counter=>counter+1)
}
  const removevalue=()=>{
    if(counter>=1) counter=counter-1;
    // console.log("clicked",counter);
    setCounter(counter)
  }
  return (
    <>
    <h1>Counter Project</h1>
    <h3>counter value : {counter}</h3>

    <button onClick={addvalue}> add </button>
    <br />
    <button onClick={removevalue}>remove</button>
    </>
  )
}

export default App
