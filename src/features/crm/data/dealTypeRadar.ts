import type { ApexOptions } from "apexcharts";

export const dealTypeSeries = [
  {
    name: "Deals",
    data: [80, 50, 30, 40, 100, 20],
  },
];

export const dealTypeOptions: ApexOptions = {
  chart: {
    type: "radar",
    toolbar: { show: false },
  },

  labels: [
    "New Business",
    "Upsell",
    "Renewal",
    "Cross-sell",
    "Partnership",
    "Other",
  ],

  stroke: {
    width: 2,
  },

  fill: {
    opacity: 0.25,
  },

  markers: {
    size: 4,
    hover: { size: 6 },
  },

  colors: ["#4f46e5"],

  yaxis: {
    show: false,
  },

  xaxis: {
    labels: {
      style: {
        colors: "#9ca3af",
        fontSize: "12px",
      },
    },
  },

  tooltip: {
    theme: "dark",
  },

  grid: {
    borderColor: "rgba(255,255,255,0.05)",
  },
};
