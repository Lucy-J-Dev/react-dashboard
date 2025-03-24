import { useState } from "react";
import TodoForm from "../components/Todo/TodoForm";
import Title from "../ui/Title";
import TaskItem from "../components/Todo/TaskItem";

export type Task = {
  id: string;
  text: string;
  complete: boolean;
};

const TodoAppPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (task: Task) => {
    setTasks([task, ...tasks]);
  };

  const handleDeleteTask = (id: string) => {
    const tasksToMaintain = tasks.filter((task) => task.id !== id);
    setTasks(tasksToMaintain);
  };

  const handleCompleteTask = (id: string) => {
    const tasksUpdated = tasks.map((task) => {
      if (task.id === id) {
        task.complete = !task.complete;
      }
      return task;
    });

    setTasks(tasksUpdated);
  };

  return (
    <div className="bg-white flex flex-col items-center justify-center px-6 py-6 gap-2 rounded-xl">
      <Title>Crea una tarea</Title>
      <TodoForm onTaskSubmited={handleAddTask} />
      <div className="pt-6 w-full flex flex-col items-center justify-center gap-2">
        <Title>Lista de tareas</Title>
        {tasks.length > 0 ? (
          <>
            {tasks.map((task, index) => (
              <TaskItem key={index} {...task} onTaskCompleted={handleCompleteTask} onTaskDeleted={handleDeleteTask} />
            ))}
          </>
        ) : (
          <div>
            <p>Todavía no existen tareas. Crea una aquí ☝</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoAppPage;
