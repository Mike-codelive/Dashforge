import { Chart } from "../../../components/Chart";
import { projectsOverviewData } from "../data/projectsOverviewData";
import { projectsOverviewOptions } from "../data/projectsOverviewOptions";

export const ProjectsOverview = () => {
  const series = [
    {
      name: "Projects",
      data: projectsOverviewData,
    },
  ];

  return (
    <div className="card-shadow bg-DF-surface dark:bg-DF-bg-dark rounded-md">
      <div className="flex items-center justify-between border-b border-white/5 p-4">
        <h4 className="font-semibold">Projects Overview</h4>
      </div>

      <div className="p-4">
        <Chart
          type="area"
          series={series}
          options={projectsOverviewOptions}
          height={300}
        />
      </div>
    </div>
  );
};
