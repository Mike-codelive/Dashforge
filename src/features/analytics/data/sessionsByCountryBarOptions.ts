import type { ChartOptions } from "chart.js";

export const sessionsByCountryBarOptions: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: "y",

  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (ctx) => {
          const value = ctx.raw as number;
          return `Sessions: ${value.toLocaleString()}`;
        },
      },
    },
  },

  scales: {
    x: {
      ticks: {
        // beginAtZero: true,
        callback: (val) => val.toLocaleString(),
        align: "center",
      },
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};
