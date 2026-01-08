export type OrderStatus = "Paid" | "Pending" | "Cancelled";

export type RecentOrder = {
  id: string;
  customer: string;
  product: string;
  amount: number;
  date: string;
  status: OrderStatus;
};
