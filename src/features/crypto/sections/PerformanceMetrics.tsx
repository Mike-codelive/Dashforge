import { performanceMetricsData } from "../data/performanceMetricsData";
import { ArrowCircleUp } from "../../../icons/index";

export const PerformanceMetrics = () => {
  return (
    <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {performanceMetricsData.map((metric) => (
        <div
          key={metric.title}
          className="bg-DF-surface dark:bg-DF-bg-dark border-DF-border/10 overflow-hidden rounded-lg border shadow-lg transition-all duration-300 hover:shadow-xl dark:border-white/5"
        >
          <div className="p-6">
            <p className="text-DF-muted mb-1 text-sm font-medium">
              {metric.title}
            </p>

            <div className="flex items-center justify-between">
              <h3 className="text-DF-text text-3xl font-bold dark:text-white">
                {metric.value}
              </h3>

              <div
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium ${
                  metric.isPositive
                    ? "bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400"
                    : "bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400"
                } `}
              >
                {metric.isPositive ? (
                  <ArrowCircleUp className="h-4 w-4" />
                ) : (
                  <ArrowCircleUp className="h-4 w-4 rotate-180" />
                )}
                {metric.change}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
