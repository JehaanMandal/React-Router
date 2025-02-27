import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Root from './Components/Root.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Github from './Components/Github.jsx'

const JRouter = createBrowserRouter(
  createRoutesFromElements(
    
      <Route path='/' element = {<Root/>}>
        <Route path = "" element ={<Home/>}/>
        <Route path = "about" element ={<About/>}/>
        <Route path = "contact" element ={<Contact/>}/>
        <Route path = "github" element ={<Github/>}/>

      </Route>
   
     
    
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={JRouter}/>
  </StrictMode>,
)
