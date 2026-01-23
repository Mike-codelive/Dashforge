export type Currency = {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change: number;
  icon: string;
  color: string;
  sparkline: number[];
};

export const myCurrencies: Currency[] = [
  {
    id: "btc",
    name: "Bitcoin",
    symbol: "BTC",
    price: 37852.45,
    change: 2.45,
    icon: "/icons/crypto/btc.svg",
    color: "#f59e0b",
    sparkline: [32000, 33000, 32500, 34000, 35000, 36000, 37852],
  },
  {
    id: "eth",
    name: "Ethereum",
    symbol: "ETH",
    price: 2145.12,
    change: -1.12,
    icon: "/icons/crypto/eth.svg",
    color: "#6366f1",
    sparkline: [2200, 2180, 2190, 2150, 2140, 2130, 2145],
  },
  {
    id: "bnb",
    name: "BNB",
    symbol: "BNB",
    price: 312.88,
    change: 3.98,
    icon: "/icons/crypto/bnb.svg",
    color: "#fbbf24",
    sparkline: [270, 275, 280, 290, 300, 305, 312],
  },
  {
    id: "sol",
    name: "Solana",
    symbol: "SOL",
    price: 102.34,
    change: -0.86,
    icon: "/icons/crypto/sol.svg",
    color: "#22c55e",
    sparkline: [95, 98, 97, 99, 101, 100, 102],
  },
];
