import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Myapp from './mytag.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Myapp/>
    {/* <h1>First react app using vite frame</h1> */}
  </React.StrictMode>,
)
