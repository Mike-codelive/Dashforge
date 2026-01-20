import { DealStatusRow } from "../components/DealStatusRow";
import { products } from "../data/DealStatusRepresentatives";

export const DealStatus = () => {
  return (
    <div className="card-shadow bg-DF-surface dark:bg-DF-bg-dark mb-5 rounded-md">
      <div className="border-b border-white/5 p-4">
        <h4 className="font-semibold">Deals Status</h4>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[720px]">
          <div className="text-DF-muted grid grid-cols-12 gap-4 px-4 py-3 text-sm font-medium">
            <div className="col-span-2">Name</div>
            <div className="col-span-3 text-center">Last Contacted</div>
            <div className="col-span-3 text-center">Sales Representative</div>
            <div className="col-span-2 text-center">Status</div>
            <div className="col-span-2 text-right">Deal Value</div>
          </div>
          <div className="divide-y divide-white/5">
            {products.map((product) => (
              <DealStatusRow key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
