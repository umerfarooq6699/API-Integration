import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='w-full h-[60px] bg-[#97D5F1] flex justify-between items-center px-3 md:px-9'>
        <h1 className='text-white font-[500] text-xl'>API Integration</h1>
        <div>
          <Link to="/">
            <button className='rounded hidden md:inline px-3 py-[6px] text-white font-[500] bg-[#64B4D4]'>Create Post</button>
          </Link>
          <Link to="/allpost">
            <button className='rounded px-3 py-[6px] text-white ml-3 font-[500] bg-[#64B4D4]'>All Posts</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar