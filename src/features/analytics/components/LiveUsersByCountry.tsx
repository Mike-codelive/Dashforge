import { Chart } from "../../../components/Chart";
import { worldGeo } from "../../dashboard/data/maps/worldGeo";
import { liveUsersByCountry } from "../data/liveUsersByCountry";
import { liveUsersByCountryOptions } from "../data/liveUsersByCountryOptions";

export const LiveUsersByCountry = () => {
  return (
    <div className="card-shadow bg-DF-surface dark:bg-DF-bg-dark mb-6 rounded-md">
      <div className="flex items-center justify-between border-b border-white/5 p-4">
        <h4 className="font-semibold">Live Users By Country</h4>
        <span className="text-DF-muted text-sm">Realtime</span>
      </div>

      <div className="h-[420px] p-4">
        <Chart
          type="choropleth"
          data={liveUsersByCountry(worldGeo)}
          options={liveUsersByCountryOptions}
        />
      </div>
    </div>
  );
};
