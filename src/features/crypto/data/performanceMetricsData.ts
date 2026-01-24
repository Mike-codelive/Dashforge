export interface PerformanceMetric {
  title: string;
  value: string;
  change: string;
  changeColor: string;
  isPositive: boolean;
}

export const performanceMetricsData: PerformanceMetric[] = [
  {
    title: "Total Invested",
    value: "$31,672.45",
    change: "+$3,890.20",
    changeColor: "text-green-500 dark:text-green-400",
    isPositive: true,
  },
  {
    title: "Total Change",
    value: "-$1,245.80",
    change: "-7.62%",
    changeColor: "text-red-500 dark:text-red-400",
    isPositive: false,
  },
  {
    title: "Day Change",
    value: "+$142.15",
    change: "+0.58%",
    changeColor: "text-green-500 dark:text-green-400",
    isPositive: true,
  },
];
