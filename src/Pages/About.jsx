import React from 'react'

const About = () => {
  return (
    <div className='container mx-auto px-4 flex flex-col'>
        <div className='text-center text-3xl underline font-bold mb-4'>About</div>
        <div className='text-center'>A react app that lets you search for github users and provide a summary for a specific user.</div>
        <div className='text-center'>Version : 1.0.0</div>
    </div>
  )
}

export default About