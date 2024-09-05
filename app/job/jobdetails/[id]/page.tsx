"use client"
import ApplyButton from '@/app/Helper/ApplyButton'
import JobCard from '@/app/Helper/JobCard'
import JobData from '@/public/data'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const JobDetails =  ({params}:{
    params:{id:string}
}) => {

    const firstFourJobs = JobData.slice(0,4)
    const singleJob =JobData.find((job)=> (
        job.id.toString() === params.id
    ))
  const { data: session, status } = useSession();
  

    return (
    <div className=' mt-20 mb-12'>
        <div className='block sm:flex  items-center justify-center w-[80%] mx-auto'>
            <div className='flex-[0.7]'>
                <JobCard job={singleJob!}/>
            </div>
            {status === 'authenticated' && <ApplyButton/>}
            {status === 'unauthenticated' && <Link href="/signup"> 
            <button className=' px-8 py-3 bg-emerald-600 rounded-lg text-white'>

            Sign Up  To Apply
            </button>
             </Link>}

        </div>

        <div className='mt-16 w-[80%] mx-auto'>
            <h1 className='text-[20px]  font-semibold'>Job Description</h1>
            <p className='mt-4 text-black text-opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem esse quod earum eum. Beatae ipsam explicabo, aspernatur repellat neque veniam.</p>
            <h1 className='text-[20px] mt-8 font-semibold'>Key Responsibilities</h1>
            <p className='mt-4 text-black text-opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem esse quod earum eum. Beatae ipsam explicabo, aspernatur repellat neque veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos recusandae cumque repellendus id accusantium ad adipisci totam nobis optio incidunt.</p>
            <h1 className='text-[20px] mt-8 font-semibold'>Skills</h1>
            <ul>
                <li>React Js</li>
                <li>Next Js</li>
                <li>Tailwind CSS</li>
                <li>TypeScript</li>
                <li>Next Auth </li>
            </ul>

            <h1 className='text-[20px] mt-8 font-semibold'>Related Jobs</h1>

            <div className='mt-4'>
 {
    firstFourJobs.map((job) => (
        <Link href={`/job/jobdetails/${job.id}`} key={job.id} className='space-y-6'><JobCard job={job}/></Link>
    ))
 }
        </div>


       
        </div>
    </div>
  )
}

export default JobDetails