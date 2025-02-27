import React from 'react'


function Home() {
    return (
        <div className=''>
       
        <marquee direction="left">
           <h1 className="text-4xl flex text-cyan-600 font-mono mx-10 my-7">Welcome to JM <sup>Website</sup></h1>
           </marquee> 
           <h1 className='text-center text-3xl font-extrabold text-emerald-700 my-2 underline'>Home</h1> 
        <div className='flex'>
         <div className=''>
           <img 
           className='w-350 h-100 p-8  '
           src="./random.jpg" alt="homePicture"  />
           
           </div>
           <p className='flex text-2xl mr-4 w-full justify-center my-10 px-3 font-extrabold text-red-500  font-mono '>React Router DOM is a powerful library for handling client-side navigation in React applications. With React Router, the Home page can be dynamically rendered without reloading, ensuring a smooth user experience.    </p>
        </div>
        </div>
    )
}

export default Home
