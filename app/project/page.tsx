'use client';

import ProjectSlider from '@/components/ProjectSlider'
import React, { useEffect, useState } from 'react'

const Project = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Update the state based on window width
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    // Initial check on mount
    handleResize();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 justify-center min-h-screen pt-[14rem] lg:pt-0 bg-cover bg-[#0C011A]">
      <div className="flex flex-col gap-2 z-[10] pl-5 md:pl-40">
        <h1 className="text-[50px] text-orange-600 max-w-[500px]">My Projects
         <span className="text-orange-600">.</span>
        </h1>
        <p className='max-w-[500px] font-semibold text-gray-400 text-[16px]'>I mentioned my live projects which I worked on during my job and Internship. Also, added hands-on projects here. You can check it out in this card, just click on it{' '}
        {isSmallScreen ? '👇': '👉'}</p>
      </div>
      <ProjectSlider />
    </div>
  )
}

export default Project