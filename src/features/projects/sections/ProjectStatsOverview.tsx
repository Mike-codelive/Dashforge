import { ChevronDown, Dollar } from "../../../icons";
import { projectStatsOverviewData as stats } from "../data/projectStatsOverviewData";

export const ProjectStatsOverview = () => {
  return (
    <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-DF-surface dark:bg-DF-bg-dark overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          <div className="flex items-center gap-4 p-5">
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-sm text-2xl ${stat.iconBg} `}
            >
              <Dollar />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{stat.title}</p>

              <div className="mt-1 flex items-baseline justify-between gap-3">
                <h3 className="text-DF-text text-2xl font-bold sm:text-3xl dark:text-white">
                  {stat.value}
                </h3>

                <span
                  className={`flex rounded-sm px-2.5 text-base font-medium ${stat.changeColor} ${stat.iconBg}`}
                >
                  {stat.change.startsWith("+") ? (
                    <ChevronDown className="-ml-1 rotate-180" />
                  ) : (
                    <ChevronDown className="-ml-1" />
                  )}{" "}
                  {stat.change}
                </span>
              </div>
              <p className="truncate text-sm font-medium">{stat.subTitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
