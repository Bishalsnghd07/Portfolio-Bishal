// import ProjectSlider from "@/components/ProjectSlider";

import { ProImages } from "@/constants";

// export default function Page({ params }: { params: { slug: string } }) {
//     return (
//     <div className="flex justify-center items-center h-screen bg-cover bg-[#0C011A]">
//     <h1 className="text-white text-[3rem]">
//     {params.slug}
//       {/* <ProjectSlider /> */}
//       </h1>
//       </div>
//     )
// }

// [projectId].tsx component
const Slug = ({ params }: { params: { projectId: string } }) => {
  // Extract projectId from the params object
  const { projectId } = params;

  // Fetch project details based on projectId
  const Slug = ProImages.find((project) => project.id === parseInt(projectId));

  // Display the details on the page
  return (
    <div className="flex items-center min-h-screen bg-cover bg-[#0C011A]">
      <div className="flex flex-wrap justify-center items-center gap-4 pt-[16rem] md:pt-[10rem] p-6 overflow-hidden">
        <div className="flex justify-center items-center h-[100%] w-[100%]">
        {Slug && <img src={Slug.src} alt="Project Image"  className="max-w-full max-h-full md:max-w-[80%] lg:max-w-[60%] xl:max-w-[40%] custom-rotation" /> }
        </div>
      <h1 className=" text-white text-[3.3rem]">
      {/* text-[50px] */}
        {Slug?.details}     
      </h1>
         <span className=" text-white text-[1.6rem]">
         {/* text-[26px] */}
          {Slug?.additionalInfo}</span>
      </div>
    </div>
  );
};

export default Slug;
