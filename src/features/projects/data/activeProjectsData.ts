export type ActiveProject = {
  id: string;
  name: string;
  client: string;
  progress: number;
  status: "Active" | "Pending" | "Completed";
};

export const activeProjectsData: ActiveProject[] = [
  {
    id: "1",
    name: "Dashboard Redesign",
    client: "Acme Corp",
    progress: 72,
    status: "Active",
  },
  {
    id: "2",
    name: "Mobile App",
    client: "Globex",
    progress: 45,
    status: "Pending",
  },
  {
    id: "3",
    name: "CRM Integration",
    client: "Initech",
    progress: 90,
    status: "Active",
  },
  {
    id: "4",
    name: "Landing Page",
    client: "Umbrella",
    progress: 100,
    status: "Completed",
  },
];
