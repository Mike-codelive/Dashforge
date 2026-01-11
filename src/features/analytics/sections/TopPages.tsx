import { topPages } from "../data/topPages";
import { TopPageRow } from "../components/TopPageRow";

export const TopPages = () => {
  return (
    <div className="card-shadow bg-DF-surface dark:bg-DF-bg-dark inline-block max-h-[432px] w-full rounded-md md:w-1/3">
      <div className="border-b border-white/5 p-4">
        <h4 className="font-semibold">Top Pages</h4>
      </div>

      <div className="text-DF-muted grid grid-cols-12 gap-4 px-4 py-3 text-xs font-medium uppercase">
        <div className="col-span-4">Page</div>
        <div className="col-span-3 text-center">Views</div>
        <div className="col-span-2 text-center">Bounce Rate</div>
        <div className="col-span-3 text-center">Avg Time</div>
      </div>

      <div className="divide-y divide-white/5 px-4">
        {topPages.map((page) => (
          <TopPageRow key={page.id} page={page} />
        ))}
      </div>
    </div>
  );
};
