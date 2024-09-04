// "use client"

// import React from 'react'
// import LogoImage from "@/public/logo.png"
// import Link from 'next/link'
// import Image from 'next/image'
// import { getServerSession } from 'next-auth'


// const Navbar =   () => {
//    const session =  getServerSession()
//   return (
//     <div className='h-[13vh] overflow-hidden shadow-md'>
//         <div className='w-[90%] md:w-[80%] h-[100%] mx-auto flex items-center  justify-between'>
//              {/* logo */}
//              <div className=' w-[150px] h-[150px]  md:w-[250px] md:h-[250px]'>
//                 <Link href="/">
//                 <Image src={LogoImage} width={250} height={250} className='w-[100%] h-[100%]' alt='Logo'></Image>
//                 </Link>

//              </div>


//                 <div className=' flex items-center space-x-4'>
//                     <Link href="/signup">
//                     <button className=' px-4 py-1.5 text-[14px] sm:text-[16px] sm:px-6 sm:py-2 bg-blue-600 font-semibold text-white rounded-lg hover:bg-blue-800 transition-all duration-300 '>
//                         Sign Up
//                         </button></Link>

//                 </div>


//         </div>
//         </div>
//   )
// }

// export default Navbar












"use client";

import React from 'react';
import LogoImage from "@/public/logo.png";
import Link from 'next/link';
import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';
import User from '@/app/Helper/User';

const Navbar = () => {
  const { data: session, status } = useSession();
console.log(session)
  return (
    <div className='h-[13vh] overflow-hidden shadow-md'>
      <div className='w-[90%] md:w-[80%] h-[100%] mx-auto flex items-center justify-between'>
        {/* logo */}
        <div className='w-[150px] h-[150px] md:w-[250px] md:h-[250px]'>
          <Link href="/">
            <Image src={LogoImage} width={250} height={250} className='w-[100%] h-[100%]' alt='Logo' />
          </Link>
        </div>

        <div className='flex items-center space-x-4'>
          {status === 'authenticated' ? (
            <>
                <User session={session}/>

                <button className=' px-4 py-1.5 text-[14px] sm:text-[16px] sm:px-6 sm:py-2 bg-orange-600 font-semibold text-white rounded-lg hover:bg-blue-800 transition-all duration-300 '>
                                     Post a Job
                                     </button>
              {/* <button
                onClick={() => signOut()}
                className='px-4 py-1.5 text-[14px] sm:text-[16px] sm:px-6 sm:py-2 bg-red-600 font-semibold text-white rounded-lg hover:bg-red-800 transition-all duration-300'
              >
                Sign Out
              </button> */}
            </>
          ) : (
            <div className=' flex items-center space-x-4'>
                     <Link href="/signup">
                               <button className=' px-4 py-1.5 text-[14px] sm:text-[16px] sm:px-6 sm:py-2 bg-blue-600 font-semibold text-white rounded-lg hover:bg-blue-800 transition-all duration-300 '>
                                     Sign Up
                                     </button></Link>
            
                             </div>
            
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
