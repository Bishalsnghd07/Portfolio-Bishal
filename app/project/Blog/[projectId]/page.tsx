// "use client";

// import { ProImages } from "@/constants";
// import { ProImages2 } from "@/constants";
// import { useRouter, usePathname, useSearchParams } from "next/navigation";

// const Slug = ({ params }: { params: { projectId: string } }) => {
//   const { projectId } = params;
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   const projectInProImages = ProImages.find(
//     (project) => project.id === parseInt(projectId)
//   );

//   const projectInProImages2 = ProImages2.find(
//     (project) => project.id === parseInt(projectId)
//   );

//   const project = pathname.includes("ProImages2")
//     ? projectInProImages2
//     : projectInProImages;

//   if (!project) {
//     // Handle the case where the project is not found
//     return <div>Project not found</div>;
//   }

//   return (
//     <div className="flex items-center min-h-screen relative">
//       <video
//         autoPlay
//         loop
//         muted
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       >
//         <source
//           src="https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/foundation-entertainment/small.mp4"
//           type="video/mp4"
//         />
//       </video>

//       <div className="flex flex-wrap justify-center items-center gap-4 pt-[16rem] md:pt-[10rem] p-7 overflow-hidden">
//         <div className="flex justify-center items-center h-full w-full">
//           {project && (
//             <img
//               src={project.src}
//               alt="Project Image"
//               className="max-w-full max-h-full md:max-w-[80%] lg:max-w-[60%] xl:max-w-[40%] rounded-2xl custom-rotation"
//             />
//           )}
//         </div>

//         <h1 className="text-white text-[8vw] md:text-[5.4vh] pt-2 z-20">
//           {project?.details}
//         </h1>

//         <span className="text-white text-[5.5vw] md:text-[3.6vh] z-20">
//           {project?.additionalInfo}
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Slug;

"use client";

import { ProImages, ProImages2 } from "@/constants";
import { useRouter } from "next/navigation";

const Slug = ({ params }: { params: { projectId: string } }) => {
  const { projectId } = params;
  const router = useRouter();
  const id = parseInt(projectId);

  // Combine both arrays and find the project
  const allProjects = [...ProImages, ...ProImages2];
  const project = allProjects.find((project) => project.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="flex items-center min-h-screen relative">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/foundation-entertainment/small.mp4"
          type="video/mp4"
        />
      </video>

      <div className="flex flex-wrap justify-center items-center gap-4 pt-[16rem] md:pt-[10rem] p-7 overflow-hidden">
        <div className="flex justify-center items-center h-full w-full">
          <img
            src={project.src}
            alt="Project Image"
            className="max-w-full max-h-full md:max-w-[80%] lg:max-w-[60%] xl:max-w-[40%] rounded-2xl custom-rotation"
          />
        </div>

        <h1 className="text-white text-[8vw] md:text-[5.4vh] pt-2 z-20">
          {project.details}
        </h1>

        <span className="text-white text-[5.5vw] md:text-[3.6vh] z-20">
          {project.additionalInfo}
        </span>
      </div>
    </div>
  );
};

export default Slug;
