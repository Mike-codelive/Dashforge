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
          data={{
            labels: metric.chartData.map((_, i) => i.toString()),
            datasets: [
              {
                data: metric.chartData,
                borderColor: "#4f46e5",
                backgroundColor:
                  metric.chartType === "bar"
                    ? "#4f46e5"
                    : "rgba(79,70,229,0.15)",
                fill: metric.chartType === "line",
                tension: 0.4,
                pointRadius: 0,
                barThickness: 6,
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: { enabled: false },
            },
            scales: {
              x: { display: false },
              y: { display: false },
            },
          }}
        />
      </div>
    </div>
  );
};
