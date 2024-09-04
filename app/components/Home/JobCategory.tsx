import Heading from '@/app/Helper/Heading'
import JobCategoryCard from '@/app/Helper/JobCategoryCard'
import React from 'react'

const JobCategory = () => {
  return (
    <div className='pt-20 pb-12'>
        <Heading mainHeading="Popular Job Categories" subHeading="2020 jobs live - 293 added today.     " />
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[4rem] gap-[3rem] items-center'>
            <div>
                <JobCategoryCard image= "/icon1.png" category="Finance" openPosition="23" />
            </div>
            <div>
                <JobCategoryCard image= "/icon2.png" category="Marketing" openPosition="23" />
            </div>
            <div>
                <JobCategoryCard image= "/icon3.png" category="Design" openPosition="23" />
            </div>
            <div>
                <JobCategoryCard image= "/icon4.png" category="Developement" openPosition="23" />
            </div>
            <div>
                <JobCategoryCard image= "/icon5.png" category="Human Resource" openPosition="23" />
            </div>
            <div>
                <JobCategoryCard image= "/icon6.png" category="Automotive Jobs" openPosition="23" />
            </div>
            <div>
                <JobCategoryCard image= "/icon7.png" category="Customer Services" openPosition="23" />
            </div>
            <div>
                <JobCategoryCard image= "/icon8.png" category="Health and Care" openPosition="23" />
            </div>
            <div>
                <JobCategoryCard image= "/icon9.png" category="Project Management" openPosition="23" />
            </div>
        </div>

    </div>
  )
}

export default JobCategory