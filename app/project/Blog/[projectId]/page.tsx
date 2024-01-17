// // import ProjectSlider from "@/components/ProjectSlider";

// import { ProImages } from "@/constants";

// // export default function Page({ params }: { params: { slug: string } }) {
// //     return (
// //     <div className="flex justify-center items-center h-screen bg-cover bg-[#0C011A]">
// //     <h1 className="text-white text-[3rem]">
// //     {params.slug}
// //       {/* <ProjectSlider /> */}
// //       </h1>
// //       </div>
// //     )
// // }

// // [projectId].tsx component
// const Slug = ({ params }: { params: { projectId: string } }) => {
//   // Extract projectId from the params object
//   const { projectId } = params;

//   // Fetch project details based on projectId
//   const Slug = ProImages.find((project) => project.id === parseInt(projectId));

//   // Display the details on the page
//   return (
//     // <div className="flex items-center min-h-screen bg-[#0C011A]">
//       <div className="flex items-center min-h-screen h-[100vh]">
//       <video autoPlay loop muted src="https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/foundation-entertainment/small.mp4"></video>
//       <div className="flex flex-wrap justify-center items-center gap-4 pt-[16rem] md:pt-[10rem] p-7 overflow-hidden">
//         <div className="flex justify-center items-center h-[100%] w-[100%]">
//         {Slug && <img src={Slug.src} alt="Project Image"  className="max-w-full max-h-full md:max-w-[80%] lg:max-w-[60%] xl:max-w-[40%] rounded-2xl custom-rotation" /> }
//         </div>
//       <h1 className=" text-white text-[8vw] md:text-[5.4vh] pt-2">
//       {/* text-[50px] */}
//         {Slug?.details}     
//       </h1>
//          <span className=" text-white  text-[5.5vw] md:text-[3.6vh]">
//          {/* text-[3.6vh] */}
//          {/* text-[26px] */}
//           {Slug?.additionalInfo}</span>
//       </div>
//       </div>
//     // </div>
//   );
// };

// export default Slug;


import { ProImages } from "@/constants";

const Slug = ({ params }: { params: { projectId: string } }) => {
  const { projectId } = params;
  const project = ProImages.find((project) => project.id === parseInt(projectId));

  return (
    <div className="flex items-center min-h-screen relative">
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/foundation-entertainment/small.mp4" type="video/mp4" />
      </video>

      <div className="flex flex-wrap justify-center items-center gap-4 pt-[16rem] md:pt-[10rem] p-7 overflow-hidden">
        <div className="flex justify-center items-center h-full w-full">
          {project && (
            <img
              src={project.src}
              alt="Project Image"
              className="max-w-full max-h-full md:max-w-[80%] lg:max-w-[60%] xl:max-w-[40%] rounded-2xl custom-rotation"
            />
          )}
        </div>

        <h1 className="text-white text-[8vw] md:text-[5.4vh] pt-2 z-20">
          {project?.details}
        </h1>

        <span className="text-white text-[5.5vw] md:text-[3.6vh] z-20">
          {project?.additionalInfo}
        </span>
      </div>
    </div>
  );
};

export default Slug;
