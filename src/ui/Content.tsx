import { ChildrenProps } from "../constants/types";

const Content = ({ children }: ChildrenProps) => {
  return <div className="flex-1 flex flex-col gap-5">{children}</div>;
};

export default Content;
