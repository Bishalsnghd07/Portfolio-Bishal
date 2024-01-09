export default function Project({ params }: {
  params: { projectId: string}
}) {
  return <div className="flex flex-col lg:flex-row items-center gap-4 justify-center min-h-screen pt-[14rem] lg:pt-0 bg-cover bg-[#0C011A]">
    
    <h1 className="text-white">
    My Post {params.projectId}
      </h1>
      </div>
}