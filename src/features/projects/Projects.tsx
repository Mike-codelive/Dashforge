import { ActiveProjects } from "./sections/ActiveProjects";
import { ProjectsOverview } from "./sections/ProjectsOverview";
import { ProjectStatsOverview } from "./sections/ProjectStatsOverview";

export const Projects = () => {
  return (
    <>
      <ProjectStatsOverview />
      <ProjectsOverview />
      <ActiveProjects />
    </>
  );
};
