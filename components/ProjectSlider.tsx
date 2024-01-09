"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { ProImages, ProImages2 } from "@/constants";
import Image from "next/image";

import React from 'react'
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProjectSlider = () => {
    const router = useRouter()
  return (
    <div className="w-[85%] md:w-[40%]">
        <Swiper 
        breakpoints={{
            700: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
        }}
        freeMode={true}
        pagination={{
            clickable: true,
        }}
        modules={[FreeMode,Pagination]}
        >
            <SwiperSlide className="mb-14">
                <div className="grid grid-cols-2 gap-4 md:px-16">
                    {ProImages.map((image) =>(
                      <div className="relative group w-[150px] h-[150px] lg:w-[230px] lg:h-[230px]" 
                      key={image.src}
                      >
                        <Image 
                        src={image.src} 
                        alt= "project image"
                        width={280}
                        height={280}
                        // quality={100}
                        className="object-cover h-full w-full rounded-md" 
                        />
                       
                        <div className="cursor-pointer absolute inset-0 bg-gradient-to-r from-purple-800 via-pink-500 to-purple-800 opacity-0 group-hover:opacity-70 transition-opacity duration-200" />
                            <div className="cursor-pointer absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white">
                                    <Link href="/project/Blog" onClick={() => router.push('/project/Blog')}>
                                    View Project
                                <Image 
                                src="/assets/arrow-right.svg" 
                                alt="arrow right" 
                                width={20}
                                height={20}
                                className="invert brightness-0 ml-1"
                                />
                                </Link> 
                            </div>
                      </div>
                        
                    ))}
                </div>
            </SwiperSlide>
            <SwiperSlide className="mb-14">
                <div className="grid grid-cols-2 gap-4 md:px-16">
                    {ProImages2.map((image) =>(
                      <div className="relative group w-[150px] h-[150px] md:w-[230px] md:h-[230px]" key={image.src}>
                        <Image 
                        src={image.src} 
                        alt= "project image"
                        width={280}
                        height={280}
                        className="object-cover h-full w-full rounded-md" 
                        />
                        <div className="cursor-pointer absolute inset-0 bg-gradient-to-r from-purple-800 via-pink-500 to-purple-800 opacity-0 group-hover:opacity-70 transition-opacity duration-200" />
                            <div className="cursor-pointer absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white">
                                View Project
                                <Image 
                                src="/assets/arrow-right.svg" 
                                alt="arrow right" 
                                width={20}
                                height={20}
                                className="invert brightness-0 ml-2"
                                />
                            </div>
                      </div>
                    ))}
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default ProjectSlider