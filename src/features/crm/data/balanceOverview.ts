import type { ApexOptions } from "apexcharts";

export const balanceOverviewSeries = [
  {
    name: "Income",
    data: [31, 40, 28, 51, 42, 109, 100],
  },
  {
    name: "Expenses",
    data: [11, 32, 45, 32, 34, 52, 41],
  },
];

export const balanceOverviewOptions: ApexOptions = {
  chart: {
    type: "area",
    toolbar: { show: false },
    zoom: { enabled: true },
    animations: { enabled: true },
  },

  stroke: {
    curve: "smooth",
    width: 2,
  },

  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.35,
      opacityTo: 0.05,
      stops: [0, 90, 100],
    },
  },

  colors: ["#4f46e5", "#22c55e"],

  dataLabels: { enabled: false },

  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    crosshairs: {
      show: true,
      stroke: {
        color: "rgba(255,255,255,0.25)",
        width: 1,
      },
    },
    labels: {
      style: { colors: "rgba(255,255,255,0.5)" },
    },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },

  yaxis: {
    crosshairs: {
      show: true,
      stroke: {
        color: "rgba(255,255,255,0.25)",
        width: 1,
      },
    },
    labels: {
      formatter: (value) => `$${value}`,
      style: { colors: "rgba(255,255,255,0.5)" },
    },
  },

  grid: {
    borderColor: "rgba(255,255,255,0.08)",
    strokeDashArray: 4,
  },

  legend: {
    position: "top",
    horizontalAlign: "right",
    labels: {
      colors: "rgba(255,255,255,0.7)",
    },
  },

  tooltip: {
    theme: "dark",
    y: {
      formatter: (value) => `$${value}`,
    },
  },
};
