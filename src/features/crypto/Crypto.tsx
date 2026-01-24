import { MarketGraph } from "./sections/MarketGraph";
import { MyCurrencies } from "./sections/MyCurrencies";
import { MyPortfolio } from "./sections/MyPortfolio";
import { PerformanceMetrics } from "./sections/PerformanceMetrics";
import { RecentActivity } from "./sections/RecentActivity";

export const Crypto = () => {
  return (
    <>
      <PerformanceMetrics />
      <MarketGraph />
      <MyCurrencies />
      <MyPortfolio />
      <RecentActivity />
    </>
  );
};
