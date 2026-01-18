import { Chart } from "../../../components/Chart";
import { dealTypeOptions, dealTypeSeries } from "../data/dealTypeRadar";

export const DealTypeRadar = () => {
  return (
    <div className="card-shadow bg-DF-surface dark:bg-DF-bg-dark w-full rounded-md md:w-1/3">
      <div className="border-b border-white/5 p-4">
        <h4 className="font-semibold">Deal Type</h4>
      </div>

      <div className="h-[350px] p-4">
        <Chart
          type="radar"
          series={dealTypeSeries}
          options={dealTypeOptions}
          height={300}
        />
      </div>
    </div>
  );
};
