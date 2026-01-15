import { MapChart } from "../../../components/MapChart";
import { salesByLocationData } from "../data/salesByLocationData";
import { salesByLocationOptions } from "../data/salesByLocationOptions";

import type { EChartsOption } from "echarts";

export const SalesByLocation = () => {
  const options: EChartsOption = {
    ...salesByLocationOptions,
    series: [
      {
        ...salesByLocationOptions.series[0],
        data: salesByLocationData,
      },
    ],
  };

  return (
    <div className="bg-DF-surface dark:bg-DF-bg-dark w-full rounded-md md:w-[calc(33.333333%-12px)]">
      <div className="border-b border-white/5 p-4">
        <h4 className="font-semibold">Sales by Location</h4>
      </div>

      <div className="h-[370px] p-4">
        <MapChart options={options} height={350} />
      </div>
    </div>
  );
};
