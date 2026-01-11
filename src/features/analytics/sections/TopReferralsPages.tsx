import { topReferrals } from "../data/topReferrals";
import { TopReferralRow } from "../components/TopReferralRow";

export const TopReferralsPages = () => {
  return (
    <div className="card-shadow bg-DF-surface dark:bg-DF-bg-dark mb-6 inline-block max-h-[432px] w-full rounded-md md:w-1/3">
      <div className="border-b border-white/5 p-4">
        <h4 className="font-semibold">Top Referrals Pages</h4>
      </div>

      <div className="divide-y divide-white/5 p-4">
        {topReferrals.map((referral) => (
          <TopReferralRow key={referral.id} referral={referral} />
        ))}
      </div>
    </div>
  );
};
