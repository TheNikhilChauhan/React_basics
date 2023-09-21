import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    /* useEffect(() => {
        fetch('https://api.github.com/users/TheNikhilChauhan')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    }, []) */
  return (
    <div className=' text-center m-4 bg-slate-500 text-white p-3 text-3xl '>Github followers: {data.following}
        <div className='flex m-4'>
            <img  src={data.avatar_url} alt='gitPic'/>
            <div className='flex flex-col text-orange-500 justify-start align-middle text-left ml-5 mb-5' >
                <label className='font-semibold text-black underline'>Name:</label>
                <p> {data.name}</p>
                <label className='font-semibold text-black underline'>Bio:</label>
                <p>  {data.bio}</p>
            </div>
        </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/TheNikhilChauhan')
    return res.json()
}