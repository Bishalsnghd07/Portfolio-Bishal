"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { ProImages, ProImages2 } from "@/constants";
import Image from "next/image";

import React from "react";
import Link from "next/link";
// import { useRouter } from "next/navigation";

const ProjectSlider = () => {
  // const router = useRouter()
  return (
    <div className="w-[90%] md:w-[40%]">
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
        modules={[FreeMode, Pagination]}
      >
        <SwiperSlide className="mb-14 pr-4">
          <div className="grid grid-cols-2 gap-4 md:px-16 md:pt-[6rem]">
            {ProImages.map((image, index) => (
              <div
                className="relative group w-[150px] h-[150px] md:w-[100%] md:h-[11rem]"
                key={image.src}
              >
                <Image
                  src={image.src}
                  alt="project image"
                  width={280}
                  height={280}
                  // quality={100}
                  className="object-cover h-full w-full rounded-md"
                />

                <Link href={`/project/Blog/${image.id}`} passHref>
                  <div className="cursor-pointer absolute inset-0 bg-gradient-to-r from-purple-800 via-pink-500 to-purple-800 opacity-0 group-hover:opacity-70 transition-opacity duration-200" />
                  <div className="cursor-pointer absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white">
                    {/* <button type="button" onClick={() => router.push('/project/Blog')}> */}
                    View Project
                    <Image
                      src="/assets/arrow-right.svg"
                      alt="arrow right"
                      width={20}
                      height={20}
                      className="invert brightness-0 ml-1"
                    />
                    {/* </button> */}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </SwiperSlide>

        <SwiperSlide className="mb-14 pl-2">
          <div className="grid grid-cols-2 gap-4 md:px-16 md:pt-[6rem]">
            {ProImages2.map((image, index) => (
              <div
                className="relative group w-[150px] h-[150px] md:w-[100%] md:h-[11rem]"
                key={image.src}
              >
                <Image
                  src={image.src}
                  alt="project image"
                  width={280}
                  height={280}
                  className="object-cover h-full w-full rounded-md"
                />
                <Link href={`/project/Blog/${image.id}`} passHref>
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
                </Link>
              </div>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProjectSlider;

// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/free-mode";
// import { FreeMode, Pagination } from "swiper/modules";
// import { ProImages, ProImages2 } from "@/constants";
// import Image from "next/image";
// import Link from "next/link";

// // Combine both arrays into one master list
// const allProjects = [...ProImages, ...ProImages2];

// const ProjectSlider = () => {
//   return (
//     <div className="w-[90%] md:w-[40%]">
//       <Swiper
//         breakpoints={{
//           700: {
//             slidesPerView: 1,
//             spaceBetween: 15,
//           },
//         }}
//         freeMode={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[FreeMode, Pagination]}
//       >
//         {/* First Slide - Original ProImages */}
//         <SwiperSlide className="mb-14 pr-4">
//           <div className="grid grid-cols-2 gap-4 md:px-16 md:pt-[6rem]">
//             {ProImages.map((project) => (
//               <div
//                 className="relative group w-[150px] h-[150px] md:w-[100%] md:h-[11rem]"
//                 key={project.id}
//               >
//                 <Image
//                   src={project.src}
//                   alt="project image"
//                   width={280}
//                   height={280}
//                   className="object-cover h-full w-full rounded-md"
//                 />
//                 <Link href={`/project/${project.id}`} passHref>
//                   <div className="cursor-pointer absolute inset-0 bg-gradient-to-r from-purple-800 via-pink-500 to-purple-800 opacity-0 group-hover:opacity-70 transition-opacity duration-200" />
//                   <div className="cursor-pointer absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white">
//                     View Project
//                     <Image
//                       src="/assets/arrow-right.svg"
//                       alt="arrow right"
//                       width={20}
//                       height={20}
//                       className="invert brightness-0 ml-1"
//                     />
//                   </div>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </SwiperSlide>

//         {/* Second Slide - Original ProImages2 */}
//         <SwiperSlide className="mb-14 pl-2">
//           <div className="grid grid-cols-2 gap-4 md:px-16 md:pt-[6rem]">
//             {ProImages2.map((project) => (
//               <div
//                 className="relative group w-[150px] h-[150px] md:w-[100%] md:h-[11rem]"
//                 key={project.id}
//               >
//                 <Image
//                   src={project.src}
//                   alt="project image"
//                   width={280}
//                   height={280}
//                   className="object-cover h-full w-full rounded-md"
//                 />
//                 <Link href={`/project/${project.id}`} passHref>
//                   <div className="cursor-pointer absolute inset-0 bg-gradient-to-r from-purple-800 via-pink-500 to-purple-800 opacity-0 group-hover:opacity-70 transition-opacity duration-200" />
//                   <div className="cursor-pointer absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white">
//                     View Project
//                     <Image
//                       src="/assets/arrow-right.svg"
//                       alt="arrow right"
//                       width={20}
//                       height={20}
//                       className="invert brightness-0 ml-2"
//                     />
//                   </div>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default ProjectSlider;
