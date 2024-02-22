import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Myapp from './mytag.jsx'

const CoustomTag=
  (<a href="https://google.com">goto google</a>)


const reactElement=React.createElement(
  'a',{href:"https://google.com",target:"-blank"},"visit google"
)
ReactDOM.createRoot(document.getElementById('root')).render(
  // CoustomTag
  reactElement
)
