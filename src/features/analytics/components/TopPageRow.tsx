import type { TopPage } from "../types/topPage";

type Props = {
  page: TopPage;
};

export const TopPageRow = ({ page }: Props) => {
  const isHighBounce = page.bounceRate >= 45;

  return (
    <div className="grid grid-cols-12 items-center gap-4 py-3 text-sm">
      <div className="col-span-4 font-medium">{page.page}</div>

      <div className="col-span-3 text-center">
        {page.views.toLocaleString()}
      </div>

      <div
        className={`col-span-2 text-center font-medium ${
          isHighBounce ? "text-red-400" : "text-emerald-400"
        }`}
      >
        {page.bounceRate}%
      </div>

      <div className="col-span-3 text-center text-white/60">{page.avgTime}</div>
    </div>
  );
};
