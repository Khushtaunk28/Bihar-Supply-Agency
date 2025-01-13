import React from 'react'
import Button from '../components/Button'
const BestQuality = () => {
  return (
   <section id='about-us' className='flex justify-between items-center w-full max-container gap-10 max-lg:flex-col'>
    <div>
    <h2 className='font-bold text-4xl font-palanquin capitalize lg:max-w-lg'>
    We Provide You
     <span className='text-coral-red'> Superior Quality </span>
      Hardware Products
    </h2>

    <p className='mt-6 info-text'>Ensuring premium durability and precision, our meticulously crafted nuts, bolts, and washers are designed to elevate your projects, providing you with unmatched strength, reliability, and exceptional value.
    <br /> <br />
Our dedication to excellence and attention to detail ensures your satisfaction.</p>
    </div>
    <div className='w-full mt-11'><Button label="View details"/></div>
    <div>
      add a single big attractive image
    </div>
   </section>
  )
}

export default BestQuality