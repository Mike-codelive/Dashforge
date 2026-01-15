import type { EChartsOption, MapSeriesOption } from "echarts";

export const salesByLocationOptions: EChartsOption & {
  series: MapSeriesOption[];
} = {
  tooltip: {
    trigger: "item",
    formatter: "{b}: {c}",
  },

  visualMap: {
    min: 0,
    max: 10000,
    left: "left",
    bottom: 20,
    calculable: true,
  },

  series: [
    {
      type: "map",
      map: "world",
      roam: true,
      emphasis: {
        label: { show: false },
      },
      data: [],
    },
  ],
};
