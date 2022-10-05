import React from 'react'
import {TbError404} from 'react-icons/tb'

const NotFound = () => {
  return (
    <div className='grid place-items-center text-xl font-bold'>
        <TbError404 className='text-8xl'/>
        <h3>Oops Something went wrong...</h3>
        <p>Maybe the page you are looking for dosen't exist.</p>
        
    </div>
  )
}

export default NotFound