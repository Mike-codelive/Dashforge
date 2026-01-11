import type { TopReferral } from "../types/topReferral";

type Props = {
  referral: TopReferral;
};

export const TopReferralRow = ({ referral }: Props) => {
  return (
    <div className="space-y-2 py-3">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{referral.page}</span>
        <span className="text-white/60">
          {referral.visitors.toLocaleString()}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-indigo-500 transition-all"
            style={{ width: `${referral.percentage}%` }}
          />
        </div>
        <span className="w-10 text-right text-xs font-medium">
          {referral.percentage}%
        </span>
      </div>
    </div>
  );
};
