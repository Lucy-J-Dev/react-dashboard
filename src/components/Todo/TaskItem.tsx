import { AiOutlineCloseCircle } from "react-icons/ai";
import { Task } from "../../pages/TodoAppPage";

type TaskProps = Task & {
  onTaskCompleted: (id: string) => void;
  onTaskDeleted: (id: string) => void;
};

const TaskItem = ({ id, text, complete, onTaskCompleted, onTaskDeleted }: TaskProps) => {
  return (
    <div className={`bg-purple-200 w-full flex items-center justify-between px-4 py-2 text-2xl gap-4`}>
      <div
        className={`px-4 cursor-pointer flex-grow ${complete ? "line-through" : ""}`}
        onClick={() => onTaskCompleted(id)}
      >
        {text}
      </div>
      <div className="cursor-pointer" onClick={() => onTaskDeleted(id)}>
        <AiOutlineCloseCircle className="w-6 h-6" />
      </div>
    </div>
  );
};

export default TaskItem;
