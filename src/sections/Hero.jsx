import React from 'react';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { statistics } from '../constants';
import Counter from '../components/Counter'; // <-- Create this file from earlier step
// import heroImage from '../assets/images/hero-product.png'; // <-- Replace with your image path

const Hero = () => {
  return (
    <section
      id='home'
      className='w-full flex flex-col justify-center min-h-screen gap-10 max-container'
    >
      {/* Text + CTA Section */}
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-red-500'>Our Expertise</p>

        <h1 className='mt-10 text-8xl font-palanquin font-bold max-sm:text-[72px] max-sm:leading-[82px]'>
          The Industry Standard
          <span className='text-coral-red'> Best Quality </span> Products
        </h1>

        <p className='font-montserrat text-slate-gray mt-6 text-lg leading-8 mb-14 sm:max-w-sm'>
          Premium nuts, bolts, and washers for all your hardware needs
        </p>

        <Button label='Explore Now' iconURL={arrowRight} />
      </div>

      {/* Animated Statistics Section */}
      <div className='flex justify-start items-start flex-wrap padding w-full mt-20 gap-16'>
        {statistics.map((stat, index) => (
          <div key={index} className='text-center'>
            <Counter end={stat.number} label={stat.label} />
          </div>
        ))}
      </div>

      {/* Big Product Image */}
      <div className='w-full flex justify-center mt-12'>
        {/* <img
          src={heroImage}
          alt='Featured Product'
          className='max-w-4xl w-full object-contain rounded-3xl shadow-lg'
        /> */}
        <p>big image</p>
      </div>
    </section>
  );
};

export default Hero;
