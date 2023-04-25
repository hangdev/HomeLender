import React from 'react'

const Footer: React.FC = () => {
  const year = new Date().getUTCFullYear();
  return (
    <>
      <footer className='bg-green-400 text-gray-600 py-3 flex justify-center
        border-t border-green-500'>
        <div>
          &copy; {year} HomeLend All rights reserved
        </div>
      </footer>
    </>
  )
}

export default Footer