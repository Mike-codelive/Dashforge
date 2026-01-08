import { Chart } from "../../../components/Chart";
import { worldGeo } from "../data/maps/worldGeo";
import { salesByLocation } from "../data/salesByLocation";
import { salesByLocationOptions } from "../data/salesByLocationOptions";

export const SalesByLocation = () => {
  return (
    <div className="bg-DF-surface dark:bg-DF-bg-dark w-full rounded-md md:w-[calc(33.333333%-12px)]">
      <div className="border-b border-white/5 p-4">
        <h4 className="font-semibold">Sales by Location</h4>
      </div>

      <div className="h-[370px] p-4">
        <Chart
          type="choropleth"
          data={salesByLocation(worldGeo)}
          options={salesByLocationOptions}
        />
      </div>
    </div>
  );
};
