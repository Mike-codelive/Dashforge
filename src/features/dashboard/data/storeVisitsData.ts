import type { ChartData } from "chart.js";

export const storeVisitsData: ChartData<"doughnut"> = {
  labels: ["Direct", "Referral", "Social", "Email", "Other"],
  datasets: [
    {
      data: [44, 25, 15, 10, 6],
      backgroundColor: ["#4f46e5", "#22c55e", "#f59e0b", "#ef4444", "#94a3b8"],
      borderWidth: 0,
    },
  ],
};
