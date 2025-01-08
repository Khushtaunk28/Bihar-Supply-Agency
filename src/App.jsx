import React from 'react'
import Nav from  './services/Nav'
import Hero from './services/Hero'
import SpecializedProducts from './services/SpecializedProducts'
import BestQuality from './services/BestQuality'
import Services from './services/Services'
import CustomerReviews from './services/CustomerReviews'
import ContactUs from './services/ContactUs'
import Footer from './services/Footer'


const App = () => {
  return (
    <main className='relat<ive'>
      <Nav/>

      <section className='xl:padding-l wide:padding-r padding-b<'>
        <Hero/>
      </section>

      <section className='padding'>
       <SpecializedProducts/>
      </section>

      <section className='padding'>
        <BestQuality/>
      </section>

      <section  className='padding'>
        <Services/>
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





    </main>
  )
}

export default App