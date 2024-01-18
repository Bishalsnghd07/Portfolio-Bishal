'use client'

import { Socials } from '@/constants'
import Image from 'next/image'
import React, {useState} from 'react'
import { Transition } from '@headlessui/react'
import search from '../public/search.svg'
import Link from 'next/link'


export default function Navbar () 
{
  const [input, setInput] = useState('');
    const [toggle, setToggle] = useState(false);


    const handleSocialClick = (link: string) => {
      // Redirect to the specified link
      window.open(link);
    };

  return (
    <div className="fixed top-0 bg-transparent z-[20] flex lg:px-60 w-full gap-5 justify-between p-5 cursor-pointer">
       <Link href="/">
      <h1 className="relative text-white text-[45px] group">
        Bishal <span className='font-thin text-yellow-600'>Singh </span>
        <span className="text-blue-500">Deo</span>
        <span className='text-red-600'>.</span>
        <span className="absolute hidden md:block left-0 bottom-0 h-1 w-0 bg-gradient-to-r from-orange-600 via-white to-green-600 transition-all ease-in-out duration-500 group-hover:w-full"></span>
      </h1>
    </Link>
      {/* <Image className="pointer" src={search} alt="search_icon" width={17} height={17} /> */}

      {/* <Transition
              show={toggle}
              enter="transition-all duration-1000"
              enterFrom="-translate-x-full opacity-0"
              enterTo="translate-x-0 opacity-100"
              leave="transition-all duration-10000"
              leaveFrom="translate-x-full opacity-100"
              leaveTo="translate-x-0 opacity-0"
            >
              <div>
                <input
                  type="text"
                  className="h-full flex-1 text-fs-dark-black placeholder-fs-dark-black sm:w-[250px] md:w-[300px]"
                  placeholder="Search..."
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                />
              </div>
            </Transition> */}
      <div className="flex flex-row gap-5 pr-8 lg:pr-0">
        {/* <Link href={''}></Link> */}
        {Socials.map((social) => (
          
            <Image
              key={social.name}
              src={social.src}
              alt={social.name}
              width={28}
              height={28}
              onClick={() => handleSocialClick(social.link)}
            />

          // </a>
        ))}
      </div>
      {/* <div className="flex flex-row items-center justify-center gap-5 bg-grey pr-8">
        {Socials.map((link) => (
          <Link 
            key={link.name}
            href={link.link} 
            />
        ) )}
      </div> */}
     </div>
  )
}