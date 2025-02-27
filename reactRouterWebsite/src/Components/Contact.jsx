import React from 'react'

function Contact() {
    return (
        <>
        <h1 className='text-center text-3xl font-extrabold text-emerald-700 underline my-14'>Contact Us</h1> 
        <div className='flex my-10 flex-wrap'>
          <img 
          className='w-200 h-150 p-8  '
          src="./map.jpg" alt="homePicture"  />
          
          
           <p className=' mx-10 my-10 text-xl'>
                📍 <strong>JM Tech Institute</strong> <br/>
                456 XYZ Road, ABC City <br/>
                📞 +1 987 654 3210 <br/>
                📧 contact@tech.com
                <form className='flex flex-col'>

                    <h1 className='font-bold text-blue-950 mt-10 text-3xl'>For Your Queries:</h1>
                <input
                className='border my-4 w-100 p-2 rounded'
                placeholder='Enter Your Email'
                 type="email" />
                 <textarea
                 placeholder='Ask your doubt'
                 className='my-4 border p-2 rounded'
                  name="" id="" cols="20" rows="6"></textarea>
                 <button className='bg-blue-600 text-white p-2 rounded ml-2'>Ask Your Query</button>
               </form>
              </p>
            
       </div>
       </>
       
    )
}

export default Contact
