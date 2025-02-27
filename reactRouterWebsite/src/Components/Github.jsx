import React, { useEffect, useState } from 'react'

function Github() {
    const [info, setInfo] = useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users/jehaanmandal")
        .then((res)=> res.json())
        .then((info)=> setInfo(info))
        
    },[])
    console.log(info);

    return (
        <div className='text-center text-white '>
         <img 
         className='mx-auto'
         src={info.avatar_url} alt="" />
         <h1 className='bg-gray-600 p-2 my-4'>Name: {info.name}</h1>
         <h1 className='bg-gray-600 p-2 my-4'>Username: {info.login}</h1>
        </div>
    )
}

export default Github
