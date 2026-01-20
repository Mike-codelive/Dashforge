import type { UpcomingActivity } from "../data/upcomingActivities";

type Props = {
  activity: UpcomingActivity;
  isLast: boolean;
};

export const UpcomingActivityItem = ({ activity, isLast }: Props) => {
  return (
    <div className="relative flex gap-4">
      <div className="relative flex flex-col items-center">
        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500" />
        {!isLast && <span className="mt-1 w-px flex-1 bg-white/10" />}
      </div>

      <div className="flex flex-1 flex-col gap-1 pb-6">
        <div className="flex items-center justify-between">
          <h6 className="text-sm font-medium">{activity.title}</h6>
          <span className="text-DF-muted text-xs whitespace-nowrap">
            {activity.time}
          </span>
        </div>

        <p className="text-DF-muted text-xs">{activity.description}</p>

        <span className="text-DF-muted text-xs">{activity.date}</span>
      </div>
    </div>
  );
};
