import type { ApexOptions } from "apexcharts";

export const sessionsByCountryBarOptions: ApexOptions = {
  chart: {
    type: "bar",
    toolbar: { show: false },
  },

  plotOptions: {
    bar: {
      borderRadius: 6,
      columnWidth: "45%",
    },
  },

  xaxis: {
    categories: ["USA", "Germany", "UK", "Canada", "France"],
    labels: {
      style: {
        colors: "#9ca3af",
        fontSize: "12px",
      },
    },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },

  yaxis: {
    labels: {
      style: {
        colors: "#9ca3af",
        fontSize: "12px",
      },
    },
  },

  grid: {
    borderColor: "rgba(255,255,255,0.05)",
    padding: {
      left: 8,
      right: 8,
      bottom: 0,
    },
  },

  tooltip: {
    theme: "dark",
  },

  colors: ["#4f46e5"],
};
