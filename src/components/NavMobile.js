import React from 'react'

// import data
import { navData } from '../data'

// import icons
import { CgClose } from 'react-icons/cg'

const NavMobile = ({ setNavMobile }) => {
  return (
    <nav className='lg:hidden bg-violet h-full top-0 bottom-0 right-0 w-80 flex justify-center items-center'>
      <div className='absolute top-2 left-2 cursor-pointer'>
        <CgClose className='text-3xl' onClick={() => setNavMobile(false)} />
      </div>

      <ul className='text-xl flex flex-col gap-y-8'>
        {navData.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.href}>{item.name}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavMobile
