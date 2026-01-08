import { BestSellingProductRow } from "../components/BestSellingProductRow";
import { products } from "../data/bestSellingProducts";

export const BestSelling = () => {
  return (
    <div className="bg-DF-surface dark:bg-DF-bg-dark mb-5 rounded-md">
      <div className="border-b border-white/5 p-4">
        <h4 className="font-semibold">Best Selling Products</h4>
      </div>

      <div className="text-DF-muted grid grid-cols-12 gap-4 px-4 py-3 text-sm font-medium">
        <div className="col-span-4">Product</div>
        <div className="col-span-2 text-center">Price</div>
        <div className="col-span-2 text-center">Orders</div>
        <div className="col-span-2 text-center">Stock</div>
        <div className="col-span-2 text-right">Amount</div>
      </div>

      <div className="divide-y divide-white/5">
        {products.map((product) => (
          <BestSellingProductRow key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
