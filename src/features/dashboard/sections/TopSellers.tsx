import { topSellers } from "../data/topSellers";
import { TopSellerRow } from "../components/TopSellerRow";

export const TopSellers = () => {
  return (
    <div className="bg-DF-surface dark:bg-DF-bg-dark mb-5 rounded-md">
      <div className="border-b border-white/5 p-4">
        <h4 className="font-semibold">Top Sellers</h4>
      </div>

      <div className="text-DF-muted grid grid-cols-12 gap-4 px-4 py-3 text-sm font-medium">
        <div className="col-span-4">Company</div>
        <div className="col-span-4 text-center">Sales</div>
        <div className="col-span-4 text-center">Growth</div>
      </div>

      <div className="p-4">
        {topSellers.map((company) => (
          <TopSellerRow key={company.id} company={company} />
        ))}
      </div>
    </div>
  );
};
