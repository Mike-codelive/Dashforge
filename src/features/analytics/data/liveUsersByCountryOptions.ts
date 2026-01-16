import type { EChartsOption } from "echarts";

export const liveUsersByCountryOptions: EChartsOption = {
  tooltip: {
    trigger: "item",
    formatter: "{b}: {c}",
  },

  visualMap: {
    min: 0,
    max: 1500,
    calculable: false,
    orient: "horizontal",
    left: "center",
    bottom: 10,
    inRange: {
      color: ["#1f2933", "#4f46e5"],
    },
    textStyle: {
      color: "#9ca3af",
    },
  },

  series: [
    {
      type: "map",
      map: "world",
      roam: false,
      emphasis: {
        label: { show: false },
      },
    },
  ],
};
