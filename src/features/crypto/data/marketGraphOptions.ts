import type { ApexOptions } from "apexcharts";

export const marketGraphOptions: ApexOptions = {
  chart: {
    type: "candlestick",
    toolbar: { show: false },
    zoom: { enabled: true },
    foreColor: "#9ca3af",
  },

  tooltip: {
    theme: "dark",
    shared: true,
    x: { format: "dd MMM yyyy" },
  },

  xaxis: {
    type: "datetime",
    labels: {
      style: {
        colors: "#9ca3af",
        fontSize: "12px",
      },
    },
  },

  yaxis: {
    labels: {
      formatter: (val) => `$${val.toFixed(0)}`,
      style: {
        colors: "#9ca3af",
        fontSize: "12px",
      },
    },
    tooltip: { enabled: true },
  },

  plotOptions: {
    candlestick: {
      colors: {
        upward: "#22c55e",
        downward: "#ef4444",
      },
      wick: {
        useFillColor: true,
      },
    },
  },

  grid: {
    borderColor: "rgba(255,255,255,0.06)",
    strokeDashArray: 4,
  },
};
