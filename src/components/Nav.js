import React from 'react'

// import data
import { navData } from '../data'

const Nav = () => {
  return (
    <nav className='flex items-center'>
      <ul className='flex gap-x-6'>
        {navData.map((item, index) => {
          return (
            <li
              key={index}
              className='border-b-2 border-transparent hover:border-blue transition-all duration-300'
            >
              <a href={item.href}>{item.name}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
