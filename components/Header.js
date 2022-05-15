import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-center mx-20 h-[100px] border border-[#E0DFDD] border-b-black'>
        <div>
            <h2 className='text-4xl font-semibold'>Freedom</h2>
        </div>
        <div>
            <span className='text-5xl'>👨‍💻</span>
        </div>
    </div>
  )
}

export default Header