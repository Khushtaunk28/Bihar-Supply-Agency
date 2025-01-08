import React from 'react'
import { navLinks } from '../constants'
import { boltnut } from '../assets/images'
import { hamburger } from '../assets/icons'

const Nav = () => {
  return (
    
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>

      <a href="/"><img src={boltnut} width={30} height={30} alt="bsaimg" /><h1
      className='text-red-500 font-bold font-montserrat'>BSA</h1></a> 
      <ul className='flex-1 flex justify-center gap-16 max-lg:hidden'>
        {navLinks.map((links)=>(
          <li>
            <a className='text-slate-gray font-montserrat text-lg' href={links.href}>{links.label}</a>
          </li>
      ))}
      </ul>

      <div className='hidden max-lg:block'>
                <img src={hamburger} alt="hamburger" 
                width={25} height={25} />
            </div>


  
      


      



      </nav>


     
    </header>
  )
}

export default Nav