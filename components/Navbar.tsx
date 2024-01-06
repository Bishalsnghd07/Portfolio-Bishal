'use client'

import { Socials } from '@/constants'
import Image from 'next/image'
import React, {useState} from 'react'
import { Transition } from '@headlessui/react'
import search from '../public/search.svg'


export default function Navbar () 
{
  const [input, setInput] = useState('');
    const [toggle, setToggle] = useState(false);

  return (
     <div className="fixed top-0 bg-transparent z-[20] flex md:px-60 w-full gap-5 justify-between p-5 cursor-pointer">
      <h1 className="text-white text-[45px]">
        Bishal <span className='font-thin text-yellow-600'>Singh </span>
        <span className="text-blue-500">Deo</span>
        <span className='text-red-600'>.</span>
      </h1>
      {/* <Image className="pointer" src={search} alt="search_icon" width={17} height={17} /> */}

      <Transition
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
            </Transition>
      <div className="flex flex-row gap-5 pr-8 sm:pr-0">
        {Socials.map((social) => (
          <Image
            key={social.name}
            src={social.src}
            alt={social.name}
            width={24}
            height={24}
          />
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