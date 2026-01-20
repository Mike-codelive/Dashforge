import { BalanceOverview } from "./sections/BalanceOverview";
import { DealStatus } from "./sections/DealStatus";
import { DealTypeRadar } from "./sections/DealTypeRadar";
import { MyTasks } from "./sections/MyTasks";
import { SalesForecast } from "./sections/SalesForecast";
import { TopStats } from "./sections/TopStats";
import { UpcomingActivities } from "./sections/UpcomingActivities";

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
      <MyTasks />
      <UpcomingActivities />
    </>
  );
};
