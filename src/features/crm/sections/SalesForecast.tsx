import { Chart } from "../../../components/Chart";
import {
  salesForecastSeries,
  salesForecastOptions,
} from "../data/salesForecastData";

export const SalesForecast = () => {
  return (
    <div className="bg-DF-surface dark:bg-DF-bg-dark border-DF-border/10 w-full overflow-hidden rounded-lg border shadow-lg md:w-2/3 dark:border-white/5">
      <div className="border-DF-border/10 flex items-center justify-between border-b px-5 py-4 dark:border-white/5">
        <h5 className="text-DF-text mb-0 text-lg font-semibold">
          Sales Forecast
        </h5>
      </div>

      <div className="h-[400px] p-4">
        <Chart
          type="area"
          series={salesForecastSeries}
          options={salesForecastOptions}
          height={350}
        />
      </div>
    </div>
  );
};
