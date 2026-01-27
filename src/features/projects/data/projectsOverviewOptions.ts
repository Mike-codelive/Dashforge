import type { ApexOptions } from "apexcharts";

export const projectsOverviewOptions: ApexOptions = {
  chart: {
    type: "area",
    toolbar: { show: false },
    zoom: { enabled: false },
    foreColor: "#9ca3af",
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

  colors: ["#4f46e5"],

  dataLabels: { enabled: false },

  xaxis: {
    type: "datetime",
    labels: {
      style: { colors: "#9ca3af", fontSize: "12px" },
    },
  },

  yaxis: {
    labels: {
      style: { colors: "#9ca3af", fontSize: "12px" },
    },
  },

  grid: {
    borderColor: "rgba(255,255,255,0.05)",
    strokeDashArray: 4,
  },

  tooltip: {
    theme: "dark",
    x: { format: "dd MMM yyyy" },
  },
};
