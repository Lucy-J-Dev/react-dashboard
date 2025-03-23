import { IconType } from "react-icons";

export type ChildrenProps = {
  children: React.ReactNode;
};

export type BadgeProps = {
  text: string;
  color: string;
  darkColor: string;
};

export type LinkProps = {
  href: string;
  icon: IconType;
  text: string;
  badge?: BadgeProps;
};

export type EmployeeProps = {
  title: string;
  icon: IconType;
  count: number;
  bgColor: string;
};

export type ShortCutLinkProps = {
  title: string;
  icon: IconType;
};

export type UserProps = {
  name: string;
  country: string;
  role: string;
  image: string;
  bgColor: string;
};
