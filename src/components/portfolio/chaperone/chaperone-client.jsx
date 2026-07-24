"use client";

import About from './about'
import Color from './color'
import Designs from './designs'
import Hero from './hero'
import Typography from './typography'
import Wireframes from './wire-frames'

const ChaperoneClient = () => {
  return (
    <div className='portfolio-case-study overflow-hidden'>
      <Hero />
      <About />
      <Color />
      <Typography />
      <Wireframes />
      <Designs />
    </div>
  )
}

export default ChaperoneClient
