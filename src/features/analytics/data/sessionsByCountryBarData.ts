import type { ChartData } from "chart.js";

export const sessionsByCountryBarData: ChartData<"bar"> = {
  labels: [
    "United States",
    "Canada",
    "United Kingdom",
    "Germany",
    "France",
    "Australia",
    "Brazil",
  ],
  datasets: [
    {
      label: "Sessions",
      data: [4500, 3200, 2800, 2400, 2200, 1800, 1600],
      backgroundColor: "#4f46e5",
      borderRadius: 6,
      barPercentage: 0.6,
    },
  ],
};
