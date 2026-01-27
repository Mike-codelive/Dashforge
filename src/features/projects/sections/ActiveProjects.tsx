import { activeProjectsData } from "../data/activeProjectsData";
import { ProjectProgressBar } from "../components/ProjectProgressBar";
import { ProjectStatusBadge } from "../components/ProjectStatusBadge";

export const ActiveProjects = () => {
  return (
    <div className="card-shadow bg-DF-surface dark:bg-DF-bg-dark rounded-md">
      <div className="border-b border-white/5 p-4">
        <h4 className="font-semibold">Active Projects</h4>
      </div>

      <div className="divide-y divide-white/5">
        {activeProjectsData.map((project) => (
          <div key={project.id} className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <div>
                <p className="font-medium">{project.name}</p>
                <span className="text-DF-muted text-xs">{project.client}</span>
              </div>

              <ProjectStatusBadge status={project.status} />
            </div>

            <div className="flex items-center gap-3">
              <ProjectProgressBar value={project.progress} />
              <span className="w-10 text-right text-sm font-medium">
                {project.progress}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
