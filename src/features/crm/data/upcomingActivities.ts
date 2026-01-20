export type UpcomingActivity = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
};

export const upcomingActivities: UpcomingActivity[] = [
  {
    id: "activity-1",
    title: "Meeting with Sales Team",
    description: "Discuss quarterly targets and pipeline",
    date: "21 Sep, 2024",
    time: "10:30 AM",
  },
  {
    id: "activity-2",
    title: "Call with Potential Client",
    description: "Product demo and pricing discussion",
    date: "22 Sep, 2024",
    time: "02:00 PM",
  },
  {
    id: "activity-3",
    title: "CRM Data Review",
    description: "Audit and update lead records",
    date: "23 Sep, 2024",
    time: "09:00 AM",
  },
  {
    id: "activity-4",
    title: "Marketing Sync",
    description: "Align on upcoming campaign strategy",
    date: "24 Sep, 2024",
    time: "11:45 AM",
  },
];
