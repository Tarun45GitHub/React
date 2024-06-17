import React, { useState } from 'react'

let [bgColor,setBgcolor]=useState("olive")
function ColorBttn( {color}) {
    return (
        <>
        <button className='rounded-2xl' onClick={()=>setBgcolor({color})}
         style={{backgroundColor:color}}>{color}</button>
        </>
    )
}

export { ColorBttn,bgColor
}