export type AudienceMetric = {
  id: string;
  title: string;
  value: string;
  change: number;
  chartType: "line" | "bar";
  chartData: number[];
};
