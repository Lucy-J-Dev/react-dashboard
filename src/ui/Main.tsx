import { ChildrenProps } from "../constants/types";

const Main = ({ children }: ChildrenProps) => {
  return (
    <div className="flex flex-1 p-4 sm:ml-64 gap-2 flex-col lg:flex-row transition-all duration-300 mt-14 dark:bg-gray-800 bg-gray-200">
      {children}
    </div>
  );
};

export default Main;
