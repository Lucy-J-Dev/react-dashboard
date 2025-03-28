import ShortCuts from "./ShortCuts";
import User from "./User";

const Profile = () => {
  return (
    <div className="px-2 py-4 bg-gray-300 rounded-2xl w-full dark:bg-gray-700 lg:w-60 xl:w-80 flex flex-col gap-4">
      <User />
      <ShortCuts />
    </div>
  );
};

export default Profile;
