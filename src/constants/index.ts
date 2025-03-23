import { GoGoal } from "react-icons/go";
import { GrPlan } from "react-icons/gr";
import { IoIosStats, IoIosSettings, IoIosPerson, IoIosPersonAdd, IoIosEyeOff } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { MdExposurePlus1 } from "react-icons/md";
import { FaTasks, FaCalculator } from "react-icons/fa";

import user01 from "../assets/user01.png";
import user02 from "../assets/user02.png";
import user03 from "../assets/user03.png";
import { EmployeeProps, LinkProps, ShortCutLinkProps, UserProps } from "./types";

export const links: LinkProps[] = [
  {
    href: "/",
    icon: RxDashboard,
    text: "Contenido",
  },
  {
    href: "/counter",
    icon: MdExposurePlus1,
    text: "Aplicación contador",
  },
  {
    href: "/todo",
    icon: FaTasks,
    text: "Aplicación tareas",
  },
  {
    href: "/calculator",
    icon: FaCalculator,
    text: "Aplicación calculadora",
  },
  // {
  //   href: "#",
  //   icon: IoIosLogOut,
  //   text: "Sign Up",
  // },
  // {
  //   href: "#",
  //   icon: FaCalendarAlt,
  //   text: "Kanban",
  //   badge: {
  //     text: "Pro",
  //     color: "bg-gray-100 text-gray-800",
  //     darkColor: "dark:bg-gray-700 dark:text-gray-300",
  //   },
  // },
  // {
  //   href: "#",
  //   icon: FaFacebookMessenger,
  //   text: "Inbox",
  //   badge: {
  //     text: "4",
  //     color: "bg-blue-100 text-blue-800",
  //     darkColor: "dark:bg-blue-900 dark:text-blue-300",
  //   },
  // },
];

export const employeesData: EmployeeProps[] = [
  {
    title: "Total Employees",
    icon: IoIosPerson,
    count: 200,
    bgColor: "bg-gray-100",
  },
  {
    title: "On Leave",
    icon: IoIosEyeOff,
    count: 15,
    bgColor: "bg-blue-100",
  },
  {
    title: "New Joinee",
    icon: IoIosPersonAdd,
    count: 25,
    bgColor: "bg-yellow-100",
  },
];

export const shortcutLink: ShortCutLinkProps[] = [
  {
    title: "Goals",
    icon: GoGoal,
  },
  {
    title: "Plan",
    icon: GrPlan,
  },
  {
    title: "Stats",
    icon: IoIosStats,
  },
  {
    title: "Setting",
    icon: IoIosSettings,
  },
];

export const users: UserProps[] = [
  {
    name: "Robert Fox",
    country: "USA",
    role: "Python Developer",
    image: user01,
    bgColor: "bg-yellow-100",
  },
  {
    name: "Jane Doe",
    country: "UK",
    role: "Frontend Developer",
    image: user02,
    bgColor: "bg-blue-100",
  },
  {
    name: "John Smith",
    country: "Canada",
    role: "Backend Developer",
    image: user03,
    bgColor: "bg-gray-100",
  },
  {
    name: "Alice Johnson",
    country: "Australia",
    role: "Full Stack Developer",
    image: user01,
    bgColor: "bg-slate-100",
  },
];

export const events = [
  {
    date: "01 Aug",
    title: "Upcoming Event",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    date: "15 Sept",
    title: "Annual Conference",
    description: "Join us for our annual conference.",
  },
  {
    date: "20 Sept",
    title: "Networking Meetup",
    description: "Connect with professionals in your field.",
  },
];
