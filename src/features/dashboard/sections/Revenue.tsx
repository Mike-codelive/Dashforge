import { Chart } from "../../../components/Chart";
import { revenueSeries } from "../data/revenueChartData";
import { revenueOptions } from "../data/revenueChartOptions";

export const Revenue = () => {
  return (
    <div className="bg-DF-surface dark:bg-DF-bg-dark mb-5 w-full rounded-md md:mb-0 md:w-[calc(66.666667%-12px)]">
      <div className="p-4">
        <h4 className="font-semibold">Revenue</h4>
      </div>
      <div className="bg-DF-light-bg-subtle dark:bg-DF-dark-bg-subtle flex flex-wrap">
        <div className="flex w-1/2 flex-col items-center justify-center border border-l-0 border-dashed border-[#32383e] p-4 md:w-1/4">
          <p>8,875</p>
          <p>Orders</p>
        </div>
        <div className="flex w-1/2 flex-col items-center justify-center border border-r-0 border-l-0 border-dashed border-[#32383e] p-4 md:w-1/4 md:border-r">
          <p>$22.89k</p>
          <p>Earnings</p>
        </div>
        <div className="flex w-1/2 flex-col items-center justify-center border border-l-0 border-dashed border-[#32383e] p-4 md:w-1/4">
          <p>367</p>
          <p>Refunds</p>
        </div>
        <div className="flex w-1/2 flex-col items-center justify-center border border-r-0 border-dashed border-[#32383e] p-4 md:w-1/4">
          <p className="text-DF-green">18.92%</p>
          <p className="text-center">Conversation Ratio</p>
        </div>
      </div>
      <div className="h-[370px] p-4">
        <Chart
          type="line"
          series={revenueSeries}
          options={revenueOptions}
          height={350}
        />
      </div>
    </div>
  );
};
