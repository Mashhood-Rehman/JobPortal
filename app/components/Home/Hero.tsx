import React from 'react';
import HeroImage from "@/public/hero.svg";
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
      <div className='w-[100%] h-[60vh] flex flex-col items-center justify-center'>
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[2rem]'>
          {/* content */}
          <div className='text-[25px] sm:text-[35px] lg:text-[40px] xl:text-[50px] text-[#05264e] leading-[3rem] lg:leading-[4rem] font-extrabold'>
            <h1>The <span className='text-blue-500'>Easiest Way </span> <br /> To Get Your New Job</h1>
            <p className='text-[#4f5e64] text-[16px] md:text-[18px] leading-[1.5rem]'>
              Each month, more than 3 million job seekers turn to websites in
              their search for work, making over 140,000 applications every
              single day.
            </p>
            {/* searchbox */}
            <div className='mt-[1.5rem] flex w-full lg:w-[80%]'>
              <input
                className='w-[65%] sm:w-[70%] lg:w-[75%] px-3 py-3 outline-none rounded-l-md bg-gray-200'
                type="text"
                placeholder='Search Job.'
              />
              <button
                className='w-[35%] sm:w-[30%] lg:w-[25%] text-nowrap px-3 py-3 bg-blue-500 text-white rounded-r-md hover:bg-blue-700 transition-all duration-300'
              >
                Search
              </button>
            </div>
          </div>
          {/* image */}
          <div className='hidden lg:block'>
            <Image src={HeroImage} alt="hero" width={700} height={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
