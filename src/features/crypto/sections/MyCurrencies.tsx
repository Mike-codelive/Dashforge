import { Chart } from "../../../components/Chart";
import { myCurrencies } from "../data/myCurrencies";
import { getSparklineOptions } from "../data/currencySparklineOptions";

export const MyCurrencies = () => {
  return (
    <div className="card-shadow bg-DF-surface dark:bg-DF-bg-dark mb-6 rounded-md">
      <div className="border-b border-white/5 p-4">
        <h4 className="font-semibold">My Currencies</h4>
      </div>

      <div className="divide-y divide-white/5">
        {myCurrencies.map((currency) => {
          const isPositive = currency.change >= 0;

          return (
            <div
              key={currency.id}
              className="grid grid-cols-3 items-center gap-4 px-4 py-4"
            >
              <div className="flex items-center gap-3">
                <div>
                  <p className="leading-tight font-medium">{currency.name}</p>
                  <span className="text-xs text-white/50">
                    {currency.symbol}
                  </span>
                </div>
              </div>

              <div className="md:block">
                <p className="font-medium">
                  ${currency.price.toLocaleString()}
                </p>
                <span
                  className={`text-sm font-medium ${
                    isPositive ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {isPositive ? "+" : ""}
                  {currency.change}%
                </span>
              </div>

              <div className="w-[120px] justify-self-end">
                <Chart
                  type="area"
                  height={40}
                  series={[
                    {
                      name: currency.symbol,
                      data: currency.sparkline,
                    },
                  ]}
                  options={getSparklineOptions(currency.color)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
