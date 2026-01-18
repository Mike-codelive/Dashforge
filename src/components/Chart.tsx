import React from "react";
import ApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

type ChartProps = {
  type: "line" | "area" | "bar" | "donut" | "radialBar" | "pie" | "radar";
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  options?: ApexOptions;
  height?: number;
};

export const Chart = React.memo(
  ({ type, series, options, height = 300 }: ChartProps) => {
    const mergedOptions: ApexOptions = {
      chart: {
        type,
        height,
        toolbar: { show: false },
        zoom: { enabled: true },
        animations: { enabled: true },
      },
      stroke: { curve: "smooth" },
      dataLabels: { enabled: false },
      grid: {
        borderColor: "rgba(255,255,255,0.05)",
      },
      tooltip: { theme: "dark" },
      ...options,
    };

    return (
      <ApexChart
        type={type}
        series={series}
        options={mergedOptions}
        height={height}
      />
    );
  },
);

Chart.displayName = "Chart";
