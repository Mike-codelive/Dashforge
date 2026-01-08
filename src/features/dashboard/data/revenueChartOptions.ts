import type { ChartOptions } from "chart.js";

export const revenueChartOptions: ChartOptions<"bar" | "line"> = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: true,
      position: "bottom",

      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        boxWidth: 8,
        boxHeight: 8,
        padding: 16,
        color: "#94a3b8",
        font: {
          size: 12,
          weight: 500,
        },
      },

      onHover: (event) => {
        const target = event?.native?.target as HTMLCanvasElement | undefined;
        if (target) {
          target.style.cursor = "pointer";
        }
      },

      onLeave: (event) => {
        const target = event?.native?.target as HTMLCanvasElement | undefined;
        if (target) {
          target.style.cursor = "default";
        }
      },
    },

    tooltip: {
      mode: "index",
      intersect: false,
    },

    zoom: {
      pan: {
        enabled: true,
        mode: "x",
      },
      zoom: {
        wheel: {
          enabled: true,
        },
        pinch: {
          enabled: true,
        },
        mode: "x",
      },
    },
  },

  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        color: "rgba(148,163,184,0.15)",
      },
      ticks: {
        callback: (value) => `$${value}k`,
      },
    },
  },
};
