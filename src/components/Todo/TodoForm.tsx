import { ChangeEvent, FormEvent, useState } from "react";
import AnimatedButton from "../../ui/Button";
import { Task } from "../../pages/TodoAppPage";

type TodoFormProps = {
  onTaskSubmited: (task: Task) => void;
};

const TodoForm = ({ onTaskSubmited }: TodoFormProps) => {
  const [todoInput, setTodoInput] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setTodoInput(target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (todoInput.trim() === "") return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      text: todoInput.trim(),
      complete: false,
    };

    setTodoInput("");
    onTaskSubmited(newTask);
  };

  return (
    <form className="flex items-center justify-center gap-2" onSubmit={handleSubmit}>
      <input
        className=" text-md bg-rose-200 px-4 py-4 rounded-lg border "
        type="text"
        name="todoInput"
        id="todoInput"
        value={todoInput}
        onChange={handleInputChange}
      />
      <AnimatedButton type="submit" text="Tareas" desc="Crear nueva tarea" />
    </form>
  );
};

export default TodoForm;
