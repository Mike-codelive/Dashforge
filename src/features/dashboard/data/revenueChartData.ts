import type { ChartData } from "chart.js";

export const revenueChartData: ChartData<"bar" | "line"> = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      type: "line",
      label: "Revenue",
      data: [44, 55, 41, 67, 22, 43, 21, 30, 45, 60, 50, 70],
      borderColor: "#4f46e5",
      backgroundColor: "rgba(79,70,229,0.15)",
      fill: true,
      tension: 0.4,
      pointRadius: 0,
    },
    {
      type: "bar",
      label: "Orders",
      data: [30, 40, 35, 50, 49, 60, 70, 55, 48, 62, 58, 75],
      backgroundColor: "#22c55e",
      borderRadius: 3,
      barThickness: 18,
    },
    {
      type: "line",
      label: "Target",
      data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
      borderColor: "#f97316",
      borderDash: [6, 6],
      pointRadius: 0,
      fill: false,
    },
  ],
};
