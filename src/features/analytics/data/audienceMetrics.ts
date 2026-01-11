import type { AudienceMetric } from "../types/audienceMetric";

export const audienceMetrics: AudienceMetric[] = [
  {
    id: "sessions",
    title: "Sessions",
    value: "28,345",
    change: 12.4,
    chartType: "line",
    chartData: [12, 18, 15, 22, 19, 26, 24],
  },
  {
    id: "duration",
    title: "Avg. Session Duration",
    value: "2m 45s",
    change: 5.1,
    chartType: "line",
    chartData: [90, 120, 110, 130, 140, 155, 165],
  },
  {
    id: "pages",
    title: "Pages / Session",
    value: "3.4",
    change: -1.8,
    chartType: "bar",
    chartData: [2.8, 3.0, 3.1, 3.3, 3.5, 3.6, 3.4],
  },
  {
    id: "bounce",
    title: "Bounce Rate",
    value: "42.6%",
    change: -3.2,
    chartType: "line",
    chartData: [48, 46, 45, 44, 43, 42.6, 42],
  },
];
