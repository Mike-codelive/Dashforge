import type { ChartOptions } from "chart.js";

export const liveUsersByCountryOptions: ChartOptions<"choropleth"> = {
  responsive: true,
  maintainAspectRatio: false,

  scales: {
    projection: {
      axis: "x",
      projection: "equalEarth",
    },
    color: {
      axis: "x",
      quantize: 5,
      legend: {
        position: "bottom",
        align: "top",
      },
    },
  },

  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (ctx) => {
          const value = (ctx.raw as { value?: number })?.value ?? 0;
          return `Users: ${value.toLocaleString()}`;
        },
      },
    },
  },
};
