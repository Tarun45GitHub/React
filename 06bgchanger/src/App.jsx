import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
     <div className="">
      <button value={"blue"}>blue</button>
      <button value={"blue"}>yellow</button>
      <button value={"blue"}></button>
      <button value={"blue"}>blue</button>
      <button value={"blue"}>blue</button>
      <button value={"blue"}>blue</button>
      <button value={"blue"}>blue</button>
      <button value={"blue"}>blue</button>
      <button value={"blue"}>blue</button>
     </div>
      
    </>
  )
}

export default App
