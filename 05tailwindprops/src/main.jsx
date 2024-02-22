import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './components/Card.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Card productName={"Men Solid Polo Neck Cotton Blend Green T-Shirt"} price={"₹284"} imgLink={"./public/1st product.webp"} />
    <Card productName={"Solid Men Polo Neck Cotton Blend Black T-Shirt"} price={"₹399"} imgLink={"./public/3xl-mp-jet-black-metronaut-original-imagrezex8wrcxkz.webp"}/>
  </React.StrictMode>,
)
