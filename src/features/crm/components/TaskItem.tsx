import { useId } from "react";
import type { Task } from "../data/myTasks";

type Props = {
  task: Task;
  onToggle: (id: string) => void;
};

export const TaskItem = ({ task, onToggle }: Props) => {
  const checkboxId = useId();

  return (
    <div className="flex items-start gap-3">
      <input
        id={checkboxId}
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="mt-1 h-4 w-4 rounded border-white/20 bg-transparent text-indigo-500 focus:ring-0"
      />

      <label htmlFor={checkboxId} className="flex flex-col gap-0.5">
        <span
          className={`text-sm font-medium transition ${
            task.completed ? "text-DF-muted line-through" : "text-white"
          }`}
        >
          {task.title}
        </span>

        <span className="text-DF-muted text-xs">{task.date}</span>
      </label>
    </div>
  );
};
