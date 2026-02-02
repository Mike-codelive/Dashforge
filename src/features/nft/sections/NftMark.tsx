import { Chart } from "../../../components/Chart";
import { nftMarkSeries } from "../data/nftMark";
import { nftMarkOptions } from "../data/nftMarkChartOptions";

export const NftMark = () => {
  return (
    <div className="bg-DF-surface card-shadow dark:bg-DF-bg-dark mb-5 w-full rounded-md md:mb-0">
      <div className="p-4">
        <h4 className="font-semibold">Marketplace</h4>
      </div>
      <div className="bg-DF-light-bg-subtle dark:bg-DF-dark-bg-subtle flex flex-wrap">
        <div className="flex w-1/2 flex-col items-center justify-center border border-l-0 border-dashed border-[#32383e] p-4 md:w-1/3">
          <p>8,875</p>
          <p>Aetworks</p>
        </div>
        <div className="flex w-1/2 flex-col items-center justify-center border border-r-0 border-l-0 border-dashed border-[#32383e] p-4 md:w-1/3 md:border-r">
          <p>$22.89k</p>
          <p>Auction</p>
        </div>
        <div className="flex w-1/2 flex-col items-center justify-center border border-l-0 border-dashed border-[#32383e] p-4 md:w-1/3">
          <p>367</p>
          <p>Creators</p>
        </div>
      </div>
      <div className="h-[370px] p-4">
        <Chart
          type="line"
          series={nftMarkSeries}
          options={nftMarkOptions}
          height={350}
        />
      </div>
    </div>
  );
};
