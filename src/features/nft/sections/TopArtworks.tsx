import { Chart } from "../../../components/Chart";
import { nftCardData } from "../data/nftCardData";
import { sparklineOptions } from "../data/sparklineOptions";

export function TopArtworks() {
  return (
    <section className="my-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Top Artworks
        </h2>
        <a href="#" className="text-sm text-indigo-600 hover:underline">
          See All
        </a>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {nftCardData.map((currency) => {
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
                  options={sparklineOptions(currency.color)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
