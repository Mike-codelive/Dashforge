import { analyticsStats } from "../data/analyticsStats";
import { AnalyticsStatCard } from "../components/AnalyticsStatCard";

export const AnalyticsStats = () => {
  return (
    <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {analyticsStats.map((stat) => (
        <AnalyticsStatCard key={stat.id} stat={stat} />
      ))}
    </div>
  );
};
