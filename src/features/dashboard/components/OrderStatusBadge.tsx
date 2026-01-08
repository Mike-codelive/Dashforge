import type { OrderStatus } from "../types/recentOrder";

type Props = {
  status: OrderStatus;
};

const STATUS_STYLES: Record<OrderStatus, string> = {
  Paid: "bg-emerald-500/15 text-emerald-400",
  Pending: "bg-amber-500/15 text-amber-400",
  Cancelled: "bg-red-500/15 text-red-400",
};

export const OrderStatusBadge = ({ status }: Props) => {
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-medium ${STATUS_STYLES[status]}`}
    >
      {status}
    </span>
  );
};
