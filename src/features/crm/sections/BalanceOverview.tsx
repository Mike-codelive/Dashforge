import { Chart } from "../../../components/Chart";
import {
  balanceOverviewOptions,
  balanceOverviewSeries,
} from "../data/balanceOverview";

export const BalanceOverview = () => {
  return (
    <div className="card-shadow bg-DF-surface dark:bg-DF-bg-dark rounded-md">
      <div className="flex items-center justify-between border-b border-white/5 p-4">
        <h4 className="font-semibold">Balance Overview</h4>
      </div>

      <div className="h-[360px] p-4">
        <Chart
          type="area"
          series={balanceOverviewSeries}
          options={balanceOverviewOptions}
          height={320}
        />
      </div>
    </div>
  );
};
