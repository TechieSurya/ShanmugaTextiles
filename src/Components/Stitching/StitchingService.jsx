import React from 'react'
import PerfectStitch from './PerfectStitch'
import CustomStitchingSection from './CustomStitchingSection'
import StitchingExperience from './StitchingExperience'
import CustomerCarousel from './CustomerCarousel'
import { Router } from 'react-router-dom'

const StitchingService = () => {
  return (
    <div className='font-family'>
        <PerfectStitch />
        <CustomStitchingSection />
        <StitchingExperience />
        <CustomerCarousel />
    </div>
    
  )
}

export default StitchingService