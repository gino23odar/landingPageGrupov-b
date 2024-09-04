import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-center items-center w-full min-h-[60lvh] bg-conretewhite px-1 md:px-6 mb-2'>
      <div className="relative w-full h-full">
        <div className="absolute inset-0 z-20 bg-[url('/textures/bricks.jpg')] opacity-15 mix-blend-soft-light"></div>
        <div></div>
      </div>
    </div>
  )
}

export default Header