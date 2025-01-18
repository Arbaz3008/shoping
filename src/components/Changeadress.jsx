import React, { useState } from 'react'

const Changeadress = ({setAddress, setisModalopen}) => {
    const [newAddress, setnewAddress] = useState("")
    const onClose = ()=>{
        setAddress(newAddress)
        setisModalopen(false)
    }
  return (
    <div>
       <input type='text'
       placeholder='enter new adress '
       className='border p-2 w-full mb-4'
       onChange={(e)=> setnewAddress(e.target.value)}
       />
       <div className='flex justify-end'>
        <button className='bg-gray-500 text-white py-2 px-4 rounded mr-2' 
        onClick={()=>setisModalopen (false)}
        >Cancel</button>
        <button className='bg-blue-500 text-white py-2 px-4 rounded'
        onClick={ onClose}
        >Save</button>
       </div>
    </div>
  )
}

export default Changeadress