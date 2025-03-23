import { EmployeeProps } from "../../constants/types";

const Card = ({ title, icon: Icon, count, bgColor }: EmployeeProps) => {
  return (
    <div className="bg-white p-6 rounded-2xl flex flex-1 items-center gap-4 dark:bg-gray-600 dark:text-gray-400">
      <span className={`${bgColor} px-3 py-6 text-2xl rounded-2xl dark:bg-gray-500`}>
        <Icon />
      </span>
      <div>
        <h2 className="text-xl">
          <span className="text-2xl font-bold">{count}</span>/250
        </h2>
        <p className="font-bold">{title}</p>
      </div>
    </div>
  );
};

export default Card;
