import { links } from "../../constants";
import LinkItem from "./LinkItem";

type SidebarProps = {
  isSidebarOpen: boolean;
};

const Sidebar = ({ isSidebarOpen }: SidebarProps) => {
  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-rose-300 border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } `}
    >
      <div className="h-full px-3 pb-4 overflow-y-auto">
        <ul className="space-y-2 font-semibold">
          {links.map((link, index) => (
            <LinkItem key={index} {...link} />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
