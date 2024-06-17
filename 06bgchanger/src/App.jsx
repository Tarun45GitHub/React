// import { useStat } from 'react'

import './App.css'
import {ColorBttn,bgColor} from './components/ColorBttn.jsx'

function App() {
  

  return (
   <div className='w-full h-screen duration' style={{backgroundColor:bgColor}}>
    <div className='fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2' >
    <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl' >
    <ColorBttn color={"red"}  />
    <ColorBttn color={"blue"}/>
   </div>
    </div>
   </div>
  )
}

export default App
