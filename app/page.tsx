'use client'
import Particle from '@/components/Particle'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isSmallScreen, setIsSmallSCreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallSCreen(window.innerWidth < 768);
    };
    handleResize();
  }, [])
  
  return (
    <main className="flex items-center min-h-screen relative bg-cover bg-[url('/assets/bg-explosion.png')]">
      <div className="absolute z-[2] right-0 top-0 h-full w-full">
        <Particle />
      </div>    
      {isSmallScreen ? (
        <div className="absolute items-center justify-center right-20 left-20 md:right-40 bottom-0 z-[10]">
          <Image
            src="/BishalSinghDeo1.png"
            alt="BishalSinghDeo"
            width={560}
            height={560}
            className="w-[220px] h-[220px] z-[1] md:h-[560px] md:w-[560px]"
          />
      </div>
      ) : (
      <div className="absolute bottom-0 lg:bottom-auto right-[4.3rem] md:right-[5.4rem] lg:right-[7.4rem] xl:right-[16rem] z-[10] w-[240px] h-[240px] xl:w-[529px] xl:h-[482px] rounded-md">
  <div className="bg-[url('/assets/shape-1.svg')] bg-no-repeat bg-right xl:w-[529px] lg:h-[472px] hidden xl:block">
    <div className="flex items-center justify-center w-[220px] h-[220px] xl:w-[549px] xl:h-[492px]">
      <Image
        src="/BishalSinghDeo1.png"
        alt="BishalSinghDeo"
        width={529}
        height={462}
        // className="w-[220px] h-[220px] lg:w-[300px] lg:h-[300px] xl:h-[350px] xl:w-[370px] bg-bottom rounded-md"
        className="flex w-[260px] h-[260px] xl:w-[509px] xl:h-[484px] rounded-none lg:rounded-full overflow-hidden"
        />
    </div>
  </div>
</div>
      )
      }
      <Image
        src="/top-left-img.png"
        alt="paint"
        width={230}
        height={230}
        className="absolute left-0 top-0"
      />

      <div className="flex flex-col gap-3 z-[10] pl-5 md:pl-40 pt-56 lg:pt-28">
        <h1 className="text-[50px] text-white max-w-[550px]"> Frontend{" "}
         <span className="text-red-600">Developer👋</span>
         <p className='text-white text-lg'>Hi, I am Bishal, passionate frontend developer experience in creating Web application, Mobile application, API Integration and Software development. Check out my projects and skills.</p>
        </h1>
        <div className="relative w-[100px] h-[100px] md:w-[160px] md:h-[160px] mt-5">
          <Image
            src="/assets/rounded-text.png"
            alt="projects"
            width={160}
            height={160}
            className="slow-spin hidden md:block"
          />
        </div>
      </div>
      
    </main>
  )
}
