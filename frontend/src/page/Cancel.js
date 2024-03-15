import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cancel = () => {
  const navigate = useNavigate()
useEffect(()=>{ setTimeout(()=>{navigate("/")},6000)},[])
  return (
    <div className='bg-red-200 w-full max-w-md m-auto h-36 flex justify-center items-center font-semibold text-lg'>
        <p>Payment is Cancel</p>
    </div>
  )
}

export default Cancel