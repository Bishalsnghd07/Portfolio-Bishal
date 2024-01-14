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
    <div className="flex justify-center items-center h-full w-full bg-cover bg-[#0C011A] p-6">
      <div className="flex flex-col justify-center items-center gap-2 pt-[16rem] md:pt-[8rem]">
        <div className="flex w-[20rem] h-[16rem] md:w-[48rem] md:h-[28rem]">
        {Slug && <img src={Slug.src} alt="Project Image" /> }
        </div>
      <h1 className="flex text-white text-[3rem] gap-2">
        {/* Display the 'details' property of the project */}
        {Slug?.details}
        
        {/* Display the 'additionalInfo' property of the project inside a8 paragraph */}
        
        {/* Display other project details as needed */}
      </h1>
         <p className="flex text-white text-[1.5rem]"> {Slug?.additionalInfo}</p>
      </div>
      
      {/* You can include additional components to display more project details */}
    </div>
  );
};

export default Slug;
