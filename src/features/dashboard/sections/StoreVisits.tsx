import { Chart } from "../../../components/Chart";
import { storeVisitsOptions } from "../data/storeVisitsOptions";
import { storeVisitsApexSeries } from "../data/storeVisitsApexSeries";
import { storeVisitsLegend } from "../data/storeVisitsLegend";
import { VisitSourceRow } from "../components/VisitSourceRow";

export const StoreVisits = () => {
  return (
    <div className="bg-DF-surface dark:bg-DF-bg-dark mb-5 rounded-md">
      <div className="border-b border-white/5 p-4">
        <h4 className="font-semibold">Store Visits by Source</h4>
      </div>

      <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2">
        <div className="relative h-[260px]">
          <Chart
            type="donut"
            options={storeVisitsOptions}
            series={storeVisitsApexSeries}
            height={260}
          />
        </div>

        <div className="flex flex-col justify-center gap-2">
          {storeVisitsLegend.map((item) => (
            <VisitSourceRow
              key={item.label}
              label={item.label}
              value={item.value}
              color={item.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
