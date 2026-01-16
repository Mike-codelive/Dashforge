import { LiveUsersByCountry } from "./components/LiveUsersByCountry";
import { AnalyticsStats } from "./sections/AnalyticsStats";
import { AudienceMetrics } from "./sections/AudienceMetrics";
import { SessionsByCountries } from "./sections/SessionsByCountries";
import { TopPages } from "./sections/TopPages";
import { TopReferralsPages } from "./sections/TopReferralsPages";
import { TrialUpgrade } from "./sections/TrialUpgrade";
import { UsersByDevice } from "./sections/UsersByDevice";

export const Analitics = () => {
  return (
    <>
      <TrialUpgrade />
      <AnalyticsStats />
      <LiveUsersByCountry />
      <SessionsByCountries />
      <AudienceMetrics />
      <div className="gap-4 md:flex md:items-start">
        <UsersByDevice />
        <TopReferralsPages />
        <TopPages />
      </div>
    </>
  );
};
