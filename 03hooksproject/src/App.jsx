import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {

 let [counter,setCounter]=useState(5)

  // let counter=5;
  const addvalue=()=>{
    counter=counter+1;
    console.log("clicked",counter);
    setCounter(counter)
  }
  const removevalue=()=>{
    counter=counter-1;
    console.log("clicked",counter);
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
