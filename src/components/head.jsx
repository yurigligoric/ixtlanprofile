import React from 'react'
import Logo from '../img/logo1.jpg'

const Head = () => {
  return (
    <div className="flex flex-col items-center justify-center" style={{backgroundColor: '#191D88'}}>
      <h1 className='text-4xl text-white font-bold  mt-12 text-center'>Ixtlan Banawa</h1>
      <p className='text-white mt-5 text-center text-lg'>"To empower the voice of my fellow Grade 7 students by creating a platform for</p>
      <p className='text-white mt-2 text-center text-lg'>open discussion, feedback and collaborative learning experience."</p>
      <img src={Logo} height="125" width="125" className='rounded-full mt-3 mb-3' />

    </div>
  )
}

export default Head