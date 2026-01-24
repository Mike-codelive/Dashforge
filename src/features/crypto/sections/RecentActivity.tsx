// src/features/crypto/sections/RecentActivity.tsx
import { recentActivityData } from "../data/recentActivityData";

export const RecentActivity = () => {
  return (
    <div className="card bg-DF-surface dark:bg-DF-bg-dark border-DF-border/10 mb-6 flex h-full flex-col overflow-hidden rounded-lg border shadow-lg dark:border-white/5">
      {/* Header */}
      <div className="border-DF-border/10 flex items-center justify-between border-b px-5 py-4 dark:border-white/5">
        <h5 className="text-DF-text mb-0 text-lg font-semibold dark:text-white">
          Recent Activity
        </h5>

        {/* Simple filter dropdown simulation (like Velzon often has) */}
        <select className="bg-DF-surface dark:bg-DF-bg-dark border-DF-border/20 text-DF-muted focus:ring-DF-primary rounded border px-3 py-1.5 text-sm focus:ring-1 focus:outline-none">
          <option>Current Week</option>
          <option>Today</option>
          <option>Last Week</option>
          <option>Last Month</option>
        </select>
      </div>

      {/* Scrollable list */}
      <div className="max-h-[420px] flex-1 overflow-y-auto">
        <div className="divide-DF-border/10 divide-y dark:divide-white/5">
          {recentActivityData.map((item) => (
            <div
              key={item.id}
              className="hover:bg-DF-bg-hover/50 px-5 py-4 transition-colors dark:hover:bg-white/5"
            >
              <div className="flex items-center justify-between gap-4">
                {/* Left: time + action */}
                <div className="flex items-start gap-3">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg ${
                      item.isPositive
                        ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                    } `}
                  >
                    <i
                      className={`${item.icon || (item.isPositive ? "ri-arrow-down-circle-fill" : "ri-arrow-up-circle-fill")}`}
                    ></i>
                  </div>

                  <div>
                    <p className="text-DF-text font-medium dark:text-white">
                      {item.action}
                    </p>
                    <p className="text-DF-muted mt-0.5 text-sm">{item.time}</p>
                  </div>
                </div>

                {/* Right: amounts */}
                <div className="text-right">
                  <p
                    className={`font-medium ${item.isPositive ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
                  >
                    {item.amountCrypto}
                  </p>
                  <p className="text-DF-muted mt-0.5 text-sm">
                    {item.amountFiat}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional footer - "View All" link */}
      <div className="border-DF-border/10 border-t px-5 py-3 text-center dark:border-white/5">
        <button className="text-DF-primary hover:text-DF-primary-dark text-sm font-medium transition-colors">
          View All Activities →
        </button>
      </div>
    </div>
  );
};
