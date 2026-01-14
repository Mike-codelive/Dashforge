import type { ApexOptions } from "apexcharts";

export const revenueOptions: ApexOptions = {
  chart: {
    type: "line",
    toolbar: { show: false },
    redrawOnParentResize: true,
    redrawOnWindowResize: true,
  },

  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },

  stroke: {
    width: [3, 3, 3],
    curve: "smooth",
  },

  plotOptions: {
    bar: {
      columnWidth: "45%",
      borderRadius: 6,
    },
  },

  colors: ["#f59e0b", "#4f46e5", "#22c55e"],

  legend: {
    position: "top",
    labels: {
      colors: "#9ca3af",
    },
  },

  dataLabels: { enabled: false },
};
