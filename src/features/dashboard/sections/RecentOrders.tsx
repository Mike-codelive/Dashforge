import { recentOrders } from "../data/recentOrders";
import { RecentOrderRow } from "../components/RecentOrderRow";

export const RecentOrders = () => {
  return (
    <div className="bg-DF-surface dark:bg-DF-bg-dark rounded-md">
      <div className="border-b border-white/5 p-4">
        <h4 className="font-semibold">Recent Orders</h4>
      </div>

      <div className="text-DF-muted grid grid-cols-12 gap-4 px-4 py-3 text-sm font-medium">
        <div className="col-span-2">Order ID</div>
        <div className="col-span-3">Customer</div>
        <div className="col-span-3">Product</div>
        <div className="col-span-2">Amount</div>
        <div className="col-span-2">Status</div>
      </div>

      <div className="px-4">
        {recentOrders.map((order) => (
          <RecentOrderRow key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};
