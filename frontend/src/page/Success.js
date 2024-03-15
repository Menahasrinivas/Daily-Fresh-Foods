import React,{ useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Success = () =>{
  const navigate = useNavigate()
useEffect(()=>{ setTimeout(()=>{navigate("/")},3000)},[])
  return (
    <div className='bg-green-200 w-full max-w-md m-auto h-36 flex justify-center items-center font-semibold text-lg'>
        <p>Payment is Successfully</p>
    </div>
  )
}

export default Success