import { Chart } from "../../../components/Chart";
import type { AudienceMetric } from "../types/audienceMetric";

type Props = {
  metric: AudienceMetric;
};

export const AudienceMetricCard = ({ metric }: Props) => {
  const isPositive = metric.change >= 0;

  return (
    <div className="card-shadow bg-DF-surface dark:bg-DF-bg-dark rounded-md p-4">
      <div className="flex items-center justify-between">
        <h6 className="text-DF-muted text-sm">{metric.title}</h6>
        <span
          className={`text-xs font-medium ${
            isPositive ? "text-emerald-400" : "text-red-400"
          }`}
        >
          {isPositive ? "+" : ""}
          {metric.change}%
        </span>
      </div>

      <p className="mt-2 text-2xl font-semibold">{metric.value}</p>

      <div className="mt-4 h-[60px]">
        <Chart
          type={metric.chartType}
          height={60}
          series={[
            {
              name: metric.title,
              data: metric.chartData,
            },
          ]}
          options={{
            chart: {
              sparkline: { enabled: true },
            },

            stroke: {
              curve: "smooth",
              width: 2,
            },

            fill:
              metric.chartType === "line" ? { opacity: 0.25 } : { opacity: 1 },

            colors: ["#4f46e5"],

            tooltip: {
              enabled: false,
            },

            xaxis: {
              labels: { show: false },
              axisBorder: { show: false },
              axisTicks: { show: false },
            },

            yaxis: {
              show: false,
            },
          }}
        />
      </div>
    </div>
  );
};
