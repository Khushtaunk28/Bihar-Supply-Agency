// import React from 'react'
// import { useState } from 'react'
// import { toast } from 'react-toastify'
// import axios from 'axios'
// const ContactUs = () => {

//   const[formData,setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     query: ''
//   })

//   const handleChange = (e) => {
//     const {name,value} = e.target;
//     setFormData({ ...formData, [name]: value }) 
//   };




//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     try{
//       const response=await axios.post('http://localhost:8080/public/contact-us',formData,{
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })
//       toast.success('Form Submitted Successfully')
//       console.log(response)
//     }
//     catch(error){
//       toast.error('Something went wrong')
//       console.log(error)
//     }
//   }
//   return (
//     <section className='max-container flex justify-between items-center
//     max-lg:flex-col gap-10' id="contact-us">
//         <h2 className='text-4xl leading-[68px] lg:max-w-md font-bold font-palanquin'>Reach Us Out For <span className='text-coral-red'>WHOLESALE </span> & Bulk Orders
//         </h2>
//    <div className='max-w-md flex flex-col gap-4 pt-6 border-2 border-coral-red rounded-s-xl mt-4 p-4 '> 
//    <form action='contactus' onSubmit={handleSubmit}>
//     <div className="mb-4">
//       <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name:</label>
//       <input
//         type="text"
//         id="name"
//         name='name'
//         value={formData.name}
//         onChange={handleChange}
//         placeholder="Mr xyz" required
//         className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-300 focus:border-red-300"
//       />
//     </div>
//     <div className="mb-4">
//       <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email:</label>
//       <input
//         type="email"
//         id="email"
//         name='email'
//         value={formData.email}
//         onChange={handleChange}
//         placeholder="xyz@bsa.com" required
//         className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-300 focus:border-red-300"
//       />
//     </div>
//     <div className="mb-4">
//       <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Phone:</label>
//       <input
//         type="tel"
//         id="phone" 
//         name='phone'
//         value={formData.phone}
//         onChange={handleChange}
//         placeholder="+91XXXXXXXXXX" required
//         className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-300 focus:border-red-300"
//       />
//     </div>
//     <div className="mb-4">
//       <label htmlFor="query" className="block text-lg font-medium text-gray-700">Query:</label>
//       <textarea
//         id="query"
//         placeholder="Do you sell this size nut-bolt?" required
//         rows="4"
//         name='query'
//         value={formData.query}
//         onChange={handleChange}
//         className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-300 focus:border-red-300"
//       ></textarea>
//     </div>
//     <div className="text-center">
//       <button
//         type="submit"
//         className="px-6 py-2 text-white bg-red-400 rounded-full shadow-lg hover:bg-red-500 hover:scale-105 transform transition-all duration-300"
//       >
//         Submit
//       </button>
//     </div>
//   </form>
//    </div>
//     </section>
//   )
// }

// export default ContactUs