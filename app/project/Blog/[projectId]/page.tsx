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
    <div className="flex justify-center items-center h-screen bg-cover bg-[#0C011A]">
      <div className="flex flex-col">
        <div className="flex w-full h-full">
        {Slug && <img src={Slug.src} alt="Project Image" /> }
        </div>
      <h1 className="flex text-white text-[3rem]">
        {/* Display the 'details' property of the project */}
        {Slug?.details}
        
        {/* Display the 'additionalInfo' property of the project inside a paragraph */}
        <p> {Slug?.additionalInfo}</p>
        
        {/* Display other project details as needed */}
      </h1>
      </div>
      
      {/* You can include additional components to display more project details */}
    </div>
  );
};

export default Slug;
