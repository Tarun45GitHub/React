import { useState } from 'react'


function App() {
  const [color, setColor] = useState("black")
  return (
    <div className='main'
    style={{backgroundColor: color}}>
    <div className='container' >
      test
    </div>
    </div>
  )
}

export default App
