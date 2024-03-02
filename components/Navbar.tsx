'use client'

import { Socials } from '@/constants'
import Image from 'next/image'
import React, {useState} from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'


export default function Navbar () 
{
  const [input, setInput] = useState('');
    const [toggle, setToggle] = useState(false);


    const handleSocialClick = (link: string) => {
      // Redirect to the specified link
      window.open(link);
    };

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

  return (
    <div className="fixed items-center top-0 bg-transparent z-[20] flex w-full gap-[40rem] justify-center pt-5 cursor-pointer">
       <Link href="/">
      <motion.h1 className="relative text-white text-[2.4rem] md:pl-[8.5rem] group"  variants={textVariants} initial="initial"
        animate="animate">
        Bishal <span className='font-thin text-yellow-600'>Singh </span>
        <span className="text-blue-500">Deo</span>
        <span className='text-red-600'>.</span>
        <span className="absolute hidden md:block bottom-0 h-1 w-0 bg-gradient-to-r from-orange-600 via-white to-green-600 transition-all ease-in-out duration-500 group-hover:w-[19.4rem]"></span>
      </motion.h1>
    </Link>

      <motion.div className="flex flex-row gap-5 pr-8 md:pr-8"  variants={textVariants} initial="initial"
        animate="animate">
        {Socials.map((social) => (
          
            <Image
              key={social.name}
              src={social.src}
              alt={social.name}
              width={26}
              height={26}
              onClick={() => handleSocialClick(social.link)}
            />
        ))}
      </motion.div>
     </div>
  )
}