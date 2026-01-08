import type { ChartOptions, TooltipItem } from "chart.js";

type ChoroplethRaw = {
  value: number;
};

export const salesByLocationOptions: ChartOptions<"choropleth"> = {
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
      },
    },
  },

  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (ctx: TooltipItem<"choropleth">) => {
          const raw = ctx.raw as ChoroplethRaw;
          return `Sales: $${raw.value.toLocaleString()}`;
        },
      },
    },
  },
};
