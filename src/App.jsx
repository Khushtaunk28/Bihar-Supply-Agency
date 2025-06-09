import React from 'react'
import Nav from  './sections/Nav'
import Hero from './sections/Hero'
import SpecializedProducts from './sections/SpecializedProducts'
import BestQuality from './sections/BestQuality'
import Services from './sections/Services'
import CustomerReviews from './sections/CustomerReviews'
import ContactUs from './sections/ContactUs'
import Footer from './sections/Footer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <main className='relat<ive'>
      <Nav/>

      <section className='xl:padding-l wide:padding-r padding-b<'>
        <Hero/>
      </section>
       <section  className='padding'>
        <Services/>
      </section>

      {/* <section className='padding'>
       <SpecializedProducts/>
      </section> */}

      <section className='padding'>
        <BestQuality/>
      </section>


      <section className='padding bg-pale-blue'>
        <CustomerReviews/>
      </section>

      <section className='padding-x sm:py-32 py-16 w-full'>
      <ContactUs/>
      </section>

      <section className='text-white bg-black padding-x padding-t pb-8'>
        <Footer/>
      </section>

     {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services/>} />
      </Routes>
    </BrowserRouter> */}
     </main>
  )
}

export default App