import { BalanceOverview } from "./sections/BalanceOverview";
import { DealStatus } from "./sections/DealStatus";
import { DealTypeRadar } from "./sections/DealTypeRadar";
import { SalesForecast } from "./sections/SalesForecast";
import { TopStats } from "./sections/TopStats";

export const Crm = () => {
  return (
    <>
      <TopStats />
      <div className="mb-6 flex flex-wrap gap-4 md:flex-nowrap">
        <SalesForecast />
        <DealTypeRadar />
      </div>
      <BalanceOverview />
      <DealStatus />
    </>
  );
};
