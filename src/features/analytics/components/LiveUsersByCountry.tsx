import { MapChart } from "../../../components/MapChart";
import { liveUsersByCountry } from "../data/liveUsersByCountry";
import { liveUsersByCountryOptions } from "../data/liveUsersByCountryOptions";
import type { EChartsOption, MapSeriesOption } from "echarts";

export const LiveUsersByCountry = () => {
  const baseSeries = Array.isArray(liveUsersByCountryOptions.series)
    ? (liveUsersByCountryOptions.series[0] as MapSeriesOption)
    : undefined;

  const options: EChartsOption = {
    ...liveUsersByCountryOptions,
    series: [
      {
        ...baseSeries,
        type: "map",
        map: "world",
        data: liveUsersByCountry,
      } satisfies MapSeriesOption,
    ],
  };

  return (
    <div className="card-shadow bg-DF-surface dark:bg-DF-bg-dark mb-6 rounded-md">
      <div className="flex items-center justify-between border-b border-white/5 p-4">
        <h4 className="font-semibold">Live Users By Country</h4>
        <span className="text-DF-muted text-sm">Realtime</span>
      </div>

      <div className="h-[420px] p-4">
        <MapChart options={options} height={380} />
      </div>
    </div>
  );
};
