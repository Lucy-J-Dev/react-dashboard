// import { ChildrenProps } from "../../constants/types";

type ButtonProps = {
  children: string;
  onButtonClick: (val: string) => void;
};

const Button = ({ children, onButtonClick }: ButtonProps) => {
  return (
    <div
      onClick={() => onButtonClick(children)}
      className="h-14 w-14 text-2xl flex flex-1 items-center justify-center text-white bg-rose-600 rounded-lg hover:bg-orange-200 hover:text-slate-950 active:scale-95"
    >
      {children}
    </div>
  );
};

export default Button;
