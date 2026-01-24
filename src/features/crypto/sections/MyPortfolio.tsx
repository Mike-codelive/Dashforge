import { Chart } from "../../../components/Chart";
import { myPortfolioData } from "../data/myPortfolioData";
import { myPortfolioOptions } from "../data/myPortfolioOptions";

export const MyPortfolio = () => {
  return (
    <div className="card-shadow bg-DF-surface dark:bg-DF-bg-dark mb-6 rounded-md">
      <div className="border-b border-white/5 p-4">
        <h4 className="font-semibold">My Portfolio</h4>
      </div>

      <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
        <div className="relative h-[260px]">
          <Chart
            type="donut"
            height={260}
            series={myPortfolioData.map((d) => d.value)}
            options={{
              ...myPortfolioOptions,
              labels: myPortfolioData.map((d) => d.label),
              colors: myPortfolioData.map((d) => d.color),
            }}
          />
        </div>

        <div className="flex flex-col justify-center gap-4">
          {myPortfolioData.map((item) => (
            <div key={item.label} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm">{item.label}</span>
              </div>

              <div className="text-right">
                <p className="font-medium">{item.amount}</p>
                <span className="text-DF-muted text-xs">{item.value}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
