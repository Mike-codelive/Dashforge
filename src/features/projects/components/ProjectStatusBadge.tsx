type Props = {
  status: "Active" | "Pending" | "Completed";
};

const statusStyles: Record<Props["status"], string> = {
  Active: "bg-emerald-500/10 text-emerald-400",
  Pending: "bg-amber-500/10 text-amber-400",
  Completed: "bg-indigo-500/10 text-indigo-400",
};

export const ProjectStatusBadge = ({ status }: Props) => {
  return (
    <span
      className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
};
