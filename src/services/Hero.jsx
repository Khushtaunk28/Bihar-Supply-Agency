import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { statistics } from '../constants'


const Hero = () => {
  return (
    <section id='home'
    className='w-full flex flex-col justify-center min-h-screen gap-10 max-container'>

      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full
      max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-red-500'>Our Expertise</p>

        <h1 className='mt-10 text-8xl font-palanquin font-bold max-sm:text-[72px]
        max-sm:leading-[82px]'>The Industry Standard 
          <span className='text-coral-red'> Best Quality </span> Products</h1>

         <p className='font-montserrat text-slate-gray info-text mt-6 text-lg leadinf-8 mb-14 sm:max-w-sm'>Premium nuts, bolts, and washers for all your hardware needs</p> 

         <Button label="Explore Now" iconURL={arrowRight}/>
      </div>

      <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16 '>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        Show big image of product




    </section>
  )
}

export default Hero