import { users } from "../../constants";
import Title from "../../ui/Title";
import Member from "./Member";

const Team = () => {
  return (
    <div className="bg-white p-3 rounded-2xl dark:bg-gray-600 dark: text-gray-300 flex-1 flex flex-col gap-5 px-6 py-6">
      <Title>Team</Title>
      {users.map((user, index) => (
        <Member key={index} {...user} />
      ))}
    </div>
  );
};

export default Team;
