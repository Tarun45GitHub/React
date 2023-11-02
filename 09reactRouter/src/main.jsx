import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
// const router= createBrowserRouter([
//   {
//     path: '/',
//     element:<App/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"About",
//         element:<About/>
//       },
//       {
//         path:"Contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])
 
const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
      <Route path='' element={<Home/>} />
      <Route path='About' element={<About/>} />
      <Route path='Contact' element={<Contact/>} />
      <Route path='User/:userid' element={<User/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
