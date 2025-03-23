import { employeesData } from "../../constants";
import Card from "./Card";

const Stats = () => {
  return (
    <div className="flex gap-5">
      <div className="flex flex-1 gap-4 h-full">
        {employeesData.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Stats;
