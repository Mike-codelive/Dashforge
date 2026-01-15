import ReactECharts from "echarts-for-react";
import type { EChartsOption } from "echarts";

type MapChartProps = {
  options: EChartsOption;
  height?: number;
};

export function MapChart({ options, height = 350 }: MapChartProps) {
  return (
    <ReactECharts
      option={options}
      style={{ height }}
      opts={{ renderer: "canvas" }}
      notMerge
      lazyUpdate
    />
  );
}
