import { UserProps } from "../../constants/types";

const Member = ({ name, image, country, role, bgColor }: UserProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img src={image} alt={name} className="w-12 h-12 rounded-full flex" />
        <div>
          <h2 className="font-bold">{name}</h2>
          <span className="font-semibold text-gray-400 text-sm">{country}</span>
        </div>
      </div>
      <span
        className={`${bgColor} p-3 rounded-full text-xs text-gray-700 font-semibold dark:bg-gray-500 dark:text-gray-300`}
      >
        {role}
      </span>
    </div>
  );
};

export default Member;
