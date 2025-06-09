import React from 'react';
import Button from '../components/Button';

const BestQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center w-full max-container gap-10 max-lg:flex-col px-6 py-16"
    >
      {/* LEFT: Text Content */}
      <div className="flex-1">
        <h2 className="font-bold text-4xl font-palanquin capitalize lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Superior Quality </span>
          Hardware Products
        </h2>

        <p className="mt-6 info-text text-slate-gray leading-7 max-w-xl">
  With over <strong>60 years</strong> of <strong>legacy</strong>, <strong>trust</strong>, and <strong>excellence</strong>, we are proud to be one of <strong>Bihar’s</strong> most reliable hardware suppliers — serving both <strong>government institutions</strong> and <strong>private customers</strong> alike. From all types of <strong>nut bolts</strong>, <strong>fasteners</strong>, <strong>screws</strong>, <strong>rubber sheets</strong>, <strong>C channels</strong>, to <strong>brass</strong> and <strong>gas jalis</strong>, we offer a complete range of quality hardware solutions at some of the most <strong>competitive rates</strong> in the city. Our trusted network extends throughout <strong>Bihar</strong> — both in <strong>Patna</strong> and across the state — built on a foundation of <strong>consistency</strong>, <strong>affordability</strong>, and <strong>unmatched customer satisfaction</strong>.
          <br />
          <br />
          Our dedication to excellence and attention to detail ensures your
          satisfaction.
        </p>

        <div className="w-full mt-11">
          <a href="#products">
          <Button label="View details" />
          </a>
        </div>
      </div>

      {/* RIGHT: Image */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src="/BsaPics/nutbolthighqualityimg.jpg"
          alt="High Quality Nut and Bolt"
          className="w-full max-w-md h-auto object-contain rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default BestQuality;
