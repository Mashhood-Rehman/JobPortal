"use client"
import React from 'react'
import Hero from './Hero'
import JobCategory from './JobCategory'
import FeaturedJobs from './FeaturedJobs'
import ScrollToTop from '@/app/Helper/ScrollToTop'
const Home = () => {
  return (
    <div><Hero/>
    <JobCategory/>
    <FeaturedJobs />
    <ScrollToTop/>
    </div>
  )
}

export default Home