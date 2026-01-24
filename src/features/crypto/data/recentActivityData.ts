export interface ActivityItem {
  id: string;
  time: string;
  action: string;
  amountCrypto: string;
  amountFiat: string;
  isPositive: boolean;
  icon?: string;
}

export const recentActivityData: ActivityItem[] = [
  {
    id: "1",
    time: "14:32",
    action: "Bought Bitcoin",
    amountCrypto: "+0.0425 BTC",
    amountFiat: "+$1,248.90",
    isPositive: true,
    icon: "ri-arrow-down-circle-fill",
  },
  {
    id: "2",
    time: "11:15",
    action: "Sold Ethereum",
    amountCrypto: "-1.845 ETH",
    amountFiat: "-$3,920.45",
    isPositive: false,
    icon: "ri-arrow-up-circle-fill",
  },
  {
    id: "3",
    time: "09:48",
    action: "Received USDT",
    amountCrypto: "+2,500 USDT",
    amountFiat: "+$2,500.00",
    isPositive: true,
    icon: "ri-arrow-down-circle-fill",
  },
  {
    id: "4",
    time: "Yesterday",
    action: "Transferred BTC",
    amountCrypto: "-0.015 BTC",
    amountFiat: "-$441.20",
    isPositive: false,
    icon: "ri-arrow-left-right-line",
  },
  {
    id: "5",
    time: "Yesterday",
    action: "Bought Solana",
    amountCrypto: "+12.75 SOL",
    amountFiat: "+$1,890.30",
    isPositive: true,
    icon: "ri-arrow-down-circle-fill",
  },
  {
    id: "6",
    time: "2 days ago",
    action: "Staking Reward",
    amountCrypto: "+0.008 ETH",
    amountFiat: "+$18.75",
    isPositive: true,
    icon: "ri-gift-line",
  },
];
