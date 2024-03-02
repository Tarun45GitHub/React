import React, { useState } from 'react'
import { useContext } from 'react';
import userContext from '../context/UserContext';

function Login() {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const {setUser}=useContext(userContext)
    const handelSubmit=(e)=>{
        e.preventDefault()
        console.log(username);
        setUser({username,password})
    }
    return (
        <>
        <div style={{border:"1px solid black",margin:"5px",padding:"5px"}}>
            <input type="email" placeholder='username'
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            />
            <br />
            <input type="password" name="" id="" placeholder='password' 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <br /> <br />
            <button type="submit" onClick={handelSubmit}>submit</button>
        </div>
        </>
    )
}

export default Login
