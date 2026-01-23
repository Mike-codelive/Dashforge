import type { ApexOptions } from "apexcharts";

export const getSparklineOptions = (color: string): ApexOptions => ({
  chart: {
    type: "area",
    sparkline: { enabled: true },
  },

  stroke: {
    curve: "smooth",
    width: 2,
  },

  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 0.4,
      opacityFrom: 0.6,
      opacityTo: 0.05,
    },
  },

  colors: [color],

  tooltip: {
    theme: "dark",
    y: {
      formatter: (val) => `$${val.toFixed(2)}`,
    },
  },
});
