import type { BestSellingProduct } from "../types/bestSelling";

export const products: BestSellingProduct[] = [
  {
    id: "1",
    name: "Nebula Smartwatch X",
    category: "Electronics",
    price: 149,
    orders: 84,
    stock: "in",
    amount: 12516,
  },
  {
    id: "2",
    name: "Aurora Noise-Cancel Headphones",
    category: "Audio",
    price: 199,
    orders: 57,
    stock: "low",
    amount: 11343,
  },
  {
    id: "3",
    name: "Atlas Performance Sneakers",
    category: "Footwear",
    price: 89,
    orders: 102,
    stock: "in",
    amount: 9078,
  },
  {
    id: "4",
    name: "Lumen RGB Mechanical Keyboard",
    category: "Accessories",
    price: 129,
    orders: 41,
    stock: "out",
    amount: 5289,
  },
  {
    id: "5",
    name: "EchoFit Training Backpack",
    category: "Fitness",
    price: 59,
    orders: 76,
    stock: "in",
    amount: 4484,
  },
];
