import { upcomingActivities } from "../data/upcomingActivities";
import { UpcomingActivityItem } from "../components/UpcomingActivityItem";

export const UpcomingActivities = () => {
  return (
    <div className="card-shadow bg-DF-surface dark:bg-DF-bg-dark rounded-md">
      <div className="border-b border-white/5 p-4">
        <h4 className="font-semibold">Upcoming Activities</h4>
      </div>

      <div className="p-4">
        {upcomingActivities.map((activity, index) => (
          <UpcomingActivityItem
            key={activity.id}
            activity={activity}
            isLast={index === upcomingActivities.length - 1}
          />
        ))}
      </div>
    </div>
  );
};
