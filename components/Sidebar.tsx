'use client'

import { NavLinks } from '@/constants'
import { AnimatePresence } from 'framer-motion'
import { link } from 'fs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Transition from './Transition'

const Sidebar = () => {
     const [isActive, setIsActive] = useState("Home")
     const [isRouting, setIsRouting] = useState(false)
     const [prevPath, setPrevPath] = useState('/')

     const path = usePathname();

     useEffect(() => {
       if(prevPath!==path) { //agar previous path is not equal to current path, then routing is true and we navigate to that path. Like, hum home page mein hai or about page mein jana chaahte h, tohh hmara previous path ho gy home and current path ho gy about, agar ye krte h tohh routing true h or ya phir hm home page m hi h or home page button pe hi click kr rhe toh routing false rahega, or hm usi page m rahenge kyuki hmara previous path "home" or current path vi "home" rahega tohh hmara above statement "prevPath===path" ho jayega or routing false rahega or hum home page m hi rahenge
       setIsRouting(true)
       }
     }, [path, prevPath])

     useEffect(() => {
       if(isRouting) {
        setPrevPath(path)
        const timeout = setTimeout(() => {
           setIsRouting(false)
        },1200)
        return () => clearTimeout(timeout)
       }
     },[isRouting, path])
     

  return (
    <div className='fixed right-8 top-[18rem] h-[12.5rem] w-[3rem] z-[20] rounded-full bg-gray-500 bg-opacity-50'>
        <AnimatePresence mode="wait">
          {isRouting && <Transition />}
        <div className="flex flex-col gap-5 pb-3 justify-center items-center h-full">
            {NavLinks.map((link) => (
                <Link 
                key={link.name}
                href={link.link}
                onClick={() => setIsActive(link.name)}
                >
                     <link.icon
                className={`w-[28px] h-[28px] ${
                  isActive === link.name ? "text-orange-500" : "text-white"
                }`}
              />
                </Link>
            ))}
        </div>
        </AnimatePresence>
    </div>
  )
}

export default Sidebar