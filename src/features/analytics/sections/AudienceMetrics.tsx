import { audienceMetrics } from "../data/audienceMetrics";
import { AudienceMetricCard } from "../components/AudienceMetricCard";

export const AudienceMetrics = () => {
  return (
    <section className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {audienceMetrics.map((metric) => (
        <AudienceMetricCard key={metric.id} metric={metric} />
      ))}
    </section>
  );
};
