import { ArrowCircleUp, Dollar } from "../../../icons";
import { topStats } from "../data/topStats";

export const TopStats = () => {
  return (
    <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {topStats.map((stat) => (
        <div
          key={stat.title}
          className="bg-DF-surface dark:bg-DF-bg-dark overflow-hidden px-3 py-4 dark:border-white/5"
        >
          <div>
            <h5 className="mb-2 flex justify-between">
              {stat.title}
              <i>
                <ArrowCircleUp
                  className={`h-DF-nav-icons w-DF-nav-icons ${stat.icon}`}
                />
              </i>
            </h5>
            <p className="flex items-center text-[26px]">
              <i>
                <Dollar className="-ml-3.5 h-12 w-12" />
              </i>
              {stat.change}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
