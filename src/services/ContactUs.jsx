import React from 'react'
import Button from '../components/Button'
const ContactUs = () => {
  return (
    <section className='max-container flex justify-between items-center
    max-lg:flex-col gap-10' id="contact-us">
        <h2 className='text-4xl leading-[68px] lg:max-w-md font-bold font-palanquin'>Reach Us Out For <span className='text-coral-red'>WHOLESALE </span> & Bulk Orders
        </h2>
    <div className='lg:max-w-[40%] w-full flex items-center
    max-sm:flex-col p-2.5 sm:border sm:border-slate-gray rounded-full
    gap-5 border s'>
        <form action="sigup" className='gap-3 flex '>
          <input type="text" placeholder="Send us Your Query" className='input' />
          <Button label="Contact NOW"/>
        </form>
        </div>
    </section>
  )
}

export default ContactUs