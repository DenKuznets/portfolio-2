import { projects as projectsList } from "@/utils/projects"
import ProjectCard from "@/components/ProjectCard/ProjectCard"

const projects = () => {

  return (
      <div>
          {projectsList.map((proj) => (
              <ProjectCard key={proj.id} projectId={proj.id} />
          ))}
      </div>
  );
}

export default projects