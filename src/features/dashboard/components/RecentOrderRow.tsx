import type { RecentOrder } from "../types/recentOrder";
import { OrderStatusBadge } from "./OrderStatusBadge";

type Props = {
  order: RecentOrder;
};

export const RecentOrderRow = ({ order }: Props) => {
  return (
    <div className="grid grid-cols-12 items-center gap-4 border-b border-white/5 py-3 text-sm last:border-0">
      <div className="col-span-2 font-medium">{order.id}</div>

      <div className="col-span-3">{order.customer}</div>

      <div className="col-span-3 text-white/70">{order.product}</div>

      <div className="col-span-2 font-medium">
        ${order.amount.toLocaleString()}
      </div>

      <div className="col-span-2">
        <OrderStatusBadge status={order.status} />
      </div>
    </div>
  );
};
