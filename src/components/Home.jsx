import React from 'react'
import Products from './Products'
import ContactUs from './ContactUs';
import Hero from './Hero';
import Featured from './Featured';

const Home = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <Products />
      <ContactUs />
    </div>
  )
}

export default Home