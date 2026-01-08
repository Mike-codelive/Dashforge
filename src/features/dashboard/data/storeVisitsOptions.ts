import type { ChartOptions } from "chart.js";

export const storeVisitsOptions: ChartOptions<"doughnut"> = {
  responsive: true,
  maintainAspectRatio: false,

  cutout: "70%",

  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (ctx) => {
          const value = ctx.raw as number;
          const total = ctx.dataset.data.reduce((a, b) => a + (b as number), 0);
          const percent = ((value / total) * 100).toFixed(1);
          return `${ctx.label}: ${percent}%`;
        },
      },
    },
  },
};
