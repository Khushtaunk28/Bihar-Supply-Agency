import React from 'react';
import Slider from 'react-slick';
import { productCards } from '../constants';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductCard = ({ name, imgURL }) => (
  <div className="bg-white rounded-2xl shadow-xl p-4 w-72 mx-auto transition-transform hover:scale-105 duration-300">
    <div className="h-52 w-full overflow-hidden rounded-lg mb-4">
      <img
        src={imgURL}
        alt={name}
        className="h-full w-full object-cover"
      />
    </div>
    <h4 className="font-bold text-xl text-center text-gray-800">{name}</h4>
  </div>
);

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const priority = ['Bolts', 'Nuts', 'Washer'];
  const prioritizedProducts = [
    ...productCards.filter(p => priority.some(keyword => p.name.toLowerCase().includes(keyword.toLowerCase()))),
    ...productCards.filter(p => !priority.some(keyword => p.name.toLowerCase().includes(keyword.toLowerCase())))
  ];

  return (
    <section className='max-container flex flex-col items-center py-12'>
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
        Our <span className="text-coral-red">Products</span>
      </h2>
      <div className="w-full">
        <Slider {...settings}>
          {prioritizedProducts.map((productCards, idx) => (
            <ProductCard key={idx} {...productCards} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Services;