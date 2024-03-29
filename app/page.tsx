'use client'
import Particle from '@/components/Particle'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const [isSmallScreen, setIsSmallSCreen] = useState(false)
  
  useEffect(() => {
    const handleResize = () => {
      setIsSmallSCreen(window.innerWidth < 768);
    };
    handleResize();
  }, [])
  
  const textVariants = {
    initial: {
      x:-500,
      opacity: 0,
    },
    animate: {
      x:0,
      opacity: 1,
      transition:{
        duration:1,
        delay:0.8,
        staggerChildren:0.1,
      }
    },
  }
  
  // if (typeof document !== 'undefined') {
  //   document.addEventListener("contextmenu", function(e) {
  //   e.preventDefault();
  //   }, false);
  // }
  
  
  return (
    <main className="grid items-center justify-center min-h-screen bg-cover bg-[url('/assets/bg-explosion.png')]">
      <div className="absolute z-[2] right-0 top-0 h-[100vh] w-[100vw]">
        <Particle />
      </div>    
      <Image
        src="/top-left-img.png"
        alt="paint"
        width={230}
        height={230}
        className="absolute left-0 top-0"
        />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-start'>
        <motion.div className='flex flex-col justify-start items-start leading-7 p-5 md:pl-[10rem] md:max-w-[40rem] pt-[8rem] md:pt-[0rem]' variants={textVariants} initial="initial" animate="animate">
          <h1 className='text-5xl lg:text-6xl text-white transition md:hover:translate-x-4 duration-500 cursor-pointer z-10 md:z-20'>Frontend{" "}
          <span className='text-red-600'>Developer {isSmallScreen ? '' : '👋'}</span>
          </h1>
          <p className='text-white text-base font-sans font-medium pt-5 pl-1 leading-6 transition md:hover:translate-x-3 md:hover:text-slate-300 md:hover:scale-105 duration-500 md:z-20 cursor-pointer'>Hi, I am Bishal, passionate frontend developer experience in creating Web application, Mobile application, API Integration and Software development. Check out my projects and skills.</p>
          <div className="w-[100px] h-[100px] md:w-[120px] md:h-[1rem] mt-8">
          <Image
            src="/assets/rounded-text.png"
            alt="projects"
            width={160}
            height={160}
            className="slow-spin hidden lg:block"
            />
        </div>
        </motion.div>
        <motion.div className="hidden md:block z-20 pl-[2.4rem]" variants={textVariants} initial="initial" animate="animate">
        <img  
          src="/BishalSinghDeo.png"
          alt="Profile"
          className='hover:bg-orange-400 transition duration-700 ease-in-out w-full p-6 md:max-w-[15.5rem] border-t-4 border-r-4 rounded-r-2xl shadow-2xl shadow-yellow-500 rounded-t-2xl'
          />
        </motion.div>
      </div>
        
      
    </main>
  )
}