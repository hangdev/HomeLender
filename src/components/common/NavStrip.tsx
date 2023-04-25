import React from 'react'

const NavStrip: React.FC  = () => {
  return (
    <>
      <div className='bg-green-400 border-b border-green-500 shadow-xl sticky top-0 z-30'>
        <div className='max-w-7x1 mx-auto grid grid-cols-4 px-6 py-3 sm:px-4 lg:px-6'>
          <div className='flex items-start'>
            <h1 className='text-2xl'>HomeLend</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavStrip