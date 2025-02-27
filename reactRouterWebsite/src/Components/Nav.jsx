import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Nav() {
    return (
        <div className='sticky'>
            <ul className='flex gap-7 my-3 justify-center flex-wrap text-2xl mx-4'>
            <li className='text-cyan-800 font-bold mr-10'>
                <Link to= "/">JM</Link>
           </li>
            <li>
            <NavLink to= ""
            className={({isActive})=> `font-medium text-blue-700 ${isActive?"text-red-500": "text-green-600"}`}
            >Home</NavLink>
            </li>
            <li >
            <NavLink 
            className={({isActive})=> `font-medium text-blue-700 ${isActive?"text-red-500": "text-green-600"}`}
            to = "/about">About</NavLink>
            </li>
            <li>
             <NavLink to= "/contact"
            className={({isActive})=> `font-medium text-blue-700 ${isActive?"text-red-500": "text-green-600"}`} >Contact Us</NavLink>
            </li>
            <li>
             <NavLink to= "/github"
            className={({isActive})=> `font-medium text-blue-700 ${isActive?"text-red-500": "text-green-600"}`} >Github</NavLink>
            </li>
          

            <input
            className='border p-1 w-1/4 rounded-lg'
             type="text" />
             <button className='bg-red-500 text-white text-lg p-2 w-30 rounded-lg hover:bg-red-800 cursor-pointer'>Search</button>
            </ul>
        </div>
    )
}

export default Nav
