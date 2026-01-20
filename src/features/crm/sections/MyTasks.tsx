import { useState } from "react";
import { myTasks as initialTasks } from "../data/myTasks";
import { TaskItem } from "../components/TaskItem";
import type { Task } from "../data/myTasks";

export const MyTasks = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <div className="card-shadow bg-DF-surface dark:bg-DF-bg-dark mb-6 rounded-md">
      <div className="border-b border-white/5 p-4">
        <h4 className="font-semibold">My Tasks</h4>
      </div>

      <div className="flex flex-col gap-5 p-4">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggle={toggleTask} />
        ))}
      </div>
    </div>
  );
};
