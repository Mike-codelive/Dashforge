import type { ApexOptions } from "apexcharts";

export const storeVisitsOptions: ApexOptions = {
  chart: {
    type: "donut",
    toolbar: { show: false },
  },

  labels: ["Direct", "Referral", "Social", "Email", "Other"],

  colors: ["#4f46e5", "#22c55e", "#f59e0b", "#ef4444", "#94a3b8"],

  legend: {
    show: false,
  },

  plotOptions: {
    pie: {
      donut: {
        size: "70%",
      },
    },
  },

  dataLabels: {
    enabled: true,
    style: {
      fontSize: "12px",
      fontWeight: 600,
      colors: ["#ffffff"],
    },
    dropShadow: {
      enabled: false,
    },
    formatter: (
      value: number,
      {
        w,
      }: {
        seriesIndex: number;
        w: {
          globals: {
            seriesTotals: number[];
          };
        };
      },
    ): string => {
      const total = w.globals.seriesTotals.reduce(
        (sum: number, current: number) => sum + current,
        0,
      );

      const percent = ((value / total) * 100).toFixed(1);
      return `${percent}%`;
    },
  },

  tooltip: {
    custom: ({
      series,
      seriesIndex,
      w,
    }: {
      series: number[];
      seriesIndex: number;
      w: {
        globals: {
          labels: string[];
          seriesTotals: number[];
        };
      };
    }): string => {
      const label = w.globals.labels[seriesIndex];
      const value = series[seriesIndex];
      const total = w.globals.seriesTotals.reduce(
        (sum: number, current: number) => sum + current,
        0,
      );

      const percent = ((value / total) * 100).toFixed(1);

      return `
        <div style="
          padding: 8px 10px;
          background: #111827;
          color: #fff;
          border-radius: 6px;
          font-size: 12px;
        ">
          <strong>${label}</strong><br />
          ${percent}%
        </div>
      `;
    },
  },

  stroke: {
    width: 0,
  },
};
