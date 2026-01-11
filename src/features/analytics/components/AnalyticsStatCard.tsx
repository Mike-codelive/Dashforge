import type { AnalyticsStat } from "../data/analyticsStats";

type Props = {
  stat: AnalyticsStat;
};

export const AnalyticsStatCard = ({ stat }: Props) => {
  const isPositive = (stat.trend ?? 0) >= 0;

  return (
    <div className="bg-DF-surface dark:bg-DF-bg-dark card-shadow rounded-md border border-white/5 p-4">
      <span className="text-DF-muted text-sm">{stat.title}</span>

      <div className="mt-2 flex items-end justify-between">
        <h3 className="text-2xl font-semibold">{stat.value}</h3>

        {stat.trend !== undefined && (
          <span
            className={`text-sm font-medium ${
              isPositive ? "text-emerald-400" : "text-red-400"
            }`}
          >
            {isPositive ? "+" : ""}
            {stat.trend}%
          </span>
        )}
      </div>
    </div>
  );
};
