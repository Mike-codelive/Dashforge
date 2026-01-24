import type { ApexOptions } from "apexcharts";

export const myPortfolioOptions: ApexOptions = {
  chart: {
    type: "donut",
  },

  legend: {
    show: false,
  },

  dataLabels: {
    enabled: false,
  },

  plotOptions: {
    pie: {
      donut: {
        size: "70%",
        labels: {
          show: true,
          total: {
            show: true,
            label: "Total Value",
            fontSize: "14px",
            color: "#9ca3af",
            formatter: () => "$40,200",
          },
        },
      },
    },
  },

  stroke: {
    width: 0,
  },

  tooltip: {
    theme: "dark",
    y: {
      formatter: (value: number) => `${value}%`,
    },
  },
};
