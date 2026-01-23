import { Chart } from "../../../components/Chart";
import { marketGraphData } from "../data/marketGraphData";
import { marketGraphOptions } from "../data/marketGraphOptions";

export const MarketGraph = () => {
  const series = [
    {
      name: "Price",
      data: marketGraphData,
    },
  ];

  return (
    <div className="card-shadow bg-DF-surface dark:bg-DF-bg-dark mb-6 rounded-md">
      <div className="border-b border-white/5 p-4">
        <h4 className="font-semibold">Market Graph</h4>
      </div>

      <div className="p-4">
        <Chart
          type="candlestick"
          series={series}
          options={marketGraphOptions}
          height={350}
        />
      </div>
    </div>
  );
};
