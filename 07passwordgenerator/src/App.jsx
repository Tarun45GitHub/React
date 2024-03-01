import { useCallback, useEffect, useRef, useState } from 'react'
// import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberTake,setNumberTake]=useState(false)
  const [charTake,setCharTake]=useState(false)
  const [Password,setPassword]=useState("")
  const passwordRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(charTake) str+="~!@#$%^&*?"
    if(numberTake) str+="1234567890"
    const n=str.length
    // console.log(n);
    for (let index = 0; index < length; index++) {
      pass+=str[parseInt(Math.random()*n)+1]; 
    }
    // console.log(pass);
    setPassword(pass)
  },[length,numberTake,charTake])

  const copyPassword=()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(Password)
  }
 useEffect(passwordGenerator,[length,numberTake,charTake])

  return (
    <>
    <div className=' w-screen flex-col align-middle justify-cente'>

        <h1 className="text-3xl font-bold underline text-red-500 text-center">
        Password Generator
        </h1>

       <div className=' w-3/6 mx-w-mid mx-auto shadow-md rounded-lg bg-gray-500 p-3 m-8'>

         <div className='rounded-xl my-2  text-white p-3 text-xl overflow-hidden'>
           <input type="text" value={Password} placeholder='password' readOnly ref={passwordRef}
           className=' w-4/5 rounded-xl my-2 h-12 text-white p-3 text-xl' />

           <button 
           onClick={copyPassword}
           className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 h-12 w-1/5'
            >Copy</button>

         </div>

         <div className='flex text-sm gap-x-2' >
        <div className='flex items-center gap-x-1' >
          
          <input type="range" min={5} max={10} value={length}
          onChange={(e)=>setLength(e.target.value)}
          className='cursor-pointer'
           /> 
          <label > length: {length}</label>

        </div>
        <div className='flex items-center gap-x-1'  > 
        <input type="checkbox" name="number" id="number" defaultChecked={numberTake} 
        onChange={()=>{setNumberTake((prev)=>!prev)}} />
        <label htmlFor="number">Number</label>
        </div>

        <div className='flex items-center gap-x-1'  > 
        <input type="checkbox" name="Char" id="Char" defaultChecked={charTake}
        onChange={()=>{setCharTake((prev)=>!prev)}} />
        <label htmlFor="Char">Special Character</label>
        </div>

       </div>

       </div>  
    </div>

    </>
  )
}

export default App
