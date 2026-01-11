export type AnalyticsStat = {
  id: string;
  title: string;
  value: string;
  trend?: number;
};

export const analyticsStats: AnalyticsStat[] = [
  {
    id: "users",
    title: "Users",
    value: "32,451",
    trend: 12.5,
  },
  {
    id: "sessions",
    title: "Sessions",
    value: "48,239",
    trend: 8.2,
  },
  {
    id: "avgDuration",
    title: "Avg. Visit Duration",
    value: "3m 24s",
    trend: -1.4,
  },
  {
    id: "bounceRate",
    title: "Bounce Rate",
    value: "29.4%",
    trend: -3.1,
  },
];
