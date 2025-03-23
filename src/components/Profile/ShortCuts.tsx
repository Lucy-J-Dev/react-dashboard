import { IoIosArrowForward } from "react-icons/io";
import { shortcutLink } from "../../constants";
import Title from "../../ui/Title";

const ShortCuts = () => {
  return (
    <div className="flex gap-4 flex-col bg-white rounded-lg p-4 dark:bg-gray-600">
      <Title>Shortcuts</Title>
      {shortcutLink.map(({ icon: Icon, title }, index) => (
        <div key={index} className="flex justify-between items-center cursor-pointer rounded-sm">
          <div className="flex gap-4 items-center">
            <span className="bg-blue-100 p-2 rounded-full w-8 h-8 flex items-center justify-center dark:bg-gray-800 dark:text-gray-300">
              <Icon />
            </span>
            <h3 className="font-medium dark:text-gray-300">{title}</h3>
          </div>
          <span className="bg-gray-300 p-2 rounded-md dark:bg-gray-700 dark:text-gray-300 hover:mr-2 transition-all duration-500">
            <IoIosArrowForward />
          </span>
        </div>
      ))}
    </div>
  );
};

export default ShortCuts;
