import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className=' text-center font-bold text-xl bg-slate-600 p-4'>User: {userid} </div>
  )
}

export default User