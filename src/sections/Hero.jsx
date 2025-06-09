import React from 'react';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { statistics } from '../constants';
import { Link } from 'react-router-dom';
import Counter from '../components/Counter';

const Hero = () => {
  return (
    <section id="home" className="w-full flex flex-col xl:flex-row pt-28 xl:pt-32">
      {/* LEFT: Text Content */}
      <div className="xl:w-1/2 w-full flex flex-col justify-center px-6 xl:px-24 pb-10">
        <p className="text-xl font-montserrat text-red-500">Our Expertise</p>

        <h1 className="mt-10 text-4xl xl:text-5xl font-bold font-palanquin leading-tight">
          The Industry Standard
          <span className="text-coral-red"> Best Quality </span> Products
        </h1>

        <p className="font-montserrat text-slate-gray mt-6 text-lg leading-8 mb-10 max-w-md">
          Premium nuts, bolts, and washers for all your hardware needs
        </p>


   <a href="#products">
  <Button label="Explore Now" iconURL={arrowRight} />
</a>



      </div>

      {/* RIGHT: Image and Counter */}
      <div className="xl:w-1/2 w-full flex flex-col items-center">
        {/* IMAGE */}
        <div className="w-full h-[70vh] xl:h-[85vh] px-6 overflow-hidden">
          <img
            src="/BsaPics/FrontBigPic.jpg"
            alt="Featured Product"
            className="w-full h-full object-cover rounded-none xl:rounded-l-3xl shadow-lg"
          />
        </div>

        {/* COUNTER BELOW IMAGE */}
        <div className="flex flex-wrap justify-center items-start gap-10 px-6 py-8 bg-white w-full">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <Counter end={stat.number} label={stat.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
