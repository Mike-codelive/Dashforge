import { Chart } from "../../../components/Chart";
import { sessionsByCountryBarData } from "../data/sessionsByCountryBarData";
import { sessionsByCountryBarOptions } from "../data/sessionsByCountryBarOptions";

export const SessionsByCountries = () => {
  return (
    <div className="card-shadow bg-DF-surface dark:bg-DF-bg-dark mb-6 rounded-md">
      <div className="border-b border-white/5 p-4">
        <h4 className="font-semibold">Sessions by Countries</h4>
      </div>

      <div className="h-80 p-4">
        <Chart
          type="bar"
          data={sessionsByCountryBarData}
          options={sessionsByCountryBarOptions}
        />
      </div>
    </div>
  );
};
