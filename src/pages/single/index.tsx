import { projectData } from "@/components/projects/project.data";
import { useParams } from "react-router-dom";



const Single = () => {
  const { id } = useParams();
  const projectId = Number(id);

  const project = projectData[projectId-1];

  if (!project) return <p>Project not found</p>;

  return (
    <div className="max-w-4xl flex flex-col items-center justify-center m-auto border-2 mt-10">
         <h1 className="leading-tight font-extrabold text-7xl">KoKo</h1>
        <div>Fun little website, where users can learn/practice sign language</div>
        <h2>tech used</h2>
      <img
        src={project.image}
        alt={project.title || "Project Image"}
        className="w-full max-w-2xl border-4 border-main-button rounded-xl"
      />
    </div>
  );
};

export default Single;