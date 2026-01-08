export type BestSellingProduct = {
  id: string;
  name: string;
  category: string;
  image?: string;
  price: number;
  orders: number;
  stock: "in" | "out" | "low";
  amount: number;
};
