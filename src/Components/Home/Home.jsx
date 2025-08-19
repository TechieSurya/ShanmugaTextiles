import React from 'react'
import Heroslide from './Heroslide'
import Bestsell from './Bestsell'
import TimelessLook from './TimelessLook'
import Discover from './Discover'
import Offersection from './Offersection'
import TailoringAari from './TailoringAari'

const Home = () => {
  return (
    <div>
      <Heroslide/>
      <Offersection />
      <Bestsell />
      <Discover />
      <TailoringAari />
    </div>
  )
}

export default Home