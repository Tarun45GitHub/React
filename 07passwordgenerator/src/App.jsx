import { useState ,useCallback, useEffect,useRef} from 'react'
import './App.css'

function App() {
  const[length,setLength]=useState(5);
  const[num,setNum]=useState(true);
  const[char,setChar]=useState(true);
  const[pass,setPass]=useState("");

  const passref=useRef(null)

  const passgenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(num) str+="0123456789"
    if(char) str+="~!@#$%^&*()_+";
    for (let i = 1; i <=length; i++) {
      let index= Math.random()*str.length+1;
       pass+=str.charAt(index)
      
    }
    setPass(pass);
  },[length,num,char,setPass])

  const copyPasswordClipboard=useCallback(()=>{
    passref.current?.select();
    window.navigator.clipboard.writeText(pass)
  })
  useEffect(()=>{
    passgenerator();
  },[length,num,char,passgenerator])
  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg bg-gray-500 text-white-700' >
      <div>
      <h2>Password Generator</h2>
      </div>
      <div className='rounded-lg flex shadow overflow-hidden mb-4'   >
        <input type="text"value={pass} placeholder='password' readonly ref={passref}/>
        <button 
        onClick={copyPasswordClipboard}
        bg-blue-700 text-white px-3 shrink-0>copy</button>
      </div>
      
      <div >
        <input type="range" max={15} min={6} value={length} className='cursor-pointer' 
        onChange={(e)=>{setLength(e.target.value)}}/>
        <label htmlFor="">Length: {length}          </label>

        <input type="checkbox" defaultChecked={num} name="" id="" onChange={()=>{ setNum((prev)=>!prev)}}/>
        <label htmlFor="">Number      </label>
      <input type="checkbox" defaultChecked={char}  id="numberInput" onChange={()=>{
        setChar((prev)=>!prev);}} />
      <label htmlFor="">Character</label>
      </div>
      

    </div>
  )
}

export default App
