import React from 'react'
import Button from '../components/Button'
const ContactUs = () => {
  return (
    <section className='max-container flex justify-between items-center
    max-lg:flex-col gap-10' id="contact-us">
        <h2 className='text-4xl leading-[68px] lg:max-w-md font-bold font-palanquin'>Reach Us Out For <span className='text-coral-red'>WHOLESALE </span> & Bulk Orders
        </h2>
   <div className='max-w-md flex flex-col gap-4 pt-6 border-2 border-coral-red rounded-s-xl mt-4 p-4 '> 
   <form>
    <div class="mb-4">
      <label for="name" class="block text-lg font-medium text-gray-700">Name:</label>
      <input
        type="text"
        id="name"
        placeholder="Mr xyz" required
        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-300 focus:border-red-300"
      />
    </div>
    <div class="mb-4">
      <label for="email" class="block text-lg font-medium text-gray-700">Email:</label>
      <input
        type="email"
        id="email"
        placeholder="xyz@bsa.com" required
        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-300 focus:border-red-300"
      />
    </div>
    <div class="mb-4">
      <label for="phone" class="block text-lg font-medium text-gray-700">Phone:</label>
      <input
        type="tel"
        id="phone" 
        placeholder="+91XXXXXXXXXX" required
        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-300 focus:border-red-300"
      />
    </div>
    <div class="mb-4">
      <label for="query" class="block text-lg font-medium text-gray-700">Query:</label>
      <textarea
        id="query"
        placeholder="Do you sell this size nut-bolt?" required
        rows="4"
        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-300 focus:border-red-300"
      ></textarea>
    </div>
    <div class="text-center">
      <button
        type="submit"
        class="px-6 py-2 text-white bg-red-400 rounded-full shadow-lg hover:bg-red-500 hover:scale-105 transform transition-all duration-300"
      >
        Submit
      </button>
    </div>
  </form>
   </div>
    </section>
  )
}

export default ContactUs