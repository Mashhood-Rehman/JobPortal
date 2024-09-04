import Heading from '@/app/Helper/Heading'
import JobCard from '@/app/Helper/JobCard'
import JobData from '@/public/data'
import Link from 'next/link'
import React from 'react'

const FeaturedJobs = () => {
  return (
    <div className='pt-20 pb-12'>
        <Heading mainHeading='Featured Jobs ' subHeading='Know your Worth and Find the job that quality your life'/>
        <div className=' mt-12 w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12'>{JobData.map((job)=> (
            <Link href={`/job/jobdetails/${job.id} ` } key={job.id}>
                    <JobCard job={job}/>


            </Link>
        ))}
        
        </div>

        <Link href="/job/alljobs">
        <div className='text-center mt-[3rem]'>
            <button className='px-8 py-2 font-semibold bg-blue-700 hover:bg-blue-900 transition-all duration-300 rounded-lg text-white '>
                View All Jobs</button></div></Link>
    </div>
  )
}

export default FeaturedJobs