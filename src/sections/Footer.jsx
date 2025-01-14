import React from 'react'
import { boltnut } from '../assets/images'
import { copyrightSign } from '../assets/icons'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    
    <footer className='max-container'>
      





    <div className='flex justify-between items-start
    gap-20 flex-wrap max-lg:flex-col'>
      <div className='flex flex-col items-start'>
        <a href="/">
          <img src={boltnut} alt="footerlogo"
          width={150} height={46} />
        </a>
        {/* <div className='flex items-center gap-5 mt-8'>
          {socialMedia.map((icon) => (
            <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
              <img src={icon.src} alt={icon.alt} width={24} height={24} />
            </div>
          ))}
        </div> */}
      </div>

      <div className='flex flex-1 justify-between
      lg-gap-10 gap-20 flex-wrap'>
        {footerLinks.map((section) => (
          <div key={section}
          ><h4 className='text-white font-montserrat text-2xl leading-normal font-medium mb-6'>{section.title}</h4>
          <ul>{section.links.map((link) => (
            <li key={link.name} className='mt-3 text-white-400 font-montserrat text-base leading-normal 
            hover:text-slate-gray cursor-pointer'>
              <a className='text-white-400'>{link.name}</a>
            </li>
          ))}
          </ul>
          </div>  
        ))}
      </div>
    </div>

    <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col
    max-sm:items-center'>
      <div className='flex flex-1 gap-2 justify-start items-center font-montserrat cursor-pointer'>
        <img src={copyrightSign}  alt="copyright" 
        width={20} height={20} className='rounded-full m-0'/>
        <p className='text-white-400 font-montserrat text-base leading-7'>2025 Bihar Supply Agency. All Rights Reserved</p>
      </div>
      {/* <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.884137449571!2d85.13924180985954!3d25.608766014815718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed585dcbfe5ccd%3A0xc99658efac2e1f54!2sBihar%20Supply%20Agency!5e0!3m2!1sen!2sin!4v1736418054990!5m2!1sen!2sin" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div> */}
      <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
    </div>

    



   </footer>
  )
}

export default Footer