import React from 'react'
import { navLinks } from '../constants'

const Nav = () => {
  return (
    
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>

      <a href=""><img src="" alt="bsaimg" /></a> 
      <ul className='flex-1 flex justify-center gap-16'>
        {navLinks.map((links)=>(
          <li>
            <a className='text-slate-gray font-montserrat text-lg' href={links.href}>{links.label}</a>
          </li>
      ))}
      </ul>

      {/* hamburger */}


  
      


      



      </nav>


     
    </header>
  )
}

export default Nav