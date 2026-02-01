import { ArrowUpward, Dollar } from "../../../icons";

const revenueStats = [
  {
    title: "Total Revenue",
    value: "$45,678.92",
    change: "+18.4%",
    changeColor: "text-green-600 dark:text-green-400",
    isPositive: true,
    icon: "ri-money-dollar-circle-line",
    iconBg:
      "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    subText: "This month",
  },
  {
    title: "Estimated",
    value: "$62,340.00",
    change: "+32.7%",
    changeColor: "text-blue-600 dark:text-blue-400",
    isPositive: true,
    icon: "ri-line-chart-line",
    iconBg: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    subText: "Projected next month",
  },
];

export const NftRevenueOverview = () => {
  return (
    <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      {revenueStats.map((stat) => (
        <div
          key={stat.title}
          className="bg-DF-surface dark:bg-DF-bg-dark overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          <div className="flex h-full flex-col p-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-sm text-xl ${stat.iconBg} `}
                >
                  <Dollar />
                </div>
                <h5 className="text-lg font-semibold dark:text-white">
                  {stat.title}
                </h5>
              </div>

              <span className="text-DF-muted text-sm">{stat.subText}</span>
            </div>

            <div className="mt-auto">
              <div className="flex items-baseline gap-3">
                <h2 className="text-2xl font-bold sm:text-4xl dark:text-white">
                  {stat.value}
                </h2>

                <span
                  className={`ml-auto flex text-lg font-medium ${stat.changeColor}`}
                >
                  {stat.isPositive ? (
                    <ArrowUpward />
                  ) : (
                    <ArrowUpward className="rotate-180" />
                  )}
                  {stat.change}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
