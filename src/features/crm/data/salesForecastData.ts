import type { ApexOptions } from "apexcharts";

export const salesForecastSeries = [
  {
    name: "Target",
    data: [
      30000, 32000, 35000, 38000, 42000, 45000, 48000, 52000, 55000, 58000,
      62000, 65000,
    ],
  },
  {
    name: "Sales",
    data: [
      28000, 31000, 34000, 39000, 41000, 43000, 50000, 53000, 54000, 57000,
      61000, 64000,
    ],
  },
];

export const salesForecastOptions: ApexOptions = {
  chart: {
    type: "area",
    height: 350,
    toolbar: { show: false },
    zoom: { enabled: true },
    animations: { enabled: true },
  },
  colors: ["#6c757d", "#0ab39c"],
  dataLabels: { enabled: false },
  stroke: {
    curve: "smooth",
    width: [2, 3],
    dashArray: [8, 0],
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.5,
      opacityTo: 0.1,
      stops: [0, 90, 100],
    },
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
    axisBorder: { show: false },
    axisTicks: { show: false },
    labels: {
      style: {
        colors: "#64748b",
      },
    },
  },
  yaxis: {
    title: { text: "Revenue ($)" },
    labels: {
      formatter: (val: number) => `$${val.toLocaleString()}`,
      style: { colors: "#64748b" },
    },
  },
  legend: {
    position: "bottom",
    horizontalAlign: "center",
  },
  tooltip: {
    theme: "dark",
    y: {
      formatter: (val: number) => `$${val.toLocaleString()}`,
    },
  },
  grid: {
    borderColor: "rgba(255,255,255,0.08)",
    strokeDashArray: 4,
  },
  markers: { size: 0 },
};
