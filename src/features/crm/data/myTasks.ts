export type Task = {
  id: string;
  title: string;
  date: string;
  completed: boolean;
};

export const myTasks: Task[] = [
  {
    id: "task-1",
    title: "Review lead pipeline",
    date: "20 Sep, 2024",
    completed: false,
  },
  {
    id: "task-2",
    title: "Prepare sales presentation",
    date: "18 Sep, 2024",
    completed: true,
  },
  {
    id: "task-3",
    title: "Follow up with potential clients",
    date: "22 Sep, 2024",
    completed: false,
  },
  {
    id: "task-4",
    title: "Update CRM records",
    date: "21 Sep, 2024",
    completed: false,
  },
  {
    id: "task-5",
    title: "Schedule weekly team meeting",
    date: "19 Sep, 2024",
    completed: true,
  },
];
