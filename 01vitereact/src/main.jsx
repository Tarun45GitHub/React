import React from 'react'
import ReactDOM from 'react-dom/client'
import Myapp from './myapp'
// import App from './App.jsx'
 const vari=3
function Funapp(){
  return(
    <h1>Tarun kumar</h1>
  )
}

/*
const reactElement={
  type: 'a',
  props:{
      href:'https://google.com',
      target: '_blank'
  },
  children: 'Click me to visit google'
}
//it's not working because sytex is not accoding to react
*/

/*
const newElement=(
  <a href="https://google.com">click me to visit google</a>
)
*/

const newElement=React.createElement(
  "a",
  {href:'https://google.com',target:'_blank'},
  'click visit google',
  vari
)
ReactDOM.createRoot(document.getElementById('root')).render(
    // <Myapp/>
    // <App/>
    // <Funapp/>
     newElement
  
)
