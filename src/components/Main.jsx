import React from 'react'
import About from './About';
import Eco from './Eco';
import Hero from './Hero';
import News from './News';
import Offer from './Offer';
import Products from './Products';
import Subscribe from './Subscribe';
import Testimonial from './Testimonial';

const Main = () => {
  return (
    <main className='main'>
        <Hero/>
        <About/>
        <Products/>
        <Testimonial/>
        <Offer/>
        <Eco/>
        <News/>
        <Subscribe/>
    </main>
  )
}

export default Main