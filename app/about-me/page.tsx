'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ServiceSlider from '@/components/ServiceSlider'

const Page = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Update the state based on window width
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    // Initial check on mount
    handleResize();

    // // Listen for window resize events
    // window.addEventListener('resize', handleResize);

    // // Clean up the event listener on component unmount
    // return () => {
    //   window.removeEventListener('resize', handleResize);
    // };
  }, []);
  
  return (
    <div className="flex min-h-screen bg-cover bg-[#ddb02a]">
      <div className="flex flex-col gap-3 z-[10] pl-5 md:pl-40">
        <h1 className="text-[3.125rem] text-blue-600 max-w-[31.25rem] pt-[13.4rem] lg:pt-[15rem]">My Skills
         <span className="text-blue-600">.</span>
        </h1>
        <p className='max-w-[24.40rem] font-sans text-white text-[1.125rem] pb-[8.125rem] md:pb-0'>
      I mentioned my all skills from the beginning of my journey. Here, I show my skills, which I&rsquo;ve focused on. You can check them out in this card{' '}
      {isSmallScreen ? '👇' : '👉'}
    </p>
        {/* <p className='max-w-[450px] text-gray-400 text-[16px] pb-[130px] md:pb-0'>I mentioned my all skills from the beginning of my journey. Here, I shows my all skills which I give focused into it. You can check it out in this cart 👇</p> */}
      </div>
      <div className="absolute -left-36 bottom-6 rotate-12 animate-pulse duration-75">
      <Image
      src="/assets/bulb.png"
      alt='bulb'
      width={260}
      height={260}
      className='w-full h-full hidden md:block'
      />
      </div>
      <ServiceSlider />
    </div>
  )
}

export default Page