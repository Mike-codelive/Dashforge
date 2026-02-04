import { Dollar } from "../../../icons";

type JobStat = {
  label: string;
  value: string;
  change: number;
  iconBg: string;
  iconColor: string;
};

const stats: JobStat[] = [
  {
    label: "TOTAL JOBS",
    value: "36,894",
    change: 12.5,
    iconBg: "bg-blue-100 dark:bg-blue-500/20",
    iconColor: "text-blue-600",
  },
  {
    label: "APPLY JOBS",
    value: "28,402",
    change: 8.3,
    iconBg: "bg-purple-100 dark:bg-purple-500/20",
    iconColor: "text-purple-600",
  },
  {
    label: "NEW JOBS",
    value: "1,298",
    change: 4.1,
    iconBg: "bg-green-100 dark:bg-green-500/20",
    iconColor: "text-green-600",
  },
  {
    label: "INTERVIEW",
    value: "3,254",
    change: -1.8,
    iconBg: "bg-yellow-100 dark:bg-yellow-500/20",
    iconColor: "text-yellow-600",
  },
  {
    label: "HIRED",
    value: "1,842",
    change: 6.9,
    iconBg: "bg-emerald-100 dark:bg-emerald-500/20",
    iconColor: "text-emerald-600",
  },
  {
    label: "REJECTED",
    value: "964",
    change: -3.2,
    iconBg: "bg-red-100 dark:bg-red-500/20",
    iconColor: "text-red-600",
  },
];

export default function JobStats() {
  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-6">
      {stats.map((stat) => {
        return (
          <div
            key={stat.label}
            className="card-shadow bg-DF-surface dark:bg-DF-bg-dark mb-6 rounded-md p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full ${stat.iconBg}`}
              >
                <Dollar />
              </div>

              <div className="flex-1">
                <p className="text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-400">
                  {stat.label}
                </p>

                <h3 className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </h3>

                <div className="mt-1 flex items-center gap-1 text-xs">
                  <span
                    className={`font-medium ${
                      stat.change >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {Math.abs(stat.change)}%
                  </span>
                  <span className="text-gray-400">since last month</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
