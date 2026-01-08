import type { TopSellerCompany } from "../types/topSeller";

type Props = {
  company: TopSellerCompany;
};

export const TopSellerRow = ({ company }: Props) => {
  const isPositive = company.growth >= 0;

  return (
    <div className="grid grid-cols-12 items-center gap-4 border-b border-white/5 py-3 last:border-0">
      <div className="col-span-4">
        <p className="leading-tight font-medium">{company.name}</p>
        <span className="text-xs text-white/50">{company.industry}</span>
      </div>

      <div className="col-span-4 text-center">
        <p className="font-medium">${company.sales.toLocaleString()}</p>
      </div>

      <div className="col-span-4 text-center">
        <span
          className={`text-sm font-medium ${
            isPositive ? "text-emerald-400" : "text-red-400"
          }`}
        >
          {isPositive ? "+" : ""}
          {company.growth}%
        </span>
      </div>
    </div>
  );
};
