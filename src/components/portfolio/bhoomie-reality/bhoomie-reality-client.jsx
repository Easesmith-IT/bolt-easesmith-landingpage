"use client";

import React from 'react'
import Hero from './hero'
import About from './about'
import Typography from './typography'
import Screens from './screens'

const BhoomieRealityClient = () => {
  return (
    <div className='overflow-hidden'>
        <Hero />
        <About />
        <Typography />
        <Screens />
    </div>
  )
}

export default BhoomieRealityClient