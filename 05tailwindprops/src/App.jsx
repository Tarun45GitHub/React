import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App(props) {
  console.log(props);
  // console.log(5);
  const [count, setCount] = useState(0)
  let myobj={
    username:"Tarun",
    pass:"85206"

  }

  return (
    <>
      <h1 className='bg-blue-500 text-black mb-2' >Tailwind CSS</h1>
      <Card myname="Tarun" someobj={myobj}/>
    </>
  )
}

export default App
